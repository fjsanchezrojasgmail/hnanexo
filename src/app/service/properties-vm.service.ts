
import { Injectable, Inject } from '@angular/core';

// hnconf-services Inicio imports
import { HttpClient } from '@angular/common/http';

import { hnanexoConstants } from '../bean/hnanexo-constants.bean';
import { LoadService } from './dao/load.service';
import { PropertiesGenericHnService } from './properties-generic-hnservice.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConstants } from '../bean/hnanexo-components-constants.bean';
// hnconf-services Fin imports
// isqui-services Inicio imports

// isqui-services Fin imports

@Injectable({
  providedIn: 'root'
})
export class PropertiesVMService extends PropertiesGenericHnService {

  private constantsMap: { [key: string]: any } = {};

  private constantsSubject: BehaviorSubject<{ [key: string]: any }> =
    new BehaviorSubject<{ [key: string]: any }>({});

    constructor(http: HttpClient, loadService: LoadService) {
        super(hnanexoConstants.APP_NAME, hnanexoConstants.APP_CONFIG, http, loadService);
         // Convertimos las propiedades estáticas de AppConstants a un objeto plano
    for (const key of Object.getOwnPropertyNames(AppConstants)) {
      if (key !== 'length' && key !== 'prototype' && key !== 'name') {
        const value = (AppConstants as any)[key];
        this.constantsMap[key] = value;
      }
    }
    this.constantsSubject.next(this.constantsMap);
    }

     /** Devuelve todas las constantes como observable */
  getConstants$(): Observable<{ [key: string]: any }> {
    return this.constantsSubject.asObservable();
  }

  /** Devuelve el valor de una constante por su nombre */
  getConstant(name: string): any | undefined {
    return this.constantsMap[name];
  }

}
