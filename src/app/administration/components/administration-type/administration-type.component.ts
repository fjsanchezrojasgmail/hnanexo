
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ConfigService } from '../../../service/config.service';

import { AdministratonTypeVmService } from './administration-type.vm.service';
import { RightPanelComponent } from '../common/right-panel-component/right-panel-component.component';
import { AdmTypeRS } from '../../beans/admTypeRS.bean';
import { AdmTypeDetailComponent } from '../common/right-panel-component/adm-type-detail/adm-type-detail.component';

@Component({
  selector: 'hnanexo-administration-type',
  standalone: true,
  imports: [AdmTypeDetailComponent],
  templateUrl: './administration-type.component.html',
  styleUrls: ['./administration-type.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministratonTypeComponent implements OnInit {

  public urlHnConfiguration: string | undefined;
  public paginationTable: number | undefined;
  public selectedType: AdmTypeRS | undefined; // Tipo seleccionado
  title: string | undefined;

  @ViewChild('typeDetailPanel') typeDetailPanel!: RightPanelComponent;  // Panel para consultar un tipo


  constructor(public configService: ConfigService,
    public vm: AdministratonTypeVmService) { }

  ngOnInit() {
    this.urlHnConfiguration = this.configService.urlGetHnConfiguration;
    this.paginationTable = this.configService.paginationTable;
    this.title = this.getDeep(this.vm.componentMessages,'label.title.detail.type');
  }


  /**
   * Método que se ejecuta al hacer click en 'Consultar' en algún tipo
   * @param type tipo seleccionado del listado
   */
  methodClickDetailType(type: AdmTypeRS): void {
    this.selectedType = type;
    this.typeDetailPanel.onOpen();

  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailType() {
    this.selectedType = undefined;
    this.typeDetailPanel.onClose();
  }

  getDeep(obj: any, path: string): any {
    return path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj);
  }

}
