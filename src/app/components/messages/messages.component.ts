import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'hnanexo-component-messages',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  @Input() messages: string[] | string | undefined;
  @Input() errors: string[] | string | undefined;
  @Input() timeShow: number | undefined;

  showMessages = true;
  showErrors = true;

  constructor(
    private messageService: MessageService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngOnInit() {
    if (this.timeShow) {
      setTimeout(() => {
        this.showMessages = false;
        this.showErrors = false;
      }, this.timeShow);
    }
  }

  get messagesArray(): string[] {
    if (!this.messages) return [];
    return Array.isArray(this.messages) ? this.messages : [this.messages];
  }

  get errorsArray(): string[] {
    if (!this.errors) return [];
    return Array.isArray(this.errors) ? this.errors : [this.errors];
  }

  emptyMessages(): boolean {
    return !this.showMessages || this.messagesArray.length === 0;
  }

  emptyErrors(): boolean {
    return !this.showErrors || this.errorsArray.length === 0;
  }
}
