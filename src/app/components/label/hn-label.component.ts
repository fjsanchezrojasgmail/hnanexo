import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HnBubbleComponent } from '../bubble/hn-bubble.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hn-label-component',
  standalone: true,
  imports: [CommonModule,HnBubbleComponent],
  templateUrl: './hn-label.component.html',
  styleUrls: ['./hn-label.component.css']
})
export class HnLabelComponent implements OnChanges, OnInit {

  @Input() label: string | undefined;
  @Input() labelBold: string | undefined;
  @Input() infoMessage: string | undefined;
  @Input() errorMessage: string | undefined;
  @Input() warnMessage: string | undefined;
  @Input() messageError: string | undefined;
  @Input() required: boolean | undefined;
  @Input() icon: string | undefined;

    myElement: ElementRef | undefined;

    formErrors: any | undefined;


    class: string | undefined;
    messageErrorInt: string | undefined;
    count: number | undefined;



  constructor() { }

  ngOnChanges(changes: SimpleChanges): void { };

  ngOnInit() {
  }

}

/*
import { SimpleChanges, OnChanges, ElementRef, OnInit } from '@angular/core';
import { HnNgmodel } from './ngmodel/hn-ngmodel';
export declare class HnLabelComponent extends HnNgmodel implements OnChanges, OnInit {
    myElement: ElementRef;
    labelBold: boolean;
    label: string;
    warnMessage: string;
    infoMessage: string;
    errorMessage: string;
    messageError: string;
    formErrors: any;
    required: boolean;
    icon: string;
    class: string;
    messageErrorInt: string;
    count: number;
    constructor(myElement: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
*/
