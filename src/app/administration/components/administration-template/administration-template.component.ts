import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AdmListComponentService } from '../common/adm-list-component/adm-list-component.service';
import { tableCols } from '../common/adm-list-component/adm-list-component.component';
import { State } from '../../beans/state.bean';
import { AdmUtil } from '../../../../../../hnanexo-components/ts/hnanexo-components/util/adm-util';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administration-template',
  standalone: true,
  imports: [ FormsModule,
      CommonModule,TableModule],
  templateUrl: './administration-template.component.html',
  styleUrls: ['./administration-template.component.css']
})
export class AdministrationTemplateComponent implements OnInit {

    cols: tableCols[] | undefined; // columnas de la tabla
    states: State[] = []; // Estados que pueden darse
    //admUtil: AdmUtil | undefined; // Propiedad en la que se va a declarar la clase util AdmUtil
  paginationTable: number = 10;

  constructor(public admListService: AdmListComponentService) { }

  ngOnInit() {
  }

}
