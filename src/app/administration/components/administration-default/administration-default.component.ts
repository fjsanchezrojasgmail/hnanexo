import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdministrationDefaultVmService } from './administration-default.vm.service';

@Component({
  selector: 'hnanexo-administration-default',
  templateUrl: './administration-default.component.html',
  styleUrls: ['./administration-default.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AdministrationDefaultComponent implements OnInit {

  constructor(public vm: AdministrationDefaultVmService) { }

  ngOnInit() {
  }

}
