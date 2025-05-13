import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { AdmConstantRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-constant.bean';
import { AdministrationConstantVmService } from './administration-constant.vm.service';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';

@Component({
  selector: 'hnanexo-administration-constant',
  templateUrl: './administration-constant.component.html',
  styleUrls: ['./administration-constant.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AdministrationConstantComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined;
  public paginationTable: number | undefined;
  public selectedConstant: AdmConstantRS | undefined; // Constante seleccionada

  public updateList: boolean = false; // Variable que controla cuando se actualiza el listado

  @ViewChild('constantCreatePanel') constantCreatePanel!: RightPanelComponent;  // Panel para modificar una constante
  @ViewChild('constantEditPanel') constantEditPanel!: RightPanelComponent;  // Panel para modificar una constante
  @ViewChild('constantDetailPanel') constantDetailPanel!: RightPanelComponent;  // Panel para el detalle una constante
  @ViewChild('modalCancelOperation') modalCancelOperation!: HnDialogComponent; // Cuadro de dialogo que aparece cuando cancelamos el formulario

  /** General Modales */
  dialog: string = HnDialogComponent.type_confirmation; // Tipo del que van a ser los diálogos

  iconCancel: String = 'ui-hn-icon icon-cancel'; // Clases del icono cancelar

  iconAccept: String = 'ui-hn-icon icon-accept'; // Clases del icono aceptar

  constructor(public vm: AdministrationConstantVmService,
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
  }

   /**
   * Método que se ejecuta al hacer click en 'Crear Constante'
   */
  methodClickCreateConstant(): void {
    this.updateList = false;
    this.constantCreatePanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de creación
   */
  methodCloseCreateConstant(): void {
    if(!this.updateList){
      this.modalCancelOperation.display = true;
    }
  }

  /**
   * Método que se ejecuta al hacer click en 'Modificar' en algúna constante
   */
  methodClickEditConstant(constant: AdmConstantRS): void {
    this.selectedConstant = constant;
    this.updateList = false;
    this.constantEditPanel.onOpen();
  }

   /**
   * Método que cierra el detalle de modificación
   */
  methodCloseEditConstant() {
    if(!this.updateList){
      this.modalCancelOperation.display = true;
    }
  }

  /**
   * Método que se ejecuta al enviar el formulario de modificar grupo
   */
  methodOnSubmitFormEditConstant() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.constantEditPanel.onClose();
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear constante
   */
  methodOnSubmitFormCreateConstant() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.constantCreatePanel.onClose();
  }

  /**
   * Método que se ejecuta al hacer click en 'Consultar' en algúna constante
   * @param constant constante seleccionada del listado
   */
  methodClickDetailConstant(constant: AdmConstantRS): void {
    this.selectedConstant = constant;
    this.constantDetailPanel.onOpen();

  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailConstant() {
    this.selectedConstant = undefined;
    this.constantDetailPanel.onClose();
  }

  /**
   * Método que acepta la cancelación del formulario
   */
  accept() {
    this.selectedConstant ? this.constantEditPanel.onClose() : this.constantCreatePanel.onClose();
    this.selectedConstant = undefined;
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
