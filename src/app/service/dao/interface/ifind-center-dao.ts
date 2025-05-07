
import { Observable } from 'rxjs';
import { FindCenterCriteria } from '../bean/criteria/find-center-criteria.bean';
import { FindCenterUserCriteria } from '../bean/criteria/find-center-user-criteria.bean';

export interface IFindCenterDAOService {
    /**
     * Método que envia una peticion para obtener datos de centros
     */
    findCenter(url: string, data: FindCenterCriteria): Observable<any>;
    /**
     * Devuelve un json con el listado de centros registrados en la app para el user, indicados en el criteria
     */
    findCenterByUser(url: string, criteria: FindCenterUserCriteria): Observable<any>;
}
