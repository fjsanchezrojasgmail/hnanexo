import { Injectable } from '@angular/core';
import { IConsultServiceHnAnexoDaoService } from './dao/interface/consult-service-hnanexo-dao';
import { Observable } from 'rxjs';
import { Bundle } from '../bean/bundle.bean';
import { ConsultServiceRS } from '../bean/rs/fhir/consult-service.bean';
import { ConsultServiceCriteria } from './dao/bean/criteria/consult-service-criteria.bean';

@Injectable({providedIn: 'root'})
export class ConsultServiceHnanexoService implements IConsultServiceHnAnexoDaoService {
  constructor() { }
  getUrl(url: string, prefix?: string): string {
    throw new Error('Method not implemented.');
  }
  search(service: ConsultServiceCriteria, url?: string): Observable<Bundle<ConsultServiceRS[]>> {
    throw new Error('Method not implemented.');
  }
  getPrescriptorService(url?: string): Observable<ConsultServiceRS[]> {
    throw new Error('Method not implemented.');
  }

}
