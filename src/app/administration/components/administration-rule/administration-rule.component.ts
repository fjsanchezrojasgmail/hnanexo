import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { AdministrationRuleVmService } from './administration-rule.vm.service';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { AdmRuleRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-rule.bean';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';

@Component({
  selector: 'hnanexo-administration-rule',
  templateUrl: './administration-rule.component.html',
  styleUrls: ['./administration-rule.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministrationRuleComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined;  // Url a la que se van a hacer peticiones

  public paginationTable: number | undefined; // Número de elementos por página que va a tener el componente

  public selectedRule: AdmRuleRS | undefined; // Regla seleccionada

  public updateList: Boolean = false; // Variable que controla cuando se actualiza el listado

  @ViewChild('ruleCreatePanel') ruleCreatePanel!: RightPanelComponent;  // Panel para crear una regla

  @ViewChild('ruleEditPanel') ruleEditPanel!: RightPanelComponent;  // Panel para modificar una regla

  @ViewChild('ruleDetailPanel') ruleDetailPanel!: RightPanelComponent;  // Panel el detalle de una regla

  /**Modal de confirmación */
  @ViewChild('modalCancelOperation')
  modalCancelOperation!: HnDialogComponent; // Modal que va a saltar cuando le demos clic a cancelar la modificación o la creación

  /** General Modales */
  dialog: string = HnDialogComponent.type_confirmation; // Tipo del que van a ser los diálogos

  iconCancel: String = 'ui-hn-icon icon-cancel'; // Clases del icono cancelar

  iconAccept: String = 'ui-hn-icon icon-accept'; // Clases del icono aceptar


  constructor(public configService: ConfigService,
    public vm: AdministrationRuleVmService) { }

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
   * Método que se ejecuta al hacer click en 'Modificar' en alguna regla
   */
  methodClickEditRule(rule: AdmRuleRS): void {
    this.selectedRule = rule;
    this.updateList = false;
    this.ruleEditPanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de modificación
   */
  methodCloseEditRule(): void {
    this.modalCancelOperation.display = true;
  }

    /**
   * Método que se ejecuta al hacer click en 'Crear Regla'
   */
  methodClickCreateRule(): void {
    this.updateList = false;
    this.ruleCreatePanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de creación
   */
  methodCloseCreateRule(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear regla
   */
  methodOnSubmitFormCreateRule() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.ruleCreatePanel.onClose();
    this.selectedRule = undefined;
  }
  /**
   * Método que se ejecuta al enviar el formulario de crear regla
   */
  methodOnSubmitFormEditRule() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.ruleEditPanel.onClose();
    this.selectedRule = undefined;
  }

  /**
   * Método que se ejecuta al hacer click en 'Consultar' en alguna regla
   * @param rule regla seleccionada del listado
   */
  methodClickDetailRule(rule: AdmRuleRS): void {
    this.selectedRule = rule;
    this.ruleDetailPanel.onOpen();
  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailRule() {
    this.selectedRule = undefined;
    this.ruleDetailPanel.onClose();
  }

    /**
   * Método que se ejecuta cuando aceptamos el modal de confirmación
   */
  accept() {
    this.selectedRule ? this.ruleEditPanel.onClose() : this.ruleCreatePanel.onClose();
    this.selectedRule = undefined;
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
