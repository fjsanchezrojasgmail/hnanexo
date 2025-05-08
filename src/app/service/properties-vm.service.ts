
import { Injectable, Inject } from '@angular/core';

// hnconf-services Inicio imports
import { HttpClient } from '@angular/common/http';

import { hnanexoConstants } from '../bean/hnanexo-constants.bean';
import { LoadService } from './dao/load.service';
import { PropertiesGenericHnService } from './properties-generic-hnservice.service';
// hnconf-services Fin imports
// isqui-services Inicio imports

// isqui-services Fin imports

@Injectable()
export class PropertiesVMService extends PropertiesGenericHnService {


    constructor(http: HttpClient, loadService: LoadService) {
        super(hnanexoConstants.APP_NAME, hnanexoConstants.APP_CONFIG, http, loadService);
    }

}
