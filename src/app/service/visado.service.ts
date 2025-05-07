import { Injectable, Inject } from '@angular/core';
import { LoginService } from '@oh/hn-services/build/service/login.service';
import { HttpTokenizerService } from './http.tokenizer.services';
import { BundleUtil } from '@sacyl/hnanexo-services/build/util/bundle-utils';
import { HnanexoServiceConstants } from '@sacyl/hnanexo-services/build/bean/hnanexo-service-constants';
import { CacheHnAnexoDAOService } from '@sacyl/hnanexo-services/build/service/dao/cache-hnanexo-dao.service';
import { ProfileUserHnanexoStatus } from '../bean/hnanexo-constants.bean';
import { CanActivate, Router } from '@angular/router';
import { HNANEXOResourcesSharedFHIR } from '@sacyl/hnanexo-services/build/bean/hnanexo-service-constants';


@Injectable()
export class VisadoService implements CanActivate {

constructor(private _loginService: LoginService,
  private router: Router,
  @Inject('IHttpTokenizer') private _tokenizerService: HttpTokenizerService,
  @Inject('ICacheHnAnexoDAOService') private _cacheAnexoService: CacheHnAnexoDAOService) { }


  /** Método que indica si el usuario tiene permisos de administración en la aplicación o no */
  public canActivate() {
    const sermasUser = this._cacheAnexoService.getListResources(HnanexoServiceConstants.SERMAS_LOGGED_USER);
    console.log("canActivate de VISADO");
    console.log("[SERMAS_LOGGED_USER]: ", sermasUser);
    // Comprobamos que tengamos un usuario
    if (sermasUser) {
       if (sermasUser.hnrole.code === ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO) {
         return true;
       } else {
         // Si no tiene permisos devolvemos false y redirigimos a la ruta de unauthorized
         this.router.navigate(['unauthorized']);
         return false;
       }
    } else {
       // Si no tenemos usuario devolvemos false y redirigimos a la ruta de unauthorized
       this.router.navigate(['unauthorized']);
       return false;
    }
  }


}
