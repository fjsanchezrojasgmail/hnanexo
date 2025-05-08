import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { LoggerService } from './service/logger.service';
import { CommunicationService } from './service/communication.service';
import { LoginService } from './service/login.service';
import { KeycloakService } from './service/keycloak.service';
import { LoadService } from './service/dao/load.service';
import { ServiceUserLogin } from './service/service-user-login';
import { PropertiesVMService } from './service/properties-vm.service';
import { HttpTokenizerService } from './service/http.tokenizer.services';
import { CacheHnAnexoDAOService } from './service/dao/cache-hnanexo-dao.service';
import { SharedResourcesFhirDAOService } from './service/dao/shared-resources-fhir.dao.service';

// Función para cargar los archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideHttpClient(),
     importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    LoggerService,
    LoadService,
    CommunicationService,
    LoginService,
    KeycloakService,
    PropertiesVMService,
    ServiceUserLogin,
    HttpTokenizerService,
    CacheHnAnexoDAOService,
    SharedResourcesFhirDAOService

  ]
};
