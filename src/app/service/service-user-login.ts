import { Injectable, Inject } from '@angular/core';
import { IConsultServiceHnAnexoDaoService } from '@sacyl/hnanexo-services/build/service/dao/consult-service-hnanexo-dao.interface.service';
import { ConsultServiceRS } from '@sacyl/hnanexo-services/build/bean/rs/consult-service.bean';
import { ConfigService } from './config.service';
import { ConsultServiceCriteria } from '@sacyl/hnanexo-services/build/bean/rs/criteria/consult-service-criteria.bean';
import { Subject } from 'rxjs';
import { Bundle } from '@oh/hn-services/build/bean/bundle-bean';

/**
 * Clase ServiceUserLogin que implementa el método para obtener los datos suficientes mediante una llamada al backup
 * para conocer si el servicio en el cual el usuario se ha logada tiene permisos para prescribir prescripciones.
 */
@Injectable()
export class ServiceUserLogin {

    public consultService: ConsultServiceRS | undefined;
    public listConsultService: Array<ConsultServiceRS> | undefined;
    public isPrescriptorServiceLoaded$: Subject<boolean>;

    constructor(
        @Inject('IConsultServiceHnAnexoDAOService') private _consultServiceService: IConsultServiceHnAnexoDaoService,
        private configService: ConfigService,) {
            this.isPrescriptorServiceLoaded$ = new Subject<boolean>();
        }

        callService(service:string): void {
            const criteria = new ConsultServiceCriteria();
            criteria.keyCode = service;
            this._consultServiceService.search(criteria, this.configService.urlGetHnConfiguration)
                .subscribe(
                    (bundle: any)  => {
                        this.onLoadServicePrescriptorSuccess(bundle);
                    },
                    (error: string) => {
                        this.onDataFailed(error);
                    });
        }

        onLoadServicePrescriptorSuccess(data: any): void {
            const consultServiceResponse = new ConsultServiceRS();
            this.listConsultService = data;
            if(this.listConsultService !== undefined){
            this.listConsultService.forEach(response => {
                consultServiceResponse.keyCode = response.keyCode;
                consultServiceResponse.nombre = response.nombre;
                consultServiceResponse.prescriptor = response.prescriptor;
                consultServiceResponse.serviceRestriction = response.serviceRestriction;
            });
          }
            this.isPrescriptorServiceLoaded$.next(true);
        }

        onDataFailed(error: string){
            console.error(error);
        }

}
