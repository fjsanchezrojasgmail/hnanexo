
import { Observable } from 'rxjs';
import { ConsultAstareRS } from '../../../bean/rs/fhir/consult-astareRS.bean';
export interface IConsultAstareHnAnexoDAOService {
    /**
    * Método para guardar la información contenida en el parámetro de entrada data.
    * @param data objeto con la información a guardar
    */
    create(data: ConsultAstareRS): ConsultAstareRS;
    /**
    * Método para realizar la consulta a Astare desde el servidor
    * @param data objeto con la información a guardar
    */
    consult(url?: string): Observable<ConsultAstareRS>;
    /**
     *  Método que obtiene la URL de servicio astare
     */
    getUrlAstare(url: string): string;
}
