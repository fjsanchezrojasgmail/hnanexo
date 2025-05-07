import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ComponentMessages } from '../../bean/i18n-bean';
import { SermasHNSessionUserDataRS } from '@sacyl/hnanexo-services/build/bean/rs/sermas-user-bean';
import { CharacterTruncateLimits, ProfileUserHnanexoStatus } from '../../bean/hnanexo-constants.bean';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncateText.pipe';

@Component({
  selector: 'hnanexo-component-header',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './anexo-hn-header-component.html',
  styleUrls: ['./anexo-hn-header-component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AnexoHNHeaderComponent implements OnInit {

  isEmbedded: boolean = false; // TO-DO Booleano para saber si la app está embebida en un iframe

  // DEFINICION DE INPUTS QUE RECIBIRÁ EN EL WEB
  // ** TITULO APLICACION **
  @Input()
  title1: string | undefined;
  @Input()
  title2: string | undefined;

  // ** DATOS USUARIO LOGGEADO **
  @Input()
  user: SermasHNSessionUserDataRS | undefined;
  @Input()
  name: string = '';
  @Input()
  center: string | undefined;
  @Input()
  hnrole: string | undefined;
  @Input()
  cias: string | undefined;
  @Input()
  num_colegiado : string | undefined;
  @Input()
  unit: string | undefined;
  @Input()
  tooltip1: string | undefined;
  @Input()
  tooltip2: string | undefined;
  @Input()
  tooltip3: string | undefined;

  // ** URL DEL MANUAL PARA LOS PERFILES OH/ANEXO_MEDICO, OH/ANEXO_INSPECTOR_MEDICO y OH/ANEXO_SSCC**
  @Input()
  urlManual: string | undefined;

  // ** URL DEL MANUAL PARA EL PERFIL OH/ANEXO_ADMINISTRADOR**
  @Input()
  urlManualAdmin: string | undefined;

  @Input()
  existePaciente: boolean | undefined;

  limitCharacter: number = 10; // Limite de caracteres a mostrar para el nombre del facultativo

  // DEFINE SI ES MEDICO PRESCRIPTOR O NO
  prescriptor: Boolean = false;
  titleHeader: string | undefined;
  perfil: string | undefined;

  // DEFINICION DE CLASES SEGUN ESTILOS DE HN
  @Input()
  classHeaderComponent = 'greyDark-color-op5';

  @Input()
  classSectionLeftHeader = 'sea-sunset-dark-background section-left-border-bottom';

  @Input()
  classSectionRighttHeader = 'greyDark-color-op5-border-bottom';

  @Input()
  classColorText = 'white-color';

  @Input()
  classNameUserText = 'white-color name-user';

  @Input()
  classDataUserText = 'white-color data-user';

  @Input()
  classVertLine = 'greyDark-color-op5';

  @Input()
  classHeaderAction = 'hn-header-action-color';

  @Output()
  logout = new EventEmitter();

  // TRADUCCIONES
  locale: string | undefined;
  componentMessages: any = ComponentMessages.en;

  infoOpened: boolean = false;
  onClick: boolean = false;

  constructor() { }

  ngOnInit() {

    this.isEmbedded = this.isRunningInIframe();

    this.locale = navigator.language;
    // Por defecto inglés. Actualizo si es otra que tenga internacionalizada.
    if (this.locale.startsWith('es')) {
      this.componentMessages = ComponentMessages.es;
    }

    if(this.user !== undefined){
    if(this.user.hnrole.code == ProfileUserHnanexoStatus.ANEXO_MEDICO) {
      this.prescriptor = true;
    } else {
      this.prescriptor = false;
    }

    if(this.user.hnrole.code == ProfileUserHnanexoStatus.ANEXO_MEDICO) {
      this.perfil = this.componentMessages['label.perfil.prescriptor']
    }else if(this.user.hnrole.code == ProfileUserHnanexoStatus.ANEXO_ADMINISTRADOR) {
      this.perfil = this.componentMessages['label.perfil.administrador']
    } else if(this.user.hnrole.code == ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO && !this.existePaciente) {
      this.perfil = this.componentMessages['label.perfil.inspector']
    } else if (this.user.hnrole.code == ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO  && this.existePaciente) {
      this.perfil = this.componentMessages['label.perfil.consulta']
    }
  }

    this.limitCharacter = CharacterTruncateLimits.NAME_PRACTITIONER_HEADER;
  }

  clickLogout() {
    this.logout.emit();
  }

  // Despliega la información de usuario, para medico preescriptor, mostrando CIAS y nº colegiado
  openInfo() {
    this.onClick = !this.onClick;
    if (!this.infoOpened) {
      this.infoOpened = true;
    } else {
      this.infoOpened = false;
    }
  }

  // Si la longitud del nombre del prescriptor supera los caracteres permitidos devuelve el nombre
  nameLengthCheck(name:string) {
    if(name != null && this.limitCharacter !== undefined && name.length > this.limitCharacter) {
      return name;
    } else {
      return '';
    }
  }

  /**
   * Método que abre el manual de usuario de la aplicación en una nueva ventana
   */
  openManual() {

    if(this.user !== undefined){

    if (this.user.hnrole.code === ProfileUserHnanexoStatus.ANEXO_MEDICO
      || this.user.hnrole.code === ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO
      || this.user.hnrole.code === ProfileUserHnanexoStatus.ANEXO_SSCC) {
        window.open(this.urlManual, 'Manual Usuario ANEXO II Digital');
    }

    if (this.user.hnrole.code === ProfileUserHnanexoStatus.ANEXO_ADMINISTRADOR) {
      window.open(this.urlManualAdmin, 'Manual Usuario Administrador ANEXO II Digital');
    }

  }
  }

  isRunningInIframe(): boolean {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

}
