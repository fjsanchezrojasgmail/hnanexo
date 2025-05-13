import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { AdministrationServiceVmService } from './administration-service.vm.service';
import { AdmServiceRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-service.bean';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';


@Component({
  selector: 'hnanexo-administration-service',
  templateUrl: './administration-service.component.html',
  styleUrls: ['./administration-service.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministrationServiceComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined   // Url a la que se van a hacer peticiones

  public paginationTable: number | undefined; // Número de elementos por página que va a tener el componente

  public selectedService: AdmServiceRS | undefined; // Servicio seleccionada

  public updateList: Boolean = false; // Variable que controla cuando se actualiza el listado

  @ViewChild('serviceCreatePanel') serviceCreatePanel!: RightPanelComponent;  // Panel para crear un servicio

  @ViewChild('serviceEditPanel') serviceEditPanel!: RightPanelComponent;  // Panel para modificar un servicio

  @ViewChild('serviceDetailPanel') serviceDetailPanel!: RightPanelComponent;  // Panel el detalle de un servicio

  /**Modal de confirmación */
  @ViewChild('modalCancelOperation')
  modalCancelOperation!: HnDialogComponent; // Modal que va a saltar cuando le demos clic a cancelar la modificación o la creación

  /** General Modales */
  dialog: string = HnDialogComponent.type_confirmation; // Tipo del que van a ser los diálogos

  iconCancel: String = 'ui-hn-icon icon-cancel'; // Clases del icono cancelar

  iconAccept: String = 'ui-hn-icon icon-accept'; // Clases del icono aceptar

  constructor(public configService: ConfigService,
    public vm: AdministrationServiceVmService) { }

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
  }

  /**
   * Método que se ejecuta al hacer click en 'Modificar' en algun servicio
   */
  methodClickEditService(service: AdmServiceRS): void {
    this.selectedService = service;
    this.updateList = false;
    this.serviceEditPanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de modificación
   */
  methodCloseEditService(): void {
    this.modalCancelOperation.display = true;
  }

    /**
   * Método que se ejecuta al hacer click en 'Crear Servicio'
   */
  methodClickCreateService(): void {
    this.updateList = false;
    this.serviceCreatePanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de creación
   */
  methodCloseCreateService(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear servicio
   */
  methodOnSubmitFormCreateServicio() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.serviceCreatePanel.onClose();
    this.selectedService = undefined;
}
  /**
   * Método que se ejecuta al enviar el formulario de crear servicio
   */
  methodOnSubmitFormEditService() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.serviceEditPanel.onClose();
    this.selectedService = undefined;
  }

  /**
   * Método que se ejecuta al hacer click en 'Consultar' en algún servicio
   * @param service servicio seleccionado del listado
   */
  methodClickDetailService(service: AdmServiceRS): void {
    this.selectedService = service;
    this.serviceDetailPanel.onOpen();
  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailService() {
    this.selectedService = undefined;
    this.serviceDetailPanel.onClose();
  }

  /**
   * Método que se ejecuta cuando aceptamos el modal de confirmación
   */
  accept() {
    this.selectedService ? this.serviceEditPanel.onClose() : this.serviceCreatePanel.onClose();
    this.selectedService = undefined;
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
