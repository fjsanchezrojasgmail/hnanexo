import { Injectable } from '@angular/core';
import { ComponentMessages } from '../../../bean/i18n-bean';

@Injectable()
export class AdministrationInspectorVmService {

  public componentMessages: ComponentMessages;
  url: string;

  constructor() {
    this.componentMessages = ComponentMessages.en;
    const locale = navigator.language;
     // Por defecto inglés. Actualizo si es otra que tenga internacionalizada.
    if (locale.startsWith('es')) {
      this.componentMessages = ComponentMessages.es;
    }
  }

}
