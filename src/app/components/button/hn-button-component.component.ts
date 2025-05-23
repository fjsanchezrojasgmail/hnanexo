import { Component, Input, OnInit } from '@angular/core';
import { IConceptMapPagDAOService } from '../../../../../@oh/hncat-services/build/service/dao/concept-map-pag-dao.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hn-button-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hn-button-component.component.html',
  styleUrls: ['./hn-button-component.component.css']
})
export class HnButtonComponent implements OnInit {

   @Input() label: string | undefined;
   @Input() type: string | undefined;
   @Input() mainButton: boolean | undefined;
   @Input() tooltip: string | undefined;
   @Input() icon: any | undefined;
   @Input() disabled: boolean | undefined;


   showIconLeft: boolean = false;
   showIconRight: boolean = true;
   showIconAndRight: boolean = false;

   shape: string | undefined;
   classButton: string | undefined;
    elements: string | undefined;
    icon2: string | undefined;
    positionLabel: string | undefined;

   //tooltip: string = '';

  constructor() { }

  ngOnInit() {
  }

  click(){

  }

  /*
  import { EventEmitter, OnChanges, OnInit, SimpleChanges, ElementRef } from '@angular/core';
export declare class HnButtonComponent implements OnInit, OnChanges {
    myElement: ElementRef;
    label: string;
    type: string;
    method: EventEmitter<string>;
    icon: string;
    tooltip: string;
    shape: string;
    positionLabel: string;
    disabled: boolean;
    iconPos: string;
    mainButton: boolean;
    icon2: string;
    classButton: string;
    elements: string;
    showIconLeft: boolean;
    showIconRight: boolean;
    showIconAndRight: boolean;
    constructor(myElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    click(): void;
}

  */

}
