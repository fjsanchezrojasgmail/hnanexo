import { Observable } from 'rxjs';
import { ConsultServiceCriteria } from '../bean/criteria/consult-service-criteria.bean';
import { Bundle } from '../../../bean/bundle.bean';
import { ConsultServiceRS } from '../../../bean/rs/fhir/consult-service.bean';


export interface IConsultServiceHnAnexoDaoService {
    /**
     * Método que devuelve la url base del servicio
     */
    getUrl(url: string, prefix?: string): string;
    /**
     * Método que obtiene una lista de entidades según el 'criteria' que recibe
     * @param criteria Criterio de búsqueda para obtener la lista
     */
    search(service: ConsultServiceCriteria, url?: string): Observable<Bundle<ConsultServiceRS[]>>;
    /**
     * Método que obtiene los servicios prescriptores
     */
    getPrescriptorService(url?: string): Observable<ConsultServiceRS[]>;
}
