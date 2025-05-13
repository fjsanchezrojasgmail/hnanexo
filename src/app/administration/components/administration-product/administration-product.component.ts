import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';
import { AdministrationProductVmService } from './administration-product.vm.service';
import { ConfigService } from '../../../service/config.service';
import { AdmProductRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-product.bean'
@Component({
  selector: 'hnanexo-administration-product',
  templateUrl: './administration-product.component.html',
  styleUrls: ['./administration-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministrationProductComponent implements OnInit, AfterViewInit {

  public urlHnConfiguration: string | undefined;  // Url a la que se van a hacer peticiones
  public urlHnreq: string | undefined;  // Url a la que se van a hacer peticiones FHIR
  public paginationTable: number | undefined; // Número de elementos por página que va a tener el componente
  public selectedProduct: AdmProductRS | undefined; // Producto seleccionado
  public updateList: Boolean = false; // Variable que controla cuando se actualiza el listado
  public tamMaxUploadIMG_MB: number | undefined; // Variable que configura el tamaño máximo de subida de imagenes en MB

  @ViewChild('productCreatePanel') productCreatePanel!: RightPanelComponent;  // Panel para crear un subgrupo
  @ViewChild('productEditPanel') productEditPanel!: RightPanelComponent;  // Panel para modificar un subgrupo
  @ViewChild('productDetailPanel') productDetailPanel!: RightPanelComponent;  // Panel para el detalle un subgrupo

  /**Modal de confirmación */
  @ViewChild('modalCancelOperation') modalCancelOperation!: HnDialogComponent; // Modal que va a saltar cuando le demos clic a cancelar la modificación o la creación

  /** General Modales */
  dialog: string = HnDialogComponent.type_confirmation; // Tipo del que van a ser los diálogos

  constructor(public vm: AdministrationProductVmService,
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
    this.urlHnreq = this.configService.urlGetHNReq;
    this.paginationTable = this.configService.paginationTable;
    this.tamMaxUploadIMG_MB = this.configService.tamMaxUploadIMG_MB;
  }

  /**
   * Método que se ejecuta al hacer click en 'Crear Producto'
   */
  methodClickCreateProduct(): void {
    this.updateList = false;
    this.productCreatePanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de creación
   */
  methodCloseCreateProduct(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al hacer click en 'Modificar' en algún subgrupo
   */
  methodClickEditProduct(product: AdmProductRS): void {
    this.selectedProduct = product;
    this.updateList = false;
    this.productEditPanel.onOpen();
  }

  /**
   * Método que se ejecuta al cerrar el detalle de modificación
   */
  methodCloseEditProduct(): void {
    this.modalCancelOperation.display = true;
  }

  /**
   * Método que se ejecuta al enviar el formulario de modificar subgrupo
   */
  methodOnSubmitFormEditProduct() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.productEditPanel.onClose();
    this.selectedProduct = undefined;
  }

  /**
   * Método que se ejecuta al enviar el formulario de crear subgrupo
   */
  methodOnSubmitFormCreateProduct() {
    // Hacemos que se actualice el listado y cerramos el panel
    this.updateList = true;
    this.productCreatePanel.onClose();
    this.selectedProduct = undefined;
  }

  /**
 * Método que se ejecuta al hacer click en 'Consultar' en algún subgrupo
 * @param product subgrupo seleccionado del listado
 */
  methodClickDetailProduct(product: AdmProductRS): void {
    this.selectedProduct = product;
    this.productDetailPanel.onOpen();

  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailProduct() {
    this.selectedProduct = undefined;
    this.productDetailPanel.onClose();
  }

  /**
   * Método que se ejecuta cuando aceptamos el modal de confirmación
   */
  accept() {
    this.selectedProduct ? this.productEditPanel.onClose() : this.productCreatePanel.onClose();
    this.selectedProduct = undefined;
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
