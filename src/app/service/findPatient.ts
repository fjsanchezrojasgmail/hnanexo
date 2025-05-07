import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from './config.service';
import { PatientRS } from '@oh/ispob-services/build/bean/rs/patient/patient.bean';
import { Bundle } from '@oh/hn-services/build/bean/bundle-bean';
import { IFindPatientHnAnexoDaoService } from '@sacyl/hnanexo-services/build/service/dao/findPatient-dao.interface.service';
import { FindPatientCriteria } from '@sacyl/hnanexo-services/build/bean/rs/criteria/findPatient-criteria.bean';


/**
 * Servicio findPatiend que realiza una llamada POST al canal de MIRTH para buscar pacientes, primero
 * buscara a dicho paciente en el mpi, si no lo encuentra, lo buscara en cibeles y si lo encuentra, 
 * lo guardara en el mpi.
 */
@Injectable()
export class FindPatient {

    constructor(
        private http: Http,
        @Inject('IFindPatientHnAnexoDAOService') private _findPatient: IFindPatientHnAnexoDaoService,
        private configService: ConfigService,
    ) { }

    findPatient(data: FindPatientCriteria): Observable<PatientRS> {
        return this._findPatient.findPatient(data,this.configService.urlGetHnConfiguration);
      }
    
}
