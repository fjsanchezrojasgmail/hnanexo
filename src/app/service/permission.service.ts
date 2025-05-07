import { Injectable, Inject } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggerService } from '@oh/hncommons-services/build/service/logger.service';
import { LoginService } from '@oh/hn-services/build/service/login.service';
import { IPropertiesServiceGeneric } from '@oh/hnconf-services/build/service/properties-generic.interface.service';

/**
 * En esta clase se definen los permisos de operaciones o funcionalidades disponibles
 */
@Injectable()
export class Permissions  implements CanActivate, Resolve<any> {

    // Funcionalidades de HNCLI
    static HNCLI_URG_READ = 'HNCLI_URG_READ';
    static HNCLI_MEDICAL_ATTENTION = 'HNCLI_MEDICAL_ATTENTION';
    static HNCLI_MEDICAL_HISTORY = 'HNCLI_MEDICAL_HISTORY';
    static HNCLI_ANT_WRITE = 'HNCLI_ANT_WRITE';
    static HNCLI_CVI_WRITE = 'HNCLI_CVI_WRITE';
    static HNCLI_DIA_WRITE = 'HNCLI_DIA_WRITE';
    static HNCLI_DISCHARGE = 'HNCLI_DISCHARGE';

    //permisos HNGEP
    static HNAUT_FUN_READ_BORRAME = 'HNAUT_FUN_READ'; //temporal de acceso
    static HNGEP_WRITE_REQ_IMA = 'HNGEP_WRITE_REQ_IMA'; // Crear/Editar/Cancelar Prestaciones Imagen
    static HNGEP_READ_REQ_CENTER = 'HNGEP_READ_REQ_CENTER'; // Visualizar Prestaciones [Centro]
    static HNGEP_READ_REQ = 'HNGEP_READ_REQ'; // Visualizar Prestaciones [unidad-linea asistencial]
    static HNGEP_TYPE_REQ = 'HNGEP_TYPE_REQ'; // parametros de configuracion

    /////////////////////////////////////////////////////////////////////

    // Por defecto cargamos el valor de los permisos/funcionalidades a false
    URG_READ = false; // Lectura de parámetros de configuración
    MEDICAL_ATTENTION = false;
    MEDICAL_HISTORY = false;
    ANT_WRITE = false; // Gestionar antecedentes
    CVI_WRITE = false; // Gestionar constantes vitales
    DIA_WRITE = false; // Gestionar diagnósticos
    DISCHARGE = false; // Alta medica

    //permisos HNGEP
    HN_REQ_BORRAME = false;
    WRITE_REQ_IMA = false;
    READ_REQ_CENTER = false;
    READ_REQ = false;
    TYPE_REQ = false;

    /**
     * Constructor
     * @param loginService
     * @param logger
     * @param router
     */
    constructor(private loginService: LoginService,
        private logger: LoggerService,
        private router: Router,
        @Inject('IPropertiesServiceGeneric') private _propertiesVMService: IPropertiesServiceGeneric) { }


    /** Carga la lista de permisos de HNAUT */
    loadPermissionByUser() {
        this.logger.info('Loading the 3 HNCLI Permissions options...');
        // this.logger.debug(' *---* TOTALES   --> ' + this.loginService.LoggedUser.permissions);
        // this.logger.debug(' *---* NUM HNAUT --> ' + (this.loginService.LoggedUser.permissions.toString().split('HNAUT').length - 1));
        this.URG_READ = this.loginService.checkPermission(Permissions.HNCLI_URG_READ);
        this.MEDICAL_ATTENTION = this.loginService.checkPermission(Permissions.HNCLI_MEDICAL_ATTENTION);
        this.MEDICAL_HISTORY = this.loginService.checkPermission(Permissions.HNCLI_MEDICAL_HISTORY);
        this.ANT_WRITE = this.loginService.checkPermission(Permissions.HNCLI_ANT_WRITE);
        this.CVI_WRITE = this.loginService.checkPermission(Permissions.HNCLI_CVI_WRITE);
        this.DIA_WRITE = this.loginService.checkPermission(Permissions.HNCLI_DIA_WRITE);
        this.DISCHARGE = this.loginService.checkPermission(Permissions.HNCLI_DISCHARGE);

        this.HN_REQ_BORRAME = this.loginService.checkPermission(Permissions.HNAUT_FUN_READ_BORRAME);
        this.WRITE_REQ_IMA = this.loginService.checkPermission(Permissions.HNGEP_WRITE_REQ_IMA);
        this.READ_REQ_CENTER = this.loginService.checkPermission(Permissions.HNGEP_READ_REQ_CENTER);
        this.READ_REQ = this.loginService.checkPermission(Permissions.HNGEP_READ_REQ);
    }

    /**
    * Método que comprueba al intentar navegar al módulo si el usuario dispone de los permisos necesarios.
    * En caso de no tener permisos, navegará a una pantalla "unauthorized"
    */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.loginService.getUserPromise().then((user) => {
                const roles = (route && route.data['roles'] && route.data['roles'].length > 0) ?
                    route.data['roles'].map((xx:any) => xx.toUpperCase()) : null;
                    this.logger.debug('Roles --> ' + roles);

                    if (roles == null || this.loginService.hasPermission(roles)) {
                        resolve(true);
                    } else {
                        resolve(false);
                        this.router.navigate(['unauthorized']);
                    }
                }
            ).catch((err) => {
                this.logger.error('Error getting userPromise from loginService --> ' + err);
                reject(err);
                this.router.navigate(['unauthorized']);
            });
        });
    }

    /**
    * Método que comprueba al intentar navegar a un componente hijo si el usuario dispone de los permisos necesarios.
    * En caso de no tener permisos, navegará a una pantalla "unauthorized"
    */
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.loginService.getUserPromise().then((user) => {
                const roles = (route && route.data['roles'] && route.data['roles'].length > 0) ?
                    route.data['roles'].map((xx:any)  => xx.toUpperCase()) : null;
                    this.logger.debug('Roles CHILD --> ' + roles);
                    if (roles == null || this.loginService.hasPermission(roles)) {
                        resolve(true);
                    } else {
                        resolve(false);
                        this.router.navigate(['unauthorized']);
                    }
                }
            ).catch((err) => {
                this.logger.error('Error gettingChild userPromise from loginService --> ' + err);
                reject(err);
                this.router.navigate(['unauthorized']);
            });
        });
    }

    /**
    * Método que redirige en el primer acceso al primer módulo sobre el que el usuario dispone de permiso.
    * En caso de no tener permisos, navegará a una pantalla "unauthorized"
    */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        this.loginService.getUserPromise().then((user) => {
            if (route && route.data['roles']) {
                const modulesRol = route.data['roles'];
                const urlRedirect = this.loginService.calculateRedirectTo(modulesRol);
                if (urlRedirect !== undefined) {
                    this.router.navigate([urlRedirect]);
                } else {
                    this.router.navigate(['unauthorized']);
                }
            } else {
                this.router.navigate(['unauthorized']);
            }
        });
        return null;
    }


}
