import { Observable } from 'rxjs';
import { Bundle } from '@oh/hn-services/build/bean/bundle-bean';

import { GenericService } from '@oh/hn-services/build/service/generic.service';
import { HttpClient } from '@angular/common/http';


import { LoadService } from './load.service';
import { ConfigurationParamRS } from '../../bean/rs/fhir/configuration-paramrs.bean';
export declare class ConfigurationBasicDaoService extends GenericService<Bundle<ConfigurationParamRS>> {
    constructor(http: HttpClient, loadService: LoadService);
    search(url: string): Observable<Bundle<ConfigurationParamRS>>;
}
