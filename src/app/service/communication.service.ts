
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Message } from '../bean/rs/fhir/message.bean';
import { TranslateService } from '@ngx-translate/core';
import { PatientRS } from '../bean/rs/fhir/patient.bean';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private messageErrorSubject = new Subject<Message>();
  private messageSuccessSubject = new Subject<Message>();
  private messageInfoSubject = new Subject<Message>();
  private messageWarningSubject = new Subject<Message>();

  private dataSubject: BehaviorSubject<PatientRS | null> = new BehaviorSubject<PatientRS | null>(null); // Valor inicial null o un objeto vacío
  data$: Observable<PatientRS | null> = this.dataSubject.asObservable(); // Observable que será escuchado


  messageError$: Observable<Message> = this.messageErrorSubject.asObservable();
  messageSuccess$: Observable<Message> = this.messageSuccessSubject.asObservable();
  messageInfo$: Observable<Message> = this.messageInfoSubject.asObservable();
  messageWarning$: Observable<Message> = this.messageWarningSubject.asObservable();

  constructor(private translate: TranslateService) {}

  private newMessage(mssg: string, title: string) {
    const message = new Message();
    message.text = mssg;
    message.title = title;
    return message;
  }

  sendError(messagesArray: string[]): void {
    messagesArray.forEach(msg => {
      this.messageErrorSubject.next(this.newMessage(msg, 'Error'));
    });
  }

  sendSuccess(messagesArray: string[]): void {
    messagesArray.forEach(msg => {
      this.messageSuccessSubject.next(this.newMessage(msg, 'Success'));
    });
  }

  sendWarning(messagesArray: string[]): void {
    messagesArray.forEach(msg => {
      this.messageWarningSubject.next(this.newMessage(msg, 'Warning'));
    });
  }

  sendInfo(messagesArray: string[]): void {
    messagesArray.forEach(msg => {
      this.messageInfoSubject.next(this.newMessage(msg, 'Info'));
    });
  }

  sendErrorNoTranslate(message: Message){
    console.log(message);
  }

  // Limpiar mensajes
  cleanMessages(): void {
    // Emitir un valor vacío para cada tipo de mensaje
    const message = new Message();
    this.messageErrorSubject.next(message);
    this.messageSuccessSubject.next(message);
    this.messageWarningSubject.next(message);
    this.messageInfoSubject.next(message);
  }
}
