import { Injectable } from '@angular/core';
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

    readonly LoggedUser: HNSessionUserDataRS | undefined;

    userStream$: Observable<HNSessionUserDataRS> | undefined;

    constructor(http: HttpClient, _keycloakService: KeycloakService){};

    logout(): void {

    };

    /*


    private getUserFromKeycloakService(){

    }
    private sendUser(user){

    }

    loadUser(): void {

    }

    checkPermission(permission: string): boolean {

    }
    hasPermission(checkPermission: string[]): boolean {

    }

    logout(): void {

    };

    getUserPromise(): Promise<HNSessionUserDataRS> {

    }

    calculateRedirectTo(modulesRol: any): any {

    }*/
}
