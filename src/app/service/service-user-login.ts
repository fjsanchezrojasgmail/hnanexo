import { Injectable, Inject } from '@angular/core';


import { ConfigService } from './config.service';

import { Subject } from 'rxjs';
import { ConsultServiceCriteria } from './dao/bean/criteria/consult-service-criteria.bean';
import { ConsultServiceRS } from '../bean/rs/fhir/consult-service.bean';
import { IConsultServiceHnAnexoDaoService } from './dao/interface/consult-service-hnanexo-dao';
import { ConsultServiceHnanexoService } from './consult-service-hnanexo.service';


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
        private consultServiceHnanexoService: ConsultServiceHnanexoService,
        private configService: ConfigService,) {
            this.isPrescriptorServiceLoaded$ = new Subject<boolean>();
        }

        callService(service:string): void {
            const criteria = new ConsultServiceCriteria();
            criteria.keyCode = service;
            this.consultServiceHnanexoService.search(criteria, this.configService.urlGetHnConfiguration)
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
