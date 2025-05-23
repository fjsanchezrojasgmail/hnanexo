import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'hn-bubble-component',
  standalone: true,
  imports: [CommonModule,TooltipModule],
  templateUrl: './hn-bubble.component.html',
  styleUrls: ['./hn-bubble.component.css']
})
export class HnBubbleComponent implements OnInit {

  @Input() type: string | undefined;
  @Input() infoMessage: string | undefined;
  @Input() messageError: string | undefined;
  @Input() errorMessage: string | undefined;
  @Input() warnMessage: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
