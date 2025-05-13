import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { AdmSubgroupRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-subgroup.bean';
import { AdministrationSubgroupVmService } from './administration-subgroup.vm.service';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';

@Component({
  selector: 'hnanexo-administration-subgroup',
  templateUrl: './administration-subgroup.component.html',
  styleUrls: ['./administration-subgroup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministrationSubgroupComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined;  // Url a la que se van a hacer peticiones

  public paginationTable: number | undefined;// Número de elementos por página que va a tener el componente

  public selectedSubgroup: AdmSubgroupRS | undefined; // Subgrupo seleccionado

  public updateList: Boolean = false; // Variable que controla cuando se actualiza el listado

  @ViewChild('subgroupCreatePanel') subgroupCreatePanel!: RightPanelComponent;  // Panel para crear un subgrupo

  @ViewChild('subgroupEditPanel') subgroupEditPanel!: RightPanelComponent;  // Panel para modificar un subgrupo

  @ViewChild('subgroupDetailPanel') subgroupDetailPanel!: RightPanelComponent;  // Panel para el detalle un subgrupo

  /**Modal de confirmación */
  @ViewChild('modalCancelOperation')
  modalCancelOperation!: HnDialogComponent; // Modal que va a saltar cuando le demos clic a cancelar la modificación o la creación

  /** General Modales */
  dialog: string = HnDialogComponent.type_confirmation; // Tipo del que van a ser los diálogos

  iconCancel: String = 'ui-hn-icon icon-cancel'; // Clases del icono cancelar

  iconAccept: String = 'ui-hn-icon icon-accept'; // Clases del icono aceptar

  public urlOntology: string | undefined;

  constructor(public vm: AdministrationSubgroupVmService,
    public configService: ConfigService) { }

  // Modificamos el title a traves de DOM de los botones ventana de dialogo
  ngAfterViewInit(): void {
    const buttonAccept = this.modalCancelOperation.dialog.el.nativeElement.querySelectorAll('#buttonsDialog .hn-main-button')[0];
    buttonAccept.title = this.getDeep(this.vm.componentMessages,'label.modal.action.accept');
    const buttonCancel = this.modalCancelOperation.dialog.el.nativeElement.querySelectorAll('#buttonsDialog .hn-generic-button')[0];
    buttonCancel.title = this.getDeep(this.vm.componentMessages,'label.modal.action.cancel');
  }

  ngOnInit() {
    this.urlHnConfiguration = this.configService.urlGetHnConfiguration;
    this.paginationTable = this.configService.paginationTable;
    this.urlOntology = this.configService.urlOntology;
  }

  /**
   * Método que se ejecuta al hacer click en 'Crear Subgrupo'
   */
  methodClickCreateSubgroup(): void {
    this.updateList = false;
    this.subgroupCreatePanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de creación
   */
  methodCloseCreateSubgroup(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al hacer click en 'Modificar' en algún subgrupo
   */
  methodClickEditSubgroup(subgroup: AdmSubgroupRS): void {
    this.selectedSubgroup = subgroup;
    this.updateList = false;
    this.subgroupEditPanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de modificación
   */
  methodCloseEditSubgroup(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de modificar subgrupo
   */
  methodOnSubmitFormEditSubgroup() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.subgroupEditPanel.onClose();
    this.selectedSubgroup = undefined;
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear subgrupo
   */
  methodOnSubmitFormCreateSubgroup() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.subgroupCreatePanel.onClose();
    this.selectedSubgroup = undefined;
  }

    /**
   * Método que se ejecuta al hacer click en 'Consultar' en algún subgrupo
   * @param subgroup subgrupo seleccionado del listado
   */
  methodClickDetailSubgroup(subgroup: AdmSubgroupRS): void {
    this.selectedSubgroup = subgroup;
    this.subgroupDetailPanel.onOpen();

  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailSubgroup() {
    this.selectedSubgroup = undefined;
    this.subgroupDetailPanel.onClose();
  }

  /**
   * Método que se ejecuta cuando aceptamos el modal de confirmación
   */
  accept() {
    this.selectedSubgroup ? this.subgroupEditPanel.onClose() : this.subgroupCreatePanel.onClose();
    this.selectedSubgroup = undefined;
    this.modalCancelOperation.display = false;
  }

  /**
   * Método que se ejecuta cuando se cancela el modal de confirmación
   */
  cancel() {
    this.modalCancelOperation.display = false;
  }

  getDeep(obj: any, path: string): any {
    return path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj);
  }

}
