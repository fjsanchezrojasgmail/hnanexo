import { Observable, of } from 'rxjs';
import { GenericRS } from '../../administration/beans/genericRS.bean';
import { IAdmGenericHnAnexoDAOService } from './interface/adm-generic-hnanexo-dao.interface';
import { Inject, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AdmGenericHnAnexoDAOService implements IAdmGenericHnAnexoDAOService {
    /**
     *  Método que obtiene la URL de servicio
     */
    getUrl(url: string, path: String): string {
      return '';
    };
    /**
     * Método que devuelve un listado de grupos
     * @param url
     * @param data
     */
    searchItems(url: string, data: GenericRS): Observable<any> {
      return of();
    };
    /**
     * Método que devuelve el detalle de un grupo
     * @param url
     * @param data grupo que se quiere consultar
     */
    detailItem(url: string, data: GenericRS): Observable<GenericRS> {
      return of();
    };
    /**
     * Método que modifica un grupo
     * @param url
     * @param data grupo que se quiere modificar
     */
    updateItem(url: string, data: GenericRS): Observable<GenericRS>{
      return of();
    };
    /**
    * Método que crea un grupo
    * @param url
    * @param data
    */
    addItem(url: string, data: any): Observable<GenericRS>{
      return of();
    };
}
