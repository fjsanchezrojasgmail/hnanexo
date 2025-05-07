import { CommonModule } from '@angular/common';
import { Component, Input, OnInit }		from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MessageService } from '../../service/message.service';

@Component({
    selector: 'hnanexo-component-messages',
    standalone: true,
    imports: [CommonModule,TranslateModule],
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
})

export class MessagesComponent implements OnInit {
    @Input()
    messages: string[] | undefined;
    @Input()
    errors: string[] | undefined;
    @Input()
    timeShow: number | undefined;

    constructor(private messageService: MessageService, private translate: TranslateService) {
      this.translate.setDefaultLang('es');
      this.translate.use('es');
    }

    ngOnInit() {
    }

    emptyMessages(): boolean {
        if (this.messages && this.messages.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    emptyErrors(): boolean {
        if (this.errors && this.errors.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}
