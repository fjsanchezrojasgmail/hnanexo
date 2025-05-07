import { HnDialogComponent } from './../dialog/hn-dialog-component.component';
import { Component, OnInit, ViewEncapsulation, ViewChild, Input} from '@angular/core';
import { ComponentMessages } from '../../bean/i18n-bean';
import { HnButtonComponent } from '../button/hn-button-component.component';

@Component({
  selector: 'astare-notice',
  standalone: true,
  imports: [HnButtonComponent, HnDialogComponent],
  templateUrl: './astare-notice.component.html',
  styleUrls: ['./astare-notice.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AstareNoticeComponent implements OnInit {

  // TRADUCCIONES
  locale: string | undefined;
  componentMessages: any = ComponentMessages.en;

  //PROPIEDADES DIALOG
  titleHeader:string | undefined;
  labelButtonClose:string | undefined;

  @Input()textNoticeAstare:string | undefined;
  @ViewChild('dialogAstareNotice') dialog: HnDialogComponent | undefined;

  openDialog(event: Event){
    if(this.dialog !== undefined)
    this.dialog.display=true;
  }

  closeDialog(event: Event){
    if(this.dialog !== undefined)
      this.dialog.display=false;
  }

  ngOnInit(): void {
    this.locale = navigator.language;
        // Por defecto inglés. Actualizo si es otra que tenga internacionalizada.
        if (this.locale.startsWith('es')) {
            this.componentMessages = ComponentMessages.es;
        }

    this.titleHeader = this.componentMessages['info.user.login.astare.notice.title'];
    this.labelButtonClose = this.componentMessages['info.user.login.astare.notice.acept'];

    this.textNoticeAstare !== undefined? this.textNoticeAstare = this.componentMessages[this.textNoticeAstare] : this.textNoticeAstare = '';
    if(event !== undefined)this.openDialog(event);
  }

}
