import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hn-item-split-button-component',
  standalone: true,
  imports:[],
  templateUrl: './item-split-button.component.html',
  styleUrls: ['./item-split-button.component.css']
})
export class HnItemSplitButtonComponent implements OnInit {

  @Input() default: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
