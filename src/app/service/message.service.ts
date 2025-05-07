import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoggerService } from './logger.service';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private successMessage: string | undefined;
  private warningMessage: string | undefined;
  private infoMessage: string | undefined;
  private errorMessage: string | undefined;

  constructor(
    private translate: TranslateService,
    private log: LoggerService,
    private communicationService: CommunicationService
  ) {}

  getMessage(key: string): string {
    return this.translate.instant(key);
  }

  getLanguage(): string {
    return this.translate.currentLang;
  }

  cleanMessages(): void {
    this.communicationService.cleanMessages();
  }

  sendSuccess(messages: string[]): void {
    this.communicationService.sendSuccess(messages);
    this.log.info(`Success: ${messages.join(', ')}`);
  }

  sendError(messages: string[]): void {
    this.communicationService.sendError(messages);
    this.log.error(`Error: ${messages.join(', ')}`);
  }

  sendWarning(messages: string[]): void {
    this.communicationService.sendWarning(messages);
    this.log.info(`Warning: ${messages.join(', ')}`);
  }

  sendInfo(messages: string[]): void {
    this.communicationService.sendInfo(messages);
    this.log.info(`Info: ${messages.join(', ')}`);
  }
}
