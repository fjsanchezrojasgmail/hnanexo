import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../../../service/config.service';

@Component({
  selector: 'hnanexo-administration-catalog',
  templateUrl: './administration-catalog.component.html',
  styleUrls: ['./administration-catalog.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AdministrationCatalogComponent implements OnInit {

  public urlHnConfiguration: string | undefined;
  public paginationTable: number | undefined;

  constructor(public configService: ConfigService) { }

  ngOnInit() {
    this.urlHnConfiguration = this.configService.urlGetHnConfiguration;
    this.paginationTable = this.configService.paginationTable;
  }

}
