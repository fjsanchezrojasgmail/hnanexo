import { Observable } from 'rxjs';
import { GenericRS } from '../../../administration/beans/genericRS.bean';

export interface IAdmGenericHnAnexoDAOService {
    /**
     *  Método que obtiene la URL de servicio
     */
    getUrl(url: string, path: String): string;
    /**
     * Método que devuelve un listado de grupos
     * @param url
     * @param data
     */
    searchItems(url: string, data: GenericRS): Observable<any>;
    /**
     * Método que devuelve el detalle de un grupo
     * @param url
     * @param data grupo que se quiere consultar
     */
    detailItem(url: string, data: GenericRS): Observable<GenericRS>;
    /**
     * Método que modifica un grupo
     * @param url
     * @param data grupo que se quiere modificar
     */
    updateItem(url: string, data: GenericRS): Observable<GenericRS>;
    /**
    * Método que crea un grupo
    * @param url
    * @param data
    */
    addItem(url: string, data: any): Observable<GenericRS>;
}
