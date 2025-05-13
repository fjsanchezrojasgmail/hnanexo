import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { AdmGroupRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-group.bean';
import { AdministrationInspectorVmService } from './administration-inspector.vm.service';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';
import { AdmInspectorRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-inspector.bean';

@Component({
  selector: 'hnanexo-administration-group',
  templateUrl: './administration-inspector.component.html',
  styleUrls: ['./administration-inspector.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministrationInspectorComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined;
  public paginationTable: number | undefined;
  public selectedGroup: AdmGroupRS | undefined; // Grupo seleccionado
  public selectedInspector: AdmInspectorRS | undefined; // Grupo seleccionado
  public updateList: Boolean = false; // Variable que controla cuando se actualiza el listado

  @ViewChild('groupDetailPanel') groupDetailPanel!: RightPanelComponent;  // Panel para consultar un grupo
  @ViewChild('groupEditPanel') groupEditPanel!: RightPanelComponent;  // Panel para modificar un grupo
  @ViewChild('groupCreatePanel') groupCreatePanel!: RightPanelComponent // Panel para crear un grupo
  @ViewChild('modalCancelOperation') modalCancelOperation!: HnDialogComponent; // Cuadro de dialogo que aparece cuando cancelamos el formulario

  constructor(public configService: ConfigService,
    public vm: AdministrationInspectorVmService) { }

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
   * Método que se ejecuta al hacer click en 'Consultar' en algún grupo
   * @param group grupo seleccionado del listado
   */
  methodClickDetailGroup(inspector: AdmInspectorRS): void {
    this.selectedInspector = inspector;
    this.groupDetailPanel.onOpen();
  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailGroup() {
    this.selectedInspector = undefined;
    this.groupDetailPanel.onClose();
  }

  /**
  * Método que se ejecuta al hacer click en 'Modificar' en algún grupo
  * @param group grupo seleccionado del listado
  */
  methodClickEditGroup(group: AdmInspectorRS): void {
    this.selectedInspector = group;
    this.updateList = false;
    this.groupEditPanel.onOpen();
  }

  /**
 * Método que cierra el detalle de modificación
 */
  methodCloseEditGroup() {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de modificar grupo
   */
  methodOnSubmitFormEditGroup() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.groupEditPanel.onClose();
  }

  /**
   * Método que se ejecuta al hacer click en 'Crear grupo'
   */
  methodClickCreateGroup(): void {
    this.updateList = false;
    this.groupCreatePanel.onOpen();
  }

  /**
  * Método que se ejecuta al cerrar el detalle de creación
  */
  methodCloseCreateGroup() {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear grupo
   */
  methodOnSubmitFormCreateGroup() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.groupCreatePanel.onClose();
  }

  /**
 * Método que acepta la cancelación del formulario
 */
  accept() {
    this.selectedInspector ? this.groupEditPanel.onClose() : this.groupCreatePanel.onClose();
    this.selectedInspector = undefined;
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
