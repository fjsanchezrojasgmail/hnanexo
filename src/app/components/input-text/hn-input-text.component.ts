import { ElementRef, EventEmitter,
  OnChanges, OnInit, Renderer2, SimpleChanges,
  DoCheck, AfterViewInit, Component, Input, forwardRef } from '@angular/core';
import { HnNgmodel } from '../model/hn-ngmodel';
import { HnButtonComponent } from '../button/hn-button-component.component';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HnLabelComponent } from '../label/hn-label.component';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'hn-input-text-component',
  standalone: true,
  imports: [FormsModule,CommonModule,HnButtonComponent,HnLabelComponent, TooltipModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HnInputTextComponent),
      multi: true
    }
  ],
  templateUrl: './hn-input-text.component.html',
  styleUrls: ['./hn-input-text.component.css']
})
export class HnInputTextComponent implements OnInit,ControlValueAccessor {

  @Input() icon: string | null | undefined;

  label: string | undefined;
  labelBold: string | undefined;
  infoMessage: string | undefined;
  errorMessage: string | undefined;
  messageError: string | undefined;
  required: boolean = false;
  iconLabel: string | undefined;
  disabled: boolean = false;
  readonly: boolean = false;
  tooltip: string | undefined;
  value: string | undefined;
  maxLength: number | undefined;

  ttTooltip: string | undefined;
  ttPosition: string = 'right' ;

  inputNumberIE: boolean = false;
  iconButtonRight: boolean = false;
  labelButtonRight: string | undefined;
  disabledButtonRight: boolean = false;
  tooltipButtonRight: string | undefined;

  type: any;
  step: any;
  max: number = 10;
  min: number = 1;
  autocomplete: any;
  ttEscape: unknown;
  ttDisabled: boolean = false;
  mainButton: boolean | undefined;
  placeHolder: string | undefined;

  constructor() { }


  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  add(){}

  reduce(){}

  focus(){}

  blur(){}

  keypress(event$: KeyboardEvent){

  }

  keyup(event$: KeyboardEvent){

  }

  onChange(event$: any){

  }

  onPaste(event$: ClipboardEvent){

  }

  onInput(event$: Event){

  }

  emitOnClickButtonRight(){

  }

}

/*

import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, DoCheck, AfterViewInit } from '@angular/core';
import { HnNgmodel } from './ngmodel/hn-ngmodel';
import { HnButtonComponent } from './hn-button-component';
export declare const CUSTOM_INPUT_TEXT_CONTROL_VALUE_ACCESSOR: any;
export declare class HnInputTextComponent extends HnNgmodel implements OnInit, OnChanges, DoCheck, AfterViewInit {
    myElement: ElementRef;
    private renderer;
    buttonInputText: HnButtonComponent;
    validationErrors: any;
    readonly: boolean;
    labelBold: boolean;
    label: string;
    icon: string;
    tooltip: string;
    disabled: boolean;
    class: string;
    type: string;
    step: number;
    max: string;
    min: string;
    placeHolder: string;
    infoMessage: string;
    formErrors: any;
    methodOnKeypress: EventEmitter<string>;
    methodOnKeyup: EventEmitter<string>;
    methodOnInput: EventEmitter<KeyboardEvent>;
    methodOnChange: EventEmitter<string>;
    errorMessage: string;
    maxLength: string;
    name: string;
    autocomplete: string;
    trimOnBlur: boolean;
    ttTooltip: string;
    ttPosition: string;
    ttEscape: boolean;
    ttDisabled: boolean;
    mask: string;
    iconLabel: string;
    focusEvent: EventEmitter<any>;
    blurEvent: EventEmitter<any>;
    iconButtonRight: string;
    disabledButtonRight: string;
    tooltipButtonRight: string;
    labelButtonRight: string;
    onClickButtonRight: EventEmitter<{}>;
    messageError: string;
    required: boolean;
    widthicon: string;
    inputNumberIE: boolean;
    constructor(myElement: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private checkRequired();
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    keypress(event: KeyboardEvent): void;
    isWithinRange(value: any): boolean;
    onPaste(event: any): void;
    keyup(event: any): void;
    focus(): void;
    blur(): void;
    onInput(event: KeyboardEvent): void;
    onChange(event: any): void;
    add(): void;
    reduce(): void;
    emitOnClickButtonRight(): void;
}


*/
