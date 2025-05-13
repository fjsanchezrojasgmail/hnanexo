import { Component, Input, OnInit } from '@angular/core';
import { AdmTypeRS } from '../../../../beans/admTypeRS.bean';

@Component({
  selector: 'hnanexo-adm-type-detail',
  standalone: true,
  templateUrl: './adm-type-detail.component.html',
  styleUrls: ['./adm-type-detail.component.css']
})
export class AdmTypeDetailComponent implements OnInit {

  @Input() type: AdmTypeRS | undefined;;

  constructor() { }

  ngOnInit() {
  }

}
