import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { hnanexoConstants } from '../../bean/hnanexo-constants.bean';
import { LoadService } from '@sacyl/ohcommonsacyl-services/build/service/dao/load.service';
import { GenericService } from '@sacyl/ohcommonsacyl-services/build/service/dao/generic.service';
import { IPropertiesServiceGeneric } from '@oh/hnconf-services/build/service/properties-generic.interface.service';
import { ConfigParamListRS } from '@oh/hnconf-services/build/bean/rs/config-param-list.bean';

/**
 * Servicio DAO para el componente de Administración
 */
@Injectable()
export class VisadoDAOService extends GenericService<ConfigParamListRS> {

    private URL_LIST: string | undefined;

    /**
     * Constructor
     * @param http
     * @param loadService
     * @param _propertiesVMService
     */
    constructor(http: HttpClient, loadService: LoadService,
        @Inject('IPropertiesServiceGeneric') private _propertiesVMService: IPropertiesServiceGeneric) {
        super(http, loadService);
    }

    /**
     * Método que recupera todos los parámetros generales definidos para la aplicación
     */
    getGeneralParameters(): Observable<ConfigParamListRS> {
        const url: string = this.getUrl() + '/GENERAL';
        return this.getData(url, {}, this.onSearchResponse);
    }

    /**
     * Éxito en la recuperación de parámetros
     * @param data
     * @param error
     */
    private onSearchResponse(data: ConfigParamListRS, error: boolean): ConfigParamListRS {
        return data;
    }

    /**
     * Método que construye la URL de la carga de propiedades
     */
    private getUrl(): string {
        if (!this.URL_LIST) {
            this.URL_LIST = this._propertiesVMService.getValuePropertieByName(hnanexoConstants.URL_HNANEXO)
                + '/fhir/AdminConfigParamListRS';
        }
        return this.URL_LIST;
    }

    /**
     * Método que realiza el guardado de los parámetros en el servidor
     * @param data
     */
    save(data: ConfigParamListRS) {
        const url = this._propertiesVMService.getValuePropertieByName(hnanexoConstants.URL_HNANEXO)
            + '/fhir/AdminConfigParamListRS';
        return this.putData(url, data, this.onSuccessResponse);
    }

    /**
     * Éxito en el guardado de parámetros
     * @param data
     * @param error
     */
    private onSuccessResponse(data: any, error: boolean): any {
        return data;
    }
}
