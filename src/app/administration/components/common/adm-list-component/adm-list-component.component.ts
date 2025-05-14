import { AdmUtil } from './../../../../../../../hnanexo-components/ts/hnanexo-components/util/adm-util';

import { Component, OnInit, ViewEncapsulation, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AdmListComponentService } from './adm-list-component.service';
import { ListsDropdownAnexo } from '../../../../bean/hnanexo-components-constants.bean';

import { TableModule } from 'primeng/table';
import { ComponentMessages } from '../../../../bean/i18n-bean';
import { AdmGroupRS } from '../../../beans/admGroupRS.bean';

import { State } from '../../../beans/state.bean';
import { CommonModule } from '@angular/common';
import { HnInputTextComponent } from '../../../../components/input-text/hn-input-text.component';


@Component({
  selector: 'hnanexo-adm-list-component',
  standalone: true,
  imports: [CommonModule,TableModule,HnInputTextComponent],
  templateUrl: './adm-list-component.component.html',
  styleUrls: ['./adm-list-component.component.css']
})
export class AdmListComponentComponent implements OnInit,OnChanges {

  @Input() urlHnConfiguration: string | undefined; // Url a la que se van a hacer peticiones
  @Input() paginationTable: number | undefined; // Número de elementos por página que va a tener el componente
  @Input() updateList: boolean | undefined; // Booleano que se usa para saber cuando se tiene que actualizar la lista

  //Variables de los filtros de busqueda
  @Input() codeValue: string | undefined;
  @Input() descriptionValue: string | undefined;

  @Output() detailGroupEvent = new EventEmitter(); // Evento que se emite al hacer clic en 'Consultar'
  @Output() editGroupEvent = new EventEmitter(); // Evento que se emite al hacer clic en 'Modificar'
  @Output() onCreateGroupEvent = new EventEmitter<AdmGroupRS>(); // Se emite parar abrir el detalle de crear grupo



  @ViewChild('dt') dt!: TableModule;

  cols: {
    'field': string,
    'header': string
  }[] | undefined; // columnas de la tabla
  states: State[] = []; // Estados que pueden darse
  admUtil: AdmUtil | undefined; // Propiedad en la que se va a declarar la clase util AdmUtil

  //Estilo de icono de busqueda de los filtros
  codeSearchicon: string | null = "ui-hn-icon icon-search";
  descriptionSearchicon: string | null = "ui-hn-icon icon-search";

  constructor(public admListService: AdmListComponentService) { }


  ngOnInit() {
    this.initUrls(); // Inicializamos la urls
    this.admListService.initComponent(); // Nos traemos los catálogos

    this.admUtil = AdmUtil;

    this.cols = [
      { field: 'code', header: this.getTraduction(ComponentMessages.es,'label.adm.table.catalog.cod') },
      { field: 'description', header: this.getTraduction(ComponentMessages.es,'label.adm.table.description') },
      { field: 'typeProduct', header: this.getTraduction(ComponentMessages.es,'label.adm.table.type') },
      { field: 'state', header: this.getTraduction(ComponentMessages.es,'label.adm.table.state') },
      { field: 'actions', header: this.getTraduction(ComponentMessages.es,'label.adm.table.actions') },
    ];

    // Rellenamos los valores del combo de lateralidad con los valores del listado de constantes
     ListsDropdownAnexo.VALUES_STATES.forEach(item => {
      this.states.push({ label: this.getTraduction(ComponentMessages.es,item.label), value: item.value });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Cuando cambie la variable 'updateList' volveremos a cargar el listado
    if (changes['updateList']) {
      if (this.updateList === true) {
        this.admListService.initComponent();
      }
    }
  }

  /**
    Método que setea las urls del service
   */

  initUrls() {
    this.admListService.url = this.urlHnConfiguration ? this.urlHnConfiguration : '';
  }

   /**
   * Método que se ejecuta cuando se quiere ver el detalle de un elemento
   */

  onActionDetail(event$: any) {
    this.detailGroupEvent.emit(event$);
  }

  /**
   * Método que se esjecuta cuando se quiere modificar un elemento
   * @param group grupo que se quiere modificar
   */

  onActionEdit(event$: any) {
    this.editGroupEvent.emit(event$);
  }

  /**
 * Método que se ejecuta al pulsar el botón de crear
 */

  openCreateDetail() {
    this.onCreateGroupEvent.emit();
  }

  /**
   * Metodo que muestra u oculta el icono de la busqueda del campo de codigo.
   */

  onChangeFilterCode()
  {
    if(this.codeValue && this.codeValue.length > 0 ){
      this.codeSearchicon=null;
    }
    else {
     this.codeSearchicon ="ui-hn-icon icon-search";
    }
  }

  /**
   * Metodo que muestra u oculta el icono de la busqueda del campo de descripcion.
   */

  onChangeFilterDescription()
  {
    if(this.descriptionValue && this.descriptionValue.length > 0 ){
      this.descriptionSearchicon = null;
    }
    else {
     this.descriptionSearchicon ="ui-hn-icon icon-search";
    }
  }

  getTraduction(messages: { [key: string]: string }, path: string): string {
    return messages[path] || path;
  }

}

