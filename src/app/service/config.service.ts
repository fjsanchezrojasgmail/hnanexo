import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto permite que el servicio esté disponible en toda la aplicación
})
export class ConfigService {
  private _data: any;

  constructor(private http: HttpClient) {}

  public get data(): any {
    return this._data;
  }

  async load(): Promise<boolean> {
    try {
      this._data = await firstValueFrom(this.http.get('assets/config/app-config.json'));
      return true;
    } catch (error) {
      console.error('Error cargando la configuración:', error);
      return false;
    }
  }

  // Métodos para acceder a la configuración
  public get criterias() {
    return this._data?.criteria;
  }

  public get pagination() {
    return this._data?.pagination;
  }

  public get paginationMax() {
    return this._data?.paginationMax;
  }

  public get urlGetHnConfiguration() {
    return this._data?.urlHnConfiguration;
  }

  public get encryptUrl() {
    return this._data?.encryptUrl;
  }

  public get urlManual() {
    return this._data?.urlManual;
  }

  public get urlManualAdmin() {
    return this._data?.urlManualAdmin;
  }

  public get urlGetHNReq() {
    return this._data?.urlGetHNReq;
  }

  public get daysUpdateResourcesFhir() {
    return this._data?.daysUpdateResourcesFhir;
  }

}
