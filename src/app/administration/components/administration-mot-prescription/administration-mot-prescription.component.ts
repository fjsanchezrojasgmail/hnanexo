import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ConfigService } from '../../../service/config.service';
import { RightPanelComponent } from '@oh/hn-components/build/right-panel/right-panel.component';
import { AdmMotPrescriptionRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-mot-prescription';
import { AdministrationMotPrescriptionVmService } from './administration-mot-prescription.vm.service';
import { HnDialogComponent } from '@oh/hn-components/build/hn-dialog-component';

@Component({
  selector: 'hnanexo-administration-mot-prescription',
  templateUrl: './administration-mot-prescription.component.html',
  styleUrls: ['./administration-mot-prescription.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AdministrationMotPrescriptionComponent implements OnInit {

  public urlHnConfiguration: string | undefined;
  public paginationTable: number | undefined;
  public selectedMotPrescription: AdmMotPrescriptionRS | undefined;  // Motivo de prescripcion seleccionado

  @ViewChild('motPrescriptionDetailPanel') motPrescriptionDetailPanel!: RightPanelComponent;  // Panel para el detalle un motivo

  constructor(public vm: AdministrationMotPrescriptionVmService,
     public configService: ConfigService) { }

  ngOnInit() {
    this.urlHnConfiguration = this.configService.urlGetHnConfiguration;
    this.paginationTable = this.configService.paginationTable;
  }

  /**
   * Método que se ejecuta al hacer click en 'Consultar' en algún motivo de prescripcion
   * @param data motivo de prescription seleccionado del listado
   */
  methodClickDetailMotPrescription(data: AdmMotPrescriptionRS): void {
    this.selectedMotPrescription = data;
    this.motPrescriptionDetailPanel.onOpen();

  }

  /**
  * Método que cierra el detalle de consulta
  */
  methodCloseDetailMotPrescription() {
    this.selectedMotPrescription = undefined;
    this.motPrescriptionDetailPanel.onClose();
  }

}
