import { Component, Input, OnInit } from '@angular/core';
import { State } from '../../administration/beans/state.bean';

@Component({
  selector: 'hn-combo-component',
  standalone: true,
  imports: [],
  templateUrl: './hn-combo.component.html',
  styleUrls: ['./hn-combo.component.css']
})
export class HnComboComponent implements OnInit {

  @Input() options: State[] | undefined;

  constructor() { }

  ngOnInit() {
  }

}
