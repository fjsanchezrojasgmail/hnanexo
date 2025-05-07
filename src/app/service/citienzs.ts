import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { ICitizensHnAnexoDaoService } from '@sacyl/hnanexo-services/build/service/dao/citizens-dao.interface.service';
import { CitizensRS } from '@sacyl/hnanexo-services/build/bean/rs/citizens.bean';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

/**
 * Servicio Citizens que realzia una consulta mediante rest al backup para obtener los detalles de paciente
 * para el ws de ciudadanos
 */
@Injectable()
export class Citizens {

    public citizensResponse: CitizensRS
    public dataLoadedCitizens$: Subject<boolean>;
    public errordataLoadedCitizens$: Subject<boolean>;

    constructor(
        private http: HttpClient,
        @Inject('ICitizensHnAnexoDAOService') private _citizens: ICitizensHnAnexoDaoService,
        private configService: ConfigService,
    ) {
        this.citizensResponse = new CitizensRS();
        this.dataLoadedCitizens$ = new Subject<boolean>();
        this.errordataLoadedCitizens$ = new Subject<boolean>();
    }

    searchCitizens(data: any): Observable<CitizensRS> {
        return this._citizens.searchCitizens(data,this.configService.urlGetHnConfiguration);
      }

}
