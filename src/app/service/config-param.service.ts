import { HttpClient } from '@angular/common/http';
import { IPropertiesServiceGeneric } from '@oh/hnconf-services/build/service/properties-generic.interface.service';
import { ErrorsHandlerService } from '@oh/hncommons-services/build/service/errors-handler.service';
import { ConfigParamListRS } from '@oh/hnconf-services/build/bean/rs/config-param-list.bean';
import { AdministrationDAOService } from './dao/administration-dao.service';
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
// tslint:disable-next-line:no-unused-variable
import { Observable } from 'rxjs';

@Injectable()
export class ConfigParamService {

    // Observable
    private paramsObservable = new Subject<ConfigParamListRS>();

    // Observable params streams
    paramValue$ = this.paramsObservable.asObservable();

    params!: ConfigParamListRS;

    /**
     *
     * @param http
     * @param daoAdministration
     * @param errorsHandler
     * @param _propertiesVMService
     */
    constructor(private daoAdministration: AdministrationDAOService,
        private errorsHandler: ErrorsHandlerService,
        @Inject('IPropertiesServiceGeneric') private _propertiesVMService: IPropertiesServiceGeneric) {
        this._propertiesVMService.urlStream$.subscribe((url: any) => this.initDataConfigParam());
    }

    initDataConfigParam() {
        this.daoAdministration.getGeneralParameters().subscribe(
            data => this.onDataConfigParamSuccess(data),
            error => this.errorsHandler.processErrorsForErrorsComponent(error)
        );
    }

    private onDataConfigParamSuccess(data: ConfigParamListRS): void {
        this.params = data;
        this.paramsObservable.next(data);
    }
}
