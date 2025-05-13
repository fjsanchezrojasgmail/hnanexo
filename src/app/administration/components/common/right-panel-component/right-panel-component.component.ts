import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  SimpleChanges,
  OnChanges,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { TooltipModule } from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'hn-right-panel-component',
  standalone: true,
  imports: [TooltipModule,BrowserModule,CommonModule],
  templateUrl: './right-panel-component.component.html',
  styleUrls: ['./right-panel-component.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0%)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in => out', [animate('300ms ease-in-out')]),
      transition('out => in', [animate('300ms ease-in-out')])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 0.5 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RightPanelComponent implements OnInit, OnChanges {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() id?: string;
  @Input() modal?: boolean;
  @Input() titleClass?: string;
  @Input() subtitleClass?: string;
  @Input() idparent?: string;
  @Input() width: string = '400px';
  @Input() mode?: string;
  @Input() block?: boolean;
  @Input() tooltip: boolean = false;

  @Output() onCloseEvent: EventEmitter<void> = new EventEmitter<void>();

  FORM_MODE: string = 'FORM_MODE';
  DEFAULT_MODE: string = 'DEFAULT_MODE';

  isOpen: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {}

  onClose(): void {
    this.isOpen = false;
    this.onCloseEvent.emit();
  }

  onOpen(): void {
    this.isOpen = true;
  }

  onTogglePanel(): void {
    this.isOpen = !this.isOpen;
  }

  mouseEnter(): void {
    // lógica de mouseEnter si la necesitas
  }
}
