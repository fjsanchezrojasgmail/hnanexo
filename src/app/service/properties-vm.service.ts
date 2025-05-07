import {PropertiesGenericHnService} from '@oh/hnconf-services/build/service/properties-generic-hn.service';
import { Injectable, Inject } from '@angular/core';

// hnconf-services Inicio imports
import { Http } from '@angular/http';
import { LoadService } from '@sacyl/ohcommonsacyl-services/build/service/dao/load.service';
import { hnanexoConstants } from '../bean/hnanexo-constants.bean';
// hnconf-services Fin imports
// isqui-services Inicio imports

// isqui-services Fin imports

@Injectable()
export class PropertiesVMService extends PropertiesGenericHnService {

    constructor(public http: Http, public loadService: LoadService) {
        super(hnanexoConstants.APP_NAME, hnanexoConstants.APP_CONFIG, http, loadService);
    }
}
