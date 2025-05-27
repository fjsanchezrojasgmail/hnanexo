import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';
import { HnItemSplitButtonComponent } from '../item-split-button/item-split-button.component';

@Component({
  selector: 'hn-split-button-component',
  standalone: true,
  imports:[CommonModule,HnItemSplitButtonComponent],
  templateUrl: './split-button.component.html',
  styleUrls: ['./split-button.component.css']
})
export class HnSplitButtonComponent implements OnInit,AfterViewInit, AfterContentInit {

  groups: any[] = [];
  options: QueryList<HnItemSplitButtonComponent> | undefined;
  hiddenIcon: boolean = false;
  notIcon: boolean = false;
  flgGroups: boolean = false;
  showDefaultButton: boolean = true;
  iconMainButton: boolean = true;
  show : boolean = true;
  classI: string | undefined;
  backgroundClass: string | undefined;
  dropDownIconClass: string | undefined;
  tooltip: string | undefined;
  position: string | undefined;
  defaultButton!: HnItemSplitButtonComponent;

  constructor(renderer: Renderer2, el: ElementRef) {

  };
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnInit() {
  }

  executeOption(event: any, item: HnItemSplitButtonComponent): void {

  };

  showHideOptions(element: any): void {

  };

  executeDefaultOption(event: any) {

  }


}

/*
import { AfterContentInit, AfterViewInit, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { HnItemSplitButtonComponent } from './hn-item-split-button-component';
export declare class HnSplitButtonComponent implements AfterViewInit, AfterContentInit {
    private renderer;
    private el;
    options: QueryList<HnItemSplitButtonComponent>;
    /**
     * Referencia al panel desplegable con las opciones a seleccionar
     */
    //optionsWrapper: any;
    /**
     * Referencia al contenedor del botón
     */
    /*
    buttonContainer: ElementRef;

    backgroundClass: string;
    dropDownIconClass: string;
    tooltip: string;
    position: string;
    hiddenIcon: boolean;
    notIcon: boolean;
    flgGroups: boolean;
    showDefaultButton: boolean;
    appendTo: string;
    iconMainButton: string;
    private show;
    private classI;
    defaultButton: HnItemSplitButtonComponent;

    groups: any[];
    constructor(renderer: Renderer2, el: ElementRef);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    /**
     * Calcula el botón por defecto a mostrar
     */
    /*
    initDefaultButton(): void;
    executeOption(event: any, item: HnItemSplitButtonComponent): void;
    executeDefaultOption(event: any): void;
    showHideOptions(element: any): void;
    private showOptions();
    /**
     * Método que calcula la posición del panel dentro del body
     */
    /*
    private calculatePositionAutoBody(optionsWrapperJquery);
    private calculatePositionManual(optionsWrapperJquery);
    private calculatePositionAuto(optionsWrapperJquery);
    private hideOptions();
}

*/
