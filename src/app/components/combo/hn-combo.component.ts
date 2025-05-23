import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, QueryList } from '@angular/core';

import { State } from '../../administration/beans/state.bean';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { PrimeTemplate, SelectItem } from 'primeng/api';
import { HnLabelComponent } from '../label/hn-label.component';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'hn-combo-component',
  standalone: true,
  imports: [FormsModule,CommonModule,DropdownModule,HnLabelComponent,TooltipModule],
  templateUrl: './hn-combo.component.html',
  styleUrls: ['./hn-combo.component.css']
})
export class HnComboComponent implements OnInit {

  @Input() options: State[] | undefined;

  customTemplate: boolean | undefined;
  grouped: boolean | undefined;
  groupPrimeng: boolean | undefined;
  showItemIcon: boolean | undefined;
  showLargeLabel: boolean | undefined;
  required: boolean | undefined;
  disabled: boolean = false;
  ttEscape: boolean | undefined;
  ttDisabled: boolean = false;
  filter: boolean | undefined;

  classI: string | undefined;
  classILabel: string | undefined;


  templates: QueryList<PrimeTemplate> | undefined;
  selectedOption: SelectItem | undefined;
  messageError: string | undefined;
  infoMessage: string | undefined;
  errorMessage: string | undefined;
  warnMessage: string | undefined;
  label: string | undefined;
  labelBold: string | undefined;
  iconLabel: string | undefined;
  placeholder: string | undefined;
  ttPosition: string | undefined;
  ttTooltip: string | undefined;
  value: string | undefined;
  class: string | undefined;
  styleClass: string | undefined;
  appendTo: string | undefined;
  emptyFilterMessage: string = '';
  resetFilterOnHide: string | undefined;
  selectedItemIco: string | undefined;
  selectedItemTooltip: string | undefined;
  panelStyleClass: string | undefined;
  classWidthIco: string | undefined;
  showIconOnlyTop: string | undefined;
  filterBy: string | undefined;

  constructor() { }

  ngOnInit() {
  }

  onItemComboSelected(option: SelectItem): void {

  };
  resetFilterCombo(): void {

  };

  emitFirstDropDownEvent() {

  }
  change($event: DropdownChangeEvent){

  }

}


/*
import { AfterViewInit, DoCheck, ElementRef, EventEmitter, KeyValueDiffers, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Dropdown, PrimeTemplate, SelectItem } from 'primeng/primeng';
import { HnSelectItem } from './bean/hn-select-item';
import { HnNgmodel } from './ngmodel/hn-ngmodel';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
export declare const CUSTOM_COMBO_CONTROL_VALUE_ACCESSOR: any;
export declare class HnComboComponent extends HnNgmodel implements OnInit, OnChanges, AfterViewInit, DoCheck {
    private differs;
    myElement: ElementRef;
    private renderer;
    comboComponent: any;
    dropdownPNG: Dropdown;
    templates: QueryList<PrimeTemplate>;
    private defaultTimeHighlight;
    private defaultTimeUnhighlight;
    private defaultRepeatHighlight;
    timeHighlight: number;
    timeUnhighlight: number;
    repeatHighlight: number;
    label: string;
    labelBold: boolean;
    placeholder: string;
    options: HnSelectItem[];
    initialOptionDescription: string;
    initialOption: HnSelectItem;
    InitialValueExist: boolean;
    appendTo: string;
    disabled: boolean;
    readonly: boolean;
    class: string;
    styleClass: string;
    panelStyleClass: string;
    iconoClass: string;
    showItemIcon: boolean;
    selectedItemIco: string;
    selectedItemTooltip: string;
    showIconOnlyTop: boolean;
    infoMessage: string;
    formErrors: any;
    customTemplate: boolean;
    methodOnChange: EventEmitter<string>;
    errorMessage: string;
    name: string;
    grouped: boolean;
    groupPrimeng: boolean;
    filterBy: string;
    ttTooltip: string;
    ttPosition: string;
    ttEscape: boolean;
    ttDisabled: boolean;
    filter: boolean;
    resetFilterOnHide: boolean;
    emptyFilterMessage: any;
    loadingDataMessage: string;
    warnMessage: string;
    firstDropDownEvent: EventEmitter<{}>;
    firstDropDownFlagEmmited: boolean;
    messageError: string;
    required: boolean;
    iconLabel: string;
    showLargeLabel: boolean;
    private previousOptions;
    classI: string;
    classILabel: string;
    classWidthIco: string;
    private differ;
    selectedOption: SelectItem;
    componentMessages: any;
    onResize(event: any): void;
    constructor(differs: KeyValueDiffers, myElement: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private checkRequired();
    ngDoCheck(): void;
    getDisabledOptions(): any[];
    isDisabledOptions(): boolean;
    checkOnDisabled(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    /**
     * Método para obtener el icono del item seleccionado
     */
    /*
    private refreshSelectedIcon();
    private calcPositions(checkIcon?);
    writeValue(value: any): void;
    private checkInactiveItemPrecharged();
    /**
     * Devuelve el item seleccionado de tipo HnSelectItemIcon (o null si no hay ninguno).
     * PRECONDITION: Sólo debe ejecutarse cuando showItemIcon es true (y por tanto this.options es un HnSelectItemIcon[])
     * @param currentValue
     */
    /*
    private getSelectedItemWithIcon(currentValue);
    showHighlight(): void;
    change(event: any): void;
    private updateSelectedElementClass(selectedValue);
    emitFirstDropDownEvent(): void;
    /**
     * Método que se ejecuta al pulsar una opción dentro de un grupo
     * @param option opción seleccionada
     */
    /*
    onItemComboSelected(option: SelectItem): void;
    resetFilterCombo(): void;
}
*/
