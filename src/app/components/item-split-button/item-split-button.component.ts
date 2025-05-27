import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hn-item-split-button-component',
  standalone: true,
  imports:[],
  templateUrl: './item-split-button.component.html',
  styleUrls: ['./item-split-button.component.css']
})
export class HnItemSplitButtonComponent implements OnInit {

  @Input() default: boolean = true;
  @Input() disabled: boolean = false;
  @Input() classIcono: string | undefined;
  @Input() label: string | undefined;

  classI: string | undefined;
  classLabel: string | undefined;
  classDiv: string | undefined;
  group: string | undefined;


  @Output() action: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  execute(): void {
    this.action.emit('clicked'); // o cualquier string útil que quieras emitir
  }

}

/*

import { EventEmitter, OnInit } from '@angular/core';
export declare class HnItemSplitButtonComponent implements OnInit {
    classI: string;
    classLabel: string;
    classDiv: string;
    classIcono: string;
    label: string;
    default: boolean;
    disabled: boolean;
    group: string;
    action: EventEmitter<string>;
    constructor();
    ngOnInit(): void;
    execute(): void;
}


*/
