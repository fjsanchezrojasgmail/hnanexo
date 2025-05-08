import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPropertiesGenericHnService } from './build/service/interface/iproperties-generic-hnservice';
import { LoadService } from './dao/load.service';
import { Injectable } from '@angular/core';

/**
 * Base para todos los PropertiesVMService
 */

export class PropertiesGenericHnService implements IPropertiesGenericHnService {

  urlStream$: Observable<string> | undefined;
  extraModuleLoaded$: Observable<boolean> | undefined;
  parameters: Map<string, string> = new Map<string, string>();
  readonly url: string = '';
  errors: string[] = [];

  protected appName: string;
  protected location: string;

  constructor(
    appName: string,
    location: string,
    protected http: HttpClient,
    protected loadService: LoadService
  ) {
    this.appName = appName;
    this.location = location;
    // Puedes usar appName y location aquí
  }

  onDataFailed(error: any): void {
    // Implementación de error
  }

  getValuePropertieByName(name: string): any {
    // Implementación real
  }

  loadExtraModuleProperties(nameModule: string): void {
    // Implementación real
  }

  isLoadedModule(nameModule: string): boolean {
    return nameModule.length > 0;
  }

  searchExtraModuleProperties(nameModule: string): void {
    // Implementación real
  }
}
