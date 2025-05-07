import { MessagesComponent } from './../messages/messages.component';


import { Component, Inject, Input, LOCALE_ID, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { Message } from '@oh/hn-components/build/bean/message-bean';
import { Constants } from '@oh/hn-services/build/bean/constants';
import { ComunicationService } from '@oh/hncommons-services/build/service/comunication.service';
import { LoadService } from '@sacyl/ohcommonsacyl-services/build/service/dao/load.service';
import { LoginService } from '@oh/hn-services/build/service/login.service';

import { DateUtil } from '@oh/hncommons-services/build/utils/date-util';
import { GenderUtil } from '@oh/ispob-services/build/util/gender-util';
import { IPropertiesServiceGeneric } from '@oh/hnconf-services/build/service/properties-generic.interface.service';


import { combineLatest } from 'rxjs';
import { Subscription } from 'rxjs';


import { SermasHNSessionUserDataRS } from '@sacyl/hnanexo-services/build/bean/rs/sermas-user-bean';
import { BundleUtil } from '@sacyl/hnanexo-services/build/util/bundle-utils';
import { HttpTokenizerService } from '../../service/http.tokenizer.services';
import { CacheHnAnexoDAOService } from '@sacyl/hnanexo-services/build/service/dao/cache-hnanexo-dao.service';
import { HnanexoServiceConstants } from '@sacyl/hnanexo-services/build/bean/hnanexo-service-constants';
import { ConsultAstareRS } from '@sacyl/hnanexo-services/build/bean/rs/consult-astare.bean';
import { IConsultAstareHnAnexoDAOService } from '@sacyl/hnanexo-services/build/service/dao/consult-astare-hnanexo-dao.interface.service';
import { ProfileUserHnanexoStatus, AnswerWsAstare, PermissionsProfileUserHnanexo, AnswerIsPrescriberService, hnanexoConstants } from '../../bean/hnanexo-constants.bean';
import { ComponentMessages } from '../../bean/i18n-bean';
import { ConsultServiceRS } from '@sacyl/hnanexo-services/build/bean/rs/consult-service.bean';
import { ServiceUserLogin } from '../../service//service-user-login';
import { ConfigService } from '../../service/config.service';
import { SharedResourcesFhirDAOService } from '@sacyl/ohcommonsacyl-services/build/service/dao/sharedResourcesFhir-ohcommonsacyl-dao.service';
import { HNANEXOResourcesSharedFHIR } from '@sacyl/hnanexo-services/build/bean/hnanexo-service-constants';
import { PatientRS } from '@oh/ispob-services/build/bean/rs/patient/patient.bean';
import { DiagnosticRS } from '@sacyl/hnanexo-services/build/bean/rs/prescription-diagnostic.bean';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { AnexoHNHeaderComponent } from '../header/anexo-hn-header-component';
import { AstareNoticeComponent } from '../astare-notice/astare-notice.component';
import { MessageService } from '../../service/message.service';


export function messageServ(messageService: MessageService) {
    return messageService.getLanguage();
}

@Component({
    selector: 'hnanexo-component-main',
    imports: [MessagesComponent, AnexoHNHeaderComponent, AstareNoticeComponent, TranslateModule, CommonModule, RouterModule],
    standalone: true,
    providers: [
        {
            provide: LOCALE_ID,
            deps: [MessageService],
            useFactory: messageServ
        }],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit {

    // PRIVATE ATRIBUTES
    private _userLoaded: boolean = false;
    private _messageLoaded: boolean = true;

    // MENSAJES FLOTANTES
    public messageSuccess: Message | undefined;
    public messageError: Message | undefined;
    public messageInfo: Message | undefined;
    public messageWarning: Message | undefined;

    // SUBSCRIPTIONS
    private messageSuccessSubscription: Subscription;
    private messageErrorSubscription: Subscription;
    private messageInfoSubscription: Subscription;
    private messageWarningSubscription: Subscription;
    private userLoggedSubscription: Subscription | undefined;

    public loggedUser: SermasHNSessionUserDataRS | undefined;
    public showContent = false;
	  public errorOrganization = false;
    public accountManagerUrl: SafeResourceUrl | undefined;
    public existePaciente = false;

    // Data subscription (datos paciente panel superior)
    private dataSubscription: Subscription;
    public data: PatientRS | undefined;
    public age: string | undefined;
    public genderText: string | undefined;

    // INTEGRACION CON ASTARE + MENSAJES EN CASO DE ERROR
    public datos_diagnostico:  DiagnosticRS[] | undefined;
    public datos_login: any;
    public sermasUser: SermasHNSessionUserDataRS | undefined;
    public consultAstare: ConsultAstareRS | undefined;
    public consultService: ConsultServiceRS | undefined;
    public showAstareNotice: boolean | undefined;
    public textNoticeAstare: string | undefined;
    // TRADUCCIONES
    locale: string | undefined;
    componentMessages: any = ComponentMessages.en;

    public urlManual: string | undefined;                                  // Ruta dinámica del manual en la url
    public urlManualAdmin: string | undefined;                             // Ruta dinámica del manual del administrador en la url
    public urlHnreq: string | undefined;                                   // URL base para las peticiones a fhir
    public daysUpdateResourcesFhir: number | undefined;                    // Dias para la actualizacion de recursos Fhir
    public encryptUrl: boolean | undefined;                                // Indica si se van a encriptar las urls o no

    constructor(


      private _messageService: MessageService,
      private _loginService: LoginService,
      private _loadService: LoadService,
      private comunicationService: ComunicationService,
      private domSanitizerService: DomSanitizer,
      private route: Router,
      private serviceUserLogin: ServiceUserLogin,
		  public translate: TranslateService,
        @Inject('IPropertiesServiceGeneric') private _propertiesVMService: IPropertiesServiceGeneric,
        @Inject('IHttpTokenizer') private _tokenizerService: HttpTokenizerService,
        @Inject('ICacheHnAnexoDAOService') private _cacheAnexoService: CacheHnAnexoDAOService,
        @Inject('IConsultAstareHnAnexoDAOService') private _consultAstareService: IConsultAstareHnAnexoDAOService,
        @Inject('ISharedResourcesFhirDAOService') private _sharedResourcesFhir: SharedResourcesFhirDAOService,

        public configService: ConfigService) {

        this.loadLoggedUser();
        this.dataSubscription = comunicationService.data$.subscribe((data: PatientRS) => {

          if(data != undefined){
            this.data = data;
            let birthDate;
            if (this.data.birthDate) {
                birthDate = this.data.birthDate instanceof Date ? this.data.birthDate : new Date(this.data.birthDate);
            }
            this.age = this.data ? DateUtil.getAgeBabyFromBirthdate(birthDate!, this.messageService()) : '';
            this.genderText = this.data ? GenderUtil.getPatientGender(birthDate!, this.data.gender) : '';
          }
        });

        this.messageErrorSubscription = comunicationService.messageError$.subscribe(
            (messageError: Message) => { this.messageError = messageError; });
        this.messageSuccessSubscription = comunicationService.messageSuccess$.subscribe(
            (messageSuccess: Message) => { this.messageSuccess = messageSuccess; });
        this.messageInfoSubscription = comunicationService.messageInfo$.subscribe(
            (messageInfo: Message) => { this.messageInfo = messageInfo; });
        this.messageWarningSubscription = comunicationService.messageWarning$.subscribe(
            (messageWarning: Message) => { this.messageWarning = messageWarning; });
    }

    ngOnInit() {
        /** Inicializamos las urls del config service */
        this.urlManual = this.configService.urlManual;
        this.urlManualAdmin = this.configService.urlManualAdmin;
        this.urlHnreq = this.configService.urlGetHNReq;
        this.daysUpdateResourcesFhir = this.configService.daysUpdateResourcesFhir;
        this.encryptUrl = this.configService.encryptUrl;

        // IDIOMA PARA MENSAJES
        this.locale = navigator.language;
            // Por defecto inglés. Actualizo si es otra que tenga internacionalizada.
        if (this.locale.startsWith('es')) {
            this.componentMessages = ComponentMessages.es;
        }

        if (this._loginService.LoggedUser) {
            // Se realiza suscripción al getHnProperties para que no inicie la carga
            // del accountmanager hasta que no tenga los parametros en el propertiesService

            this._propertiesVMService.urlStream$.subscribe(
                (data: string)  => {
                    this.initialLoadAfterGetUser();

                    // Verificamos los recursos compartidos
                    this._sharedResourcesFhir.verifySharedResourcesFhir(this._tokenizerService.getToken(), this.urlHnreq!,
                        this.daysUpdateResourcesFhir!, hnanexoConstants.APP_NAME);
                    // Cuando la verificacion ha sido la correcta
                    this._sharedResourcesFhir.dataLoadedVerifyResources$.subscribe(
                        () => {
                            // Guardamos el centro del loggin
                            this._cacheAnexoService.setListResources(this._sharedResourcesFhir.organizationCenter,
                                HNANEXOResourcesSharedFHIR.ORGANIZATION_CENTER_LOGGIN);
                            console.log("[cacheAnexoService]: HNANEXOResourcesSharedFHIR.ORGANIZATION_CENTER_LOGGIN")
                            console.log(this._cacheAnexoService.getListResources(HNANEXOResourcesSharedFHIR.ORGANIZATION_CENTER_LOGGIN));

                            // Guardamos el servicio del loggin
                            this._cacheAnexoService.setListResources(this._sharedResourcesFhir.organizationService,
                                HNANEXOResourcesSharedFHIR.ORGANIZATION_SERVICE_LOGGIN);

                            console.log("[cacheAnexoService]: HNANEXOResourcesSharedFHIR.ORGANIZATION_SERVICE_LOGGIN")
                            console.log(this._cacheAnexoService.getListResources(HNANEXOResourcesSharedFHIR.ORGANIZATION_SERVICE_LOGGIN))

                            // Guardamos el practitioner del login
                            this._cacheAnexoService.setListResources(this._sharedResourcesFhir.practitioner,
                                HNANEXOResourcesSharedFHIR.PRACTITIONER_LOGIN);
                            console.log("[cacheAnexoService]: HNANEXOResourcesSharedFHIR.PRACTITIONER_LOGIN")
                            console.log(this._cacheAnexoService.getListResources(HNANEXOResourcesSharedFHIR.PRACTITIONER_LOGIN))

                            // Generamos las referencias de los recursos compartidos
                            this._sharedResourcesFhir.getReferencesSharedResourcesFHIR(this._tokenizerService.getToken());

                            // Entra cuando estan generadas
                            this._sharedResourcesFhir.dataLoadedReferences$.subscribe(
                                () => {
                                    // Guardamos las referencias de los recursos compartidos
                                    this._cacheAnexoService.setListResources(this._sharedResourcesFhir.referencesSharedResourcesFHIR,
                                        HNANEXOResourcesSharedFHIR.FHIR_REFERENCES_SHARED_RESOURCES);
                                    this.showContent = true;
                                    this._loadService.endRequest();
                                },
                                (error: string) => {
                                    this._loadService.endRequest();
                                }
                            );
                        },
                        (error: string) => {
                            this._loadService.endRequest();
                        });

                    this._sharedResourcesFhir.dataLoadedVerifyResourcesError$.subscribe(
                        () => {
                            this._loadService.endRequest();
                        },
                        (error: string) => {
                            this._loadService.endRequest();
                        }
                    );

					this._sharedResourcesFhir.dataErrorResourceOrganizationCenter$.subscribe(
					() => {
					  this._loadService.endRequest();
					  const  msgErrorOrga = new Message();
					  let traduccion: string | undefined;
					  this.translate.get(['message.error.organization'])
					  .subscribe(translations => {
						 traduccion = translations['message.error.organization'];
					  });
					  if (traduccion) {
						msgErrorOrga.text = traduccion;
					  } else {
						msgErrorOrga.text = 'Error obteniendo datos del centro. Por favor, contacte con el administrador.';
					  }
					  msgErrorOrga.timeShow = 120;
					  this.comunicationService.sendErrorNoTranslate (msgErrorOrga);
					  this.errorOrganization = true;
					},
					(error: string) => {
					  this._loadService.endRequest();
					}
				  );




                    // Esto se hace para eliminar el loader cuando estamos con mocks, otra solución si no se dispone de properties
                    // sería meter display:hidden en el estilo del loader para que cuando cargue no se muestre
                }
            );
        } else {
            // Se realiza suscripción combinada de getHnProperties y el userStream para la carga
            // del accountmanager una vez que tenga parámetros (propertiesService) y datos de Usuario(LoginService)
            combineLatest(this._loginService.userStream$, this._propertiesVMService.urlStream$).subscribe(
                user => this.initialLoadAfterGetUser()
            );
        }

        this.loadSermasUser();
        this.loadDiagnostico();


    }

    private navegar() {
        /**
         * Se introduce esta validación porque en la primera versión de HNAnexo, la parte
         * administrativa no se desarrollará y se realizará posteriormente. Si el usuario accede como
         * usuario administrador se le mostrará un mensaje advirtiendole que esta parte esta aun en desarrollo
         */

        if(this.sermasUser != undefined && this.sermasUser.hnrole.code != undefined && this.sermasUser.hnrole.code.length >0 ) {
            if (this.sermasUser.hnrole.code === ProfileUserHnanexoStatus.ANEXO_ADMINISTRADOR) {
                this.route.navigate(['/administrador']);
            } else {
                if(this.sermasUser.hnrole.code === ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO) {
                    // Pillamos el launchToken codificado
                    const launchToken = sessionStorage.getItem(hnanexoConstants.LAUNCHTOKEN);

                    // Si tenemos launchToken lo decodificamos
                    if (launchToken) {
                        const launchTokenDecode = this.decodeTokenV2(launchToken);
                        if (launchTokenDecode) {
                            var cipaPatient = launchTokenDecode.patient;
                            if(cipaPatient != undefined && cipaPatient.length >0 ) {
                                //Si existe paciente navega en modo consulta
                                this.existePaciente = true;
                                this.route.navigate(['/search-patient'], { queryParams: { firstSearch: true } });
                            } else {
                                //Si no existe paciente en el token de entrada navega a listado de visto bueno
                                this.route.navigate(['/visado']);
                            }
                        }
                    }
                } else {
                    if (!this._cacheAnexoService.getListResources(HnanexoServiceConstants.PATIENT_SELECTED)) {
                        this.route.navigate(['/search-patient'], { queryParams: { firstSearch: true } });
                    }
                }
            }
        } else {
            this.route.navigate(['unauthorized']);
        }
    }


    public decodeTokenV2(str: string) {
      try {
        // Extrae la segunda parte del token (Payload)
        const base64Url = str.split('.')[1];

        // Reemplazos correctos de caracteres Base64-URL a Base64 estándar
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

        // Agrega padding si es necesario
        const paddedBase64 = base64.padEnd(base64.length + (base64.length % 4), '=');

        // Decodifica el token
        const decodedStr = atob(paddedBase64);

        // Parsea el JSON resultante
        return JSON.parse(decodedStr);
      } catch (error) {
        throw new Error('Invalid token format');
      }
    }

    public decodeToken(str: string) {
        str = str.split('.')[1];

        str = str.replace('/-/g', '+');
        str = str.replace('/_/g', '/');
        switch (str.length % 4) {
          case 0:
            break;
          case 2:
            str += '==';
            break;
          case 3:
            str += '=';
            break;
          default:
            throw new Error('Invalid token');
        }

        str = (str + '===').slice(0, str.length + (str.length % 4));
        str = str.replace(/-/g, '+').replace(/_/g, '/');

        str = decodeURIComponent(atob(str));

        str = JSON.parse(str);
        return str;
      }

    /**
     * Inicialización tras cargar el usuario
     */
    private initialLoadAfterGetUser() {
        // La llamada a los servicios debe hacerse una vez se haya cargado el usuario y los properties.
        // Para asegurarnos de que las propiedades (URLs) se hayan obtenido correctamente.
        let url = this._propertiesVMService.getValuePropertieByName(Constants.URL_HNAUT);
        url += Constants.URL_ACCOUNT_MANAGER;
        this.accountManagerUrl = this.domSanitizerService.bypassSecurityTrustResourceUrl(url);
    }

    isloaded(): boolean {
        return this._messageLoaded && this._userLoaded;
    }

    messageService(): MessageService {
        return this._messageService;
    }

    // Método que carga el usuario loggeado
    private loadLoggedUser() {
        this._userLoaded = false;
        this._loadService.startRequest();
        // Indicamos al load services si se van a encriptar las urls o no
        this._loadService.setEncodedApp(this.configService.encryptUrl);

        this._loadService.addNoEncodeParam('page');
        this._loadService.setEncodeKey('ANEX067891234567');

        /** Obtenemos el centro en el que estamos logeados o nos suscribimos si aun no ha sido recuperado */
        if (this._loginService.LoggedUser) {
            this.onUserReceived(this.defineSermasUser());
        } else {
            this.userLoggedSubscription = this._loginService.userStream$.subscribe(
              (user: any) => this.onUserReceived(this.defineSermasUser())
            );

        }
    }

    // Genera el usuario Sermas a partir del usuario Hn y los datos del token mymed
    defineSermasUser(): SermasHNSessionUserDataRS {
        let datos_login = this._tokenizerService.getTokenResponse('datos_login');
        let sermasUser: SermasHNSessionUserDataRS = new SermasHNSessionUserDataRS(this._loginService.LoggedUser);
        sermasUser = BundleUtil.getSermasUserFromProperty(this._loginService.LoggedUser, datos_login);

        return sermasUser;
    }

    // Se le pasa el usuario loggeado
    onUserReceived(data: any): void {
        this._userLoaded = true;
        this._loadService.endRequest();
        if (data) {
            this.loggedUser = data;
        }
        // Se guarda el usuario del sermas loggeado en la cache de anexo para usarlo en otros componentes
        this._cacheAnexoService.setListResources(this.loggedUser, HnanexoServiceConstants.SERMAS_LOGGED_USER);
    }

    // Método que desloggea al usuario
    logout() {
        sessionStorage.removeItem(hnanexoConstants.LAUNCHTOKEN);
        this._loginService.logout();
        console.log("------------");
        // console.log(this._loginService.logout());
    }

    ngOnDestroy() {
        this.dataSubscription.unsubscribe();
    }

    /**
     * Funcion para recoger los datos del usuario logado en la aplicación.
     */
    private loadSermasUser() {
        this.sermasUser = BundleUtil.getSermasUserFromProperty(this._loginService.LoggedUser, this.datos_login);

        // Se guarda el usuario del sermas loggeado en la cache de anexo para usarlo en otros componentes
        this._cacheAnexoService.setListResources(this.loggedUser, HnanexoServiceConstants.SERMAS_LOGGED_USER);

        if (this.sermasUser) {
            this.checkUserProfile();
        } else {
            this.removePermissionsPrescriptorMedical();
            console.error(this.componentMessages['info.user.login.tokenUser.error']);
        }
    }


    //Tengamos o no diagnostico en el token el usuario SIEMPRE podra acceder a prescribir.
    //Si vienen diagnostico en el token se guarda en cache y se precarga al prescribir sin tener que realizar llamada al WS.
    //En el caso de no tener diagnostico este se obtiene con llamada al WS
    private loadDiagnostico(){
        if (this._tokenizerService.getTokenResponse('datos_login')){
            const datos_login = this._tokenizerService.getTokenResponse('datos_login');
            const codDiagnostico : string = datos_login.codDiagnostico;
            let diagnostic: DiagnosticRS = new DiagnosticRS();
            if (codDiagnostico && codDiagnostico.length > 0) {
                diagnostic.cie_10 = codDiagnostico;
                const descDiagnostico : string = datos_login.descDiagnostico;
                if (descDiagnostico && descDiagnostico.length > 0) {
                    diagnostic.nombre = descDiagnostico;
                }
                this.datos_diagnostico = [];
                this.datos_diagnostico.push(diagnostic);
            }
            this._cacheAnexoService.setListResources(this.datos_diagnostico, HnanexoServiceConstants.EXIST_DIAGNOSTIC);
        }
    }

    /**
     * Comprueba que tipo de perfil tiene el usuario logado que repercutirá posteriormente en los permisos de la aplicación.
     */
    private checkUserProfile() {
        if (this.sermasUser
                && this.sermasUser.hnrole) {
            if (this.sermasUser.hnrole.code === ProfileUserHnanexoStatus.ANEXO_MEDICO) {
                //Si el usuario logado es medico, comprobamos si el servicio en el que esta logado puede prescribir
                //Quito siempre los permisos de Médico Prescriptor, se añadirán posteriormente si cumple las condiciones para ser prescriptor.
                this.removePermissionsPrescriptorMedical();
                this.isPrescriptorService();
            } else {
                if (this.sermasUser.hnrole.code != ProfileUserHnanexoStatus.ANEXO_SSCC
                        && this.sermasUser.hnrole.code != ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO
                        && this.sermasUser.hnrole.code != ProfileUserHnanexoStatus.ANEXO_ADMINISTRADOR) {
                    console.error(this.componentMessages['info.user.login.rolUser.error']);
                }
                this.navegar();
            }
            //Se guarda el usuario del sermas loggeado en la cache de anexo para usarlo en otros componentes
            this._cacheAnexoService.setListResources(this.loggedUser, HnanexoServiceConstants.SERMAS_LOGGED_USER);
        } else {
            console.error(this.componentMessages['info.user.login.tokenRol.error']);
        }
    }

    /**
     * Realiza llamada al Backup para comprobar si el servicio en el que se ha logado el usuario
     *  es posible prescribir prescripciones. En caso negativo se le quitaran dichos permisos.
     */
    private isPrescriptorService(){
        try {
            this.consultService = new ConsultServiceRS();

          if(this.sermasUser !== undefined && this.sermasUser.unit !== undefined && this.sermasUser.unit.code !== undefined) {
            this.serviceUserLogin.callService(this.sermasUser.unit.code);
            this.serviceUserLogin.isPrescriptorServiceLoaded$.subscribe(() => {
              if(this.serviceUserLogin.listConsultService !== undefined)
                this.serviceUserLogin.listConsultService.forEach( response => {

                  if(this.consultService !== undefined){

                    this.consultService.keyCode = response.keyCode;
                    this.consultService.nombre = response.nombre;
                    this.consultService.prescriptor = response.prescriptor;
                    this.consultService.serviceRestriction = response.serviceRestriction;
                  }

                });
                if (this.consultService) {
                    this._cacheAnexoService.setListResources(this.consultService.serviceRestriction, HnanexoServiceConstants.LOGGED_SERVICE_RESTRICTION);
                    if(this.sermasUser!.unit.code === this.consultService.keyCode
                            && this.consultService.prescriptor === AnswerIsPrescriberService.ANSWER_IS_PRESCRIPTOR) {
                        this.addPermissionsPrescriptorMedical();
                    }
                    this.navegar();
                }else {
                        console.warn(this.componentMessages['info.user.login.isPrescriptorService.noData']);
                }
            });

          }

        } catch {
            console.error(this.componentMessages['info.user.login.isPrescriptorService.error']);
        }
    }

    /**
     * Función que elimina los permisos que posee un Medico Prescriptor
     */
    removePermissionsPrescriptorMedical() {
        this.removePermission(PermissionsProfileUserHnanexo.HNANEXO_CREATE_PRESC);
        this.removePermission(PermissionsProfileUserHnanexo.HNANEXO_EDIT_PRESC_ACTIVE);
        this.removePermission(PermissionsProfileUserHnanexo.HNANEXO_ANUL_PRESC_ACTIVE);
        this.removePermission(PermissionsProfileUserHnanexo.HNANEXO_VALIDATE_PRESC_ACTIVE);
    }

    /**
     * Función que añade los permisos que posee un Medico Prescriptor
     */
    addPermissionsPrescriptorMedical() {
        this.addPermission(PermissionsProfileUserHnanexo.HNANEXO_CREATE_PRESC);
        this.addPermission(PermissionsProfileUserHnanexo.HNANEXO_EDIT_PRESC_ACTIVE);
        this.addPermission(PermissionsProfileUserHnanexo.HNANEXO_ANUL_PRESC_ACTIVE);
        this.addPermission(PermissionsProfileUserHnanexo.HNANEXO_VALIDATE_PRESC_ACTIVE);
    }

    /**
     * Funcion que elimina un permiso que recibe por parámetro
     * @param item
     */
    removePermission (item: string) {
      if(this.sermasUser !== undefined){
        var index = this.sermasUser.permissions.indexOf(item);
        if(index > -1){
            this.sermasUser.permissions.splice(index, 1);
        }
      }
    }

     /**
     * Funcion que añade un permiso que recibe por parámetro
     * @param item
     */
    addPermission (item: string) {
      if(this.sermasUser !== undefined){
        this.sermasUser.permissions.push(item);
      }
    }

    isEmbedded(){
        return false;
    }
}
