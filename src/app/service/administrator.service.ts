import { Injectable, Inject } from '@angular/core';
import { LoginService } from '@oh/hn-services/build/service/login.service';
import { HttpTokenizerService } from './http.tokenizer.services';
import { BundleUtil } from '@sacyl/hnanexo-services/build/util/bundle-utils';
import { HnanexoServiceConstants } from '@sacyl/hnanexo-services/build/bean/hnanexo-service-constants';
import { CacheHnAnexoDAOService } from '@sacyl/hnanexo-services/build/service/dao/cache-hnanexo-dao.service';
import { ProfileUserHnanexoStatus } from '../bean/hnanexo-constants.bean';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdministratorService implements CanActivate {

constructor(private _loginService: LoginService,
  private router: Router,
  @Inject('IHttpTokenizer') private _tokenizerService: HttpTokenizerService,
  @Inject('ICacheHnAnexoDAOService') private _cacheAnexoService: CacheHnAnexoDAOService) { }


  /** Método que indica si el usuario tiene permisos de administración en la aplicación o no */
  public canActivate() {

    const sermasUser = this._cacheAnexoService.getListResources(HnanexoServiceConstants.SERMAS_LOGGED_USER);
    // Comprobamos que tengamos un usuario
    if (sermasUser) {
      // Si es usuario administrador de anexo devolvemos true
      if (sermasUser.hnrole.code === ProfileUserHnanexoStatus.ANEXO_ADMINISTRADOR) {
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
