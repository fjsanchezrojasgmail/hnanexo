import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { AdmBlokingReasonRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-blocking-reason.bean';
import { AdministrationBlockingReasonVmService } from './administration-blocking-reason.vm.service';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';

@Component({
  selector: 'hnanexo-administration-blocking-reason',
  templateUrl: './administration-blocking-reason.component.html',
  styleUrls: ['./administration-blocking-reason.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministrationBlockingReasonComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined;  // Url a la que se van a hacer peticiones

  public paginationTable: number | undefined; // Número de elementos por página que va a tener el componente

  public selectedItem: AdmBlokingReasonRS | undefined; // motivo bloqueo seleccionado

  public updateList: Boolean = false; // Variable que controla cuando se actualiza el listado

  @ViewChild('blockingReasonCreatePanel') blockingReasonCreatePanel!: RightPanelComponent;  // Panel para crear un motivo bloqueo

  @ViewChild('blockingReasonEditPanel') blockingReasonEditPanel!: RightPanelComponent;  // Panel para modificar un motivo bloqueo

  @ViewChild('blockingReasonDetailPanel') blockingReasonDetailPanel!: RightPanelComponent;  // Panel para el detalle un motivo bloqueo

  /**Modal de confirmación */
  @ViewChild('modalCancelOperation')
  modalCancelOperation!: HnDialogComponent; // Modal que va a saltar cuando le demos clic a cancelar la modificación o la creación

  /** General Modales */
  dialog: string = HnDialogComponent.type_confirmation; // Tipo del que van a ser los diálogos

  iconCancel: String = 'ui-hn-icon icon-cancel'; // Clases del icono cancelar

  iconAccept: String = 'ui-hn-icon icon-accept'; // Clases del icono aceptar

  public urlOntology: string | undefined;;

  constructor(public vm: AdministrationBlockingReasonVmService,
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
   * Método que se ejecuta al hacer click en 'Crear'
   */
  methodClickCreate(): void {
    this.updateList = false;
    this.blockingReasonCreatePanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de creación
   */
  methodCloseCreate(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al hacer click en 'Modificar'
   */
  methodClickEdit(data: any): void {
    this.selectedItem = data;
    this.updateList = false;
    this.blockingReasonEditPanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de modificación
   */
  methodCloseEdit(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de modificar
   */
  methodOnSubmitFormEdit() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.blockingReasonEditPanel.onClose();
    this.selectedItem = undefined;
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear
   */
  methodOnSubmitFormCreate() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.blockingReasonCreatePanel.onClose();
    this.selectedItem = undefined;
  }

    /**
   * Método que se ejecuta al hacer click en 'Consultar'
   * @param data seleccionado del listado
   */
  methodClickDetail(data: any): void {
    this.selectedItem = data;
    this.blockingReasonDetailPanel.onOpen();

  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetail() {
    this.selectedItem = undefined;
    this.blockingReasonDetailPanel.onClose();
  }

  /**
   * Método que se ejecuta cuando aceptamos el modal de confirmación
   */
  accept() {
    this.selectedItem ? this.blockingReasonEditPanel.onClose() : this.blockingReasonCreatePanel.onClose();
    this.selectedItem = undefined;
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
