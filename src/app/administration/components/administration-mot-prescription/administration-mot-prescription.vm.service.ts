import { Injectable, Inject } from '@angular/core';
import { ComponentMessages } from '../../../bean/i18n-bean';

@Injectable()
export class AdministrationMotPrescriptionVmService {
  public componentMessages: ComponentMessages;
  url: string | undefined;

  constructor() {
    this.componentMessages = ComponentMessages.en;
    const locale = navigator.language;
     // Por defecto inglés. Actualizo si es otra que tenga internacionalizada.
    if (locale.startsWith('es')) {
      this.componentMessages = ComponentMessages.es;
    }
  }

}
