import { ElementRef, EventEmitter,
  OnChanges, OnInit, Renderer2, SimpleChanges,
  DoCheck, AfterViewInit, Component, Input, forwardRef } from '@angular/core';
import { HnNgmodel } from '../model/hn-ngmodel';
import { HnButtonComponent } from '../button/hn-button-component.component';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'hn-input-text-component',
  standalone: true,
  imports: [FormsModule],
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
