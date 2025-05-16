import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageService } from '../../service/message.service';


@Component({
  selector: 'anexo-hn-message',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './anexo-message.component.html',
  styleUrls: ['./anexo-message.component.css']
})
export class AnexoHnMessageComponent implements OnInit {

  @Input() severity: string | undefined;
  @Input() messageTitle: string | undefined;
  @Input() messageText: string | undefined;

  constructor() { }

  ngOnInit() {
  }



}




