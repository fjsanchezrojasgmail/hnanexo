/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HNSessionUserDataRS } from '../bean/user-bean';
import { KeycloakService } from '../service/keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    // implementación

    LoggedUser: HNSessionUserDataRS | undefined;

    userStream$: Observable<HNSessionUserDataRS> | undefined;

    constructor(http: HttpClient, _keycloakService: KeycloakService){
      //obtencion de datos del usuario logado
      /*
      export class HNSessionUserDataRS {
        'id': string;
        'login': string;
        'userName': string;
        'accessOptions': AccessOption;
        'role': PropertyUser;
        'center': PropertyUser;
        'organization': PropertyUser;
        'careLine': PropertyUser;
        'unit': PropertyUser;
        'scope': HNSessionUserScope;
        'hnrole': PropertyUser;
        'idPatientLogged': string;
        'aud': string;
        'permissions': Array<string>;
        'hasStandaloneHeader': boolean;
        'birthday': string;
        'gender': string;
        'lastConnection': string;
      }
      */

      /*
    };

    logout(): void {
        this.LoggedUser = undefined;
        this.userStream$ = undefined;
    };

    private getUserFromKeycloakService(){

    }
    private sendUser(user: HNSessionUserDataRS){

    }

    loadUser(): void {

    }

    checkPermission(permission: string): boolean {
      return false;
    }
    hasPermission(checkPermission: string[]): boolean {
      return false;
    }
    getUserPromise(): Promise<HNSessionUserDataRS> {
        return Promise.resolve(this.LoggedUser!);
    }

    calculateRedirectTo(modulesRol: any): any {

    }


}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HNSessionUserDataRS, HNSessionUserScope } from '../bean/user-bean';
import { KeycloakService } from '../service/keycloak.service';
import { ProfileUserHnanexoStatus } from '../bean/hnanexo-constants.bean';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject = new BehaviorSubject<HNSessionUserDataRS | undefined>(undefined);
  userStream$ = this.userSubject.asObservable();
  LoggedUser: HNSessionUserDataRS | undefined;

  constructor(private http: HttpClient, private keycloak: KeycloakService) {
    this.loadUser();
  }

  logout(): void {
    this.LoggedUser = undefined;
    this.userSubject.next(undefined);
    KeycloakService.logout();
  }

  private getUserFromKeycloakService(): HNSessionUserDataRS {
    const idToken = KeycloakService.getIdToken();
    return {
      id: '123',
      login: idToken.preferred_username || '',
      userName: idToken.name || '',


      accessOptions: {
        id: '',
        code: '',
        urlVuelta: ''
      },
      role: {
        code: ProfileUserHnanexoStatus.ANEXO_ADMINISTRADOR,
        display: '',
        alias: '',
        scope: '',
        hcProfessionCode: '',
        hcProfessionName: '',
        hcSpecialtyCode: '',
        hcSpecialtyName: ''
      },
      center: {
        code: '',
        display: '',
        alias: '',
        scope: '',
        hcProfessionCode: '',
        hcProfessionName: '',
        hcSpecialtyCode: '',
        hcSpecialtyName: ''
      },
      organization: {
        code: '',
        display: '',
        alias: '',
        scope: '',
        hcProfessionCode: '',
        hcProfessionName: '',
        hcSpecialtyCode: '',
        hcSpecialtyName: ''
      },
      careLine: {
        code: '',
        display: '',
        alias: '',
        scope: '',
        hcProfessionCode: '',
        hcProfessionName: '',
        hcSpecialtyCode: '',
        hcSpecialtyName: ''
      },
      unit: {
        code: '',
        display: '',
        alias: '',
        scope: '',
        hcProfessionCode: '',
        hcProfessionName: '',
        hcSpecialtyCode: '',
        hcSpecialtyName: ''
      },
      scope: HNSessionUserScope.CENTER,
      hnrole: {
        code: ProfileUserHnanexoStatus.ANEXO_ADMINISTRADOR,
        display: '',
        alias: '',
        scope: '',
        hcProfessionCode: '',
        hcProfessionName: '',
        hcSpecialtyCode: '',
        hcSpecialtyName: ''
      },




      idPatientLogged: idToken.loggedPatient?.[0] || '',
      aud: 'app',
      permissions: idToken.permissions || [],
      hasStandaloneHeader: idToken.standalone || false,
      birthday: idToken.patientBirthday || '',
      gender: idToken.patientGender || '',
      lastConnection: idToken.lastLogin || '',
    };
  }

  private sendUser(user: HNSessionUserDataRS): void {
    this.LoggedUser = user;
    this.userSubject.next(user);
  }

  loadUser(): void {
    const user = this.getUserFromKeycloakService();
    this.sendUser(user);
  }

  checkPermission(permission: string): boolean {
    return KeycloakService.hasPermission(permission);
  }

  hasPermission(checkPermissions: string[]): boolean {
    return checkPermissions.every(p => KeycloakService.hasPermission(p));
  }

  getUserPromise(): Promise<HNSessionUserDataRS> {
    return Promise.resolve(this.LoggedUser!);
  }

  calculateRedirectTo(modulesRol: any): any {
    return '/home';
  }
}

