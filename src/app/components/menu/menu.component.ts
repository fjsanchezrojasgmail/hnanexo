import { Component, Input, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Entity } from '../../administration/beans/entity.bean';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'hn-left-collapsable-menu-component',
  standalone: true,
  imports: [CommonModule, RouterModule, TooltipModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() items: Entity[] | undefined;
  @Input() access: string[] | undefined;

    showButtonOpenClosed: boolean | undefined;
    titleCollapsablePanel: string | undefined;
    showOverContent: boolean | undefined;
    statusOpenPanel: EventEmitter<{}> | undefined;
    openPanel: boolean = true;
    openPanelRetardoAnimacion: boolean | undefined;
    closePanelRetardoAnimacion: boolean | undefined;

  constructor() { }

  ngOnInit() {
    console.log("Entities: ", this.items);
  }




    ngOnChanges(changes: SimpleChanges): void {

    };
    onOpenClosedPanel(): void {

    };
    endTransaction(): void {

    };
    setOpenPanel(value?: boolean): void {

    };

}


/*
import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class CollapsableComponent implements OnInit, OnChanges {
    showButtonOpenClosed: boolean;
    titleCollapsablePanel: string;
    showOverContent: boolean;
    statusOpenPanel: EventEmitter<{}>;
    openPanel: boolean;
    openPanelRetardoAnimacion: boolean;
    closePanelRetardoAnimacion: boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onOpenClosedPanel(): void;
    /**
     * Se lanza al terminar la animacion, cuando se muestra/oculta el panel izquierdo
     * Si se está abriendo, mostramos el contenido una vez finaliza la transaccion
     */
    /*endTransaction(): void;
    setOpenPanel(value?: boolean): void;
}
*/
