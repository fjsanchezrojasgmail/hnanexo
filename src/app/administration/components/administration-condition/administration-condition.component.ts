import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { AdministratorConditionVmService } from './administration-condition.vm.service';
import { AdmConditionRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-condition.bean';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';

@Component({
  selector: 'hnanexo-administration-condition',
  templateUrl: './administration-condition.component.html',
  styleUrls: ['./administration-condition.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministratorConditionComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined;;  // Url a la que se van a hacer peticiones
  public paginationTable: number | undefined;; // Número de elementos por página que va a tener el componente
  public selectedCondition: AdmConditionRS | undefined;; // Condición seleccionada
  public updateList: Boolean = false; // Variable que controla cuando se actualiza el listado
  public openModal: boolean = false; // Variable que indica si el modal referido a reglas de protocolo está abierto o no

  @ViewChild('conditionCreatePanel') conditionCreatePanel!: RightPanelComponent;  // Panel para crear
  @ViewChild('conditionEditPanel') conditionEditPanel!: RightPanelComponent;  // Panel para modificar
  @ViewChild('conditionDetailPanel') conditionDetailPanel!: RightPanelComponent;  // Panel para ver el detalle
  @ViewChild('modalCancelOperation') modalCancelOperation!: HnDialogComponent; // Cuadro de dialogo que aparece cuando cancelamos el formulario

  constructor(public vm: AdministratorConditionVmService,
    public configService: ConfigService) { }

  // Modificamos el title a traves de DOM de los botones ventana de dialogo
  ngAfterViewInit(): void {
    const buttonAccept = this.modalCancelOperation.dialog.el.nativeElement.querySelectorAll('#buttonsDialog .hn-main-button')[0];
    buttonAccept.title = this.getDeep(this.vm.componentMessages, 'label.modal.action.accept');
    const buttonCancel = this.modalCancelOperation.dialog.el.nativeElement.querySelectorAll('#buttonsDialog .hn-generic-button')[0];
    buttonCancel.title = this.getDeep(this.vm.componentMessages, 'label.modal.action.cancel');
  }

  ngOnInit() {
    this.urlHnConfiguration = this.configService.urlGetHnConfiguration;
    this.paginationTable = this.configService.paginationTable;
  }

  /**
   * Método que se ejecuta al hacer click en 'Crear Condición'
   */
  methodClickCreateCondition(): void {
    this.updateList = false;
    this.conditionCreatePanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de creación
   */
  methodCloseCreateCondition(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al hacer click en 'Modificar'
   */
  methodClickEditCondition(subgroup: any): void {
    this.selectedCondition = subgroup;
    this.updateList = false;
    this.conditionEditPanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de modificación
   */
  methodCloseEditCondition(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de modificar
   */
  methodOnSubmitFormEditCondition() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.conditionEditPanel.onClose();
    this.selectedCondition = undefined;
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear
   */
  methodOnSubmitFormCreateCondition() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.conditionCreatePanel.onClose();
    this.selectedCondition = undefined;
  }

    /**
   * Método que se ejecuta al hacer click en 'Consultar'
   * @param subgroup subgrupo seleccionado del listado
   */
  methodClickDetailCondition(subgroup: any): void {
    this.selectedCondition = subgroup;
    this.conditionDetailPanel.onOpen();

  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailCondition() {
    this.selectedCondition = undefined;
    this.conditionDetailPanel.onClose();
  }

  /**
  * Cambia la variable booleana que indica si el modal referido a las reglas de protocolo está abierto o no
  */
  onOffModal($event: boolean) {
    this.openModal = $event;
  }

  /**
  * Método que acepta la cancelación del formulario
  */
  accept() {
    this.selectedCondition ? this.conditionEditPanel.onClose() : this.conditionCreatePanel.onClose();
    this.selectedCondition = undefined;
    this.modalCancelOperation.display = false;

  }

  /**
  * Método que cierra el modalCancelOperation
  */
  cancel() {
    this.modalCancelOperation.display = false;
  }

  getDeep(obj: any, path: string): any {
    return path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj);
  }

}
