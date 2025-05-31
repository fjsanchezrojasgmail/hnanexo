

import { Component, OnInit, ViewEncapsulation, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AdmListComponentService } from './adm-list-component.service';
import { ListsDropdownAnexo } from '../../../../bean/hnanexo-components-constants.bean';

import { Table,TableModule } from 'primeng/table';
import { ComponentMessages } from '../../../../bean/i18n-bean';
import { AdmGroupRS } from '../../../beans/admGroupRS.bean';

import { State } from '../../../beans/state.bean';
import { CommonModule } from '@angular/common';
import { HnInputTextComponent } from '../../../../components/input-text/hn-input-text.component';
import { FormsModule } from '@angular/forms';
import { HnComboComponent } from '../../../../components/combo/hn-combo.component';
import { HnButtonComponent } from '../../../../components/button/hn-button-component.component';
import { HnSplitButtonComponent } from '../../../../components/split-button/split-button.component';
import { HnItemSplitButtonComponent } from '../../../../components/item-split-button/item-split-button.component';
import { AnexoHNHeaderComponent } from '../../../../components/header/anexo-hn-header-component';
import { AnexoHnMessageComponent } from '../../../../components/anexo-message/anexo-message.component';
import { AdmUtil } from '../../../../util/adm-util';
import { PrimeTemplate } from 'primeng/api';
import { HnSwitchComponent } from '../../../../components/switch/hn-switch.component';

export type tableCols = {

  'field': string,
  'header': string

}
@Component({
  selector: 'hnanexo-adm-list-component',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TableModule,
    PrimeTemplate,
    HnInputTextComponent,
    HnComboComponent,
    HnButtonComponent,
    HnSwitchComponent,
    HnSplitButtonComponent,
    HnItemSplitButtonComponent,
    AnexoHnMessageComponent
  ],
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



  @ViewChild('dt') dt!: Table;

  cols: tableCols[] | undefined; // columnas de la tabla
  states: State[] = []; // Estados que pueden darse
  admUtil: AdmUtil | undefined; // Propiedad en la que se va a declarar la clase util AdmUtil


  //Estilo de icono de busqueda de los filtros
  codeSearchicon: string | null = "ui-hn-icon icon-search";
  descriptionSearchicon: string | null = "ui-hn-icon icon-search";

  constructor(public admListService: AdmListComponentService) { }


  ngOnInit() {
    this.initUrls(); // Inicializamos la urls
    this.admListService.initComponent(); // Nos traemos los catálogos
    this.paginationTable = 1;

    console.log("Listing: ", this.admListService.listing);

    this.admUtil = AdmUtil;

    this.cols = [
      { field: 'code', header: this.getTraductMessage('label.adm.table.catalog.cod') },
      { field: 'description', header: this.getTraductMessage('label.adm.table.description') },
      { field: 'typeProduct', header: this.getTraductMessage('label.adm.table.type') },
      { field: 'state', header: this.getTraductMessage('label.adm.table.state') },
      { field: 'actions', header: this.getTraductMessage('label.adm.table.actions') },
    ];

    // Rellenamos los valores del combo de lateralidad con los valores del listado de constantes

     ListsDropdownAnexo.VALUES_STATES.forEach(item => {
      console.log(item.label, item.value);
      this.states.push({ label: this.getTraductMessage(item.label), value: item.value });
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

  onFilterInput(event: Event, col: tableCols, value: string) {
    const input = event.target as HTMLInputElement;
    this.dt.filter(input.value, col.field, value);
  }

  getTraduction(messages: { [key: string]: string }, path: string): string {
    return messages[path] || path;
  }

  getTraductMessage(path: string): string {
    return (ComponentMessages.es as Record<string, string>)[path] ?? path;
  }

  getTypeProductLabel(code: string): string {
    return AdmUtil.getLabelOfValueInStateCombo(code, this.admListService.types);
  }

  getElementsPerPages(dt: Table, textOf: string): string {
    const traduction = this.getTraductMessage(textOf)
    return AdmUtil.elementsPerPages(dt,traduction, this.paginationTable!);
  }

}

