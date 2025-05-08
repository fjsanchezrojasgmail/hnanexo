import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Bundle } from '../../bean/bundle.bean';
import { OrganizationRS } from '../../bean/rs/fhir/organization.bean';
import { GenericService } from '../generic.service';
import { ReferencesSharedResourcesFHIR } from '../../bean/rs/fhir/references-shared-resources.bean';
import { IFindCenterDAOService } from './interface/ifind-center-dao';
import { IPropertiesServiceGeneric } from '../build/service/iproperties-generic.service';
import { Practitioner } from '../../bean/rs/fhir/practitioner.bean';

import { LoadService } from '../dao/load.service';
import { ISharedResourcesFhirDAOService } from './interface/ishared-resources-fhir-dao';

@Injectable()
export class SharedResourcesFhirDAOService extends GenericService<any> implements ISharedResourcesFhirDAOService {

  payload: any;

  // Subjects
  dataLoadedVerifyResources$ = new Subject<boolean>();
  dataLoadedOrganizationCenter$ = new Subject<boolean>();
  dataLoadedVerifyResourcesError$ = new Subject<boolean>();
  dataLoadedOrganizationService$ = new Subject<boolean>();
  dataLoadedPractitioner$ = new Subject<boolean>();
  dataLoadedReferences$ = new Subject<boolean>();
  dataLoadedCenterVaccinationSelected$ = new Subject<boolean>();
  dataLoadedCenterVaccinationSelectedError$ = new Subject<boolean>();
  dataErrorResourceOrganizationCenter$ = new Subject<boolean>();

  // Resources
  organizationCenter!: OrganizationRS;
  organizationService!: OrganizationRS;
  practitioner!: Practitioner;
  referencesSharedResourcesFHIR!: ReferencesSharedResourcesFHIR;
  organizationCenterVaccinationSelected!: OrganizationRS;

  constructor(
    http: HttpClient,
    loadService: LoadService
  ) {
    super(http, loadService); // Asume que GenericService acepta http y loadService
  }

  // Aquí implementas los métodos reales
  verifySharedResourcesFhir(token: Promise<string>, urlFhir: string, daysUpdateResourcesFhir: number, idModule?: string): void {
    // implementación pendiente
  }

  private existsOrganizationCenter(payload: any) {
    // implementación pendiente
  }

  private existsOrganizationService(payload: any) {
    // implementación pendiente
  }

  private existsPractitioner(payload: any) {
    // implementación pendiente
  }

  private createOrganizationCenterSacyl(payload: any, idModule?: string) {
    // implementación pendiente
  }

  private createOrganizationService(payload: any, idModule?: string) {
    // implementación pendiente
  }

  private createPractitioner(payload: any) {
    // implementación pendiente
  }

  getCenter(url: string, codCenter: string): Observable<any> {
    // implementación pendiente
    return this.http.get(`${url}?code=${codCenter}`);
  }

  private addAdditionalInformationCenter(data: any) {
    // implementación pendiente
  }

  getReferencesSharedResourcesFHIR(token: Promise<string>): void {
    // implementación pendiente
  }

  private getUrl(url: string, prefix?: string): string {
    return prefix ? `${url}/${prefix}` : url;
  }

  private getHeaders(id: string) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'X-Request-ID': id
      }
    };
  }

  processOrganizationCenter(
    organization: OrganizationRS,
    urlFhir: string,
    daysUpdateResourcesFhir: number,
    practitioner: Practitioner,
    organizationService: OrganizationRS
  ): void {
    // implementación pendiente
  }

  processUpdateOrganizationCenter(
    organization: OrganizationRS,
    urlFhir: string,
    daysUpdateResourcesFhir: number,
    practitioner: Practitioner,
    organizationService: OrganizationRS,
    serviceSearch: OrganizationRS
  ): void {
    // implementación pendiente
  }

  processOrganizationService(organization: OrganizationRS, urlFhir: string, daysUpdateResourcesFhir: number, practitioner: Practitioner): void {
    // implementación pendiente
  }

  processPractitioner(practitioner: Practitioner, urlFhir: string, daysUpdateResourcesFhir: number): void {
    // implementación pendiente
  }

  checkCiasPractitioner(practitioner: Practitioner): boolean {
    return practitioner?.identifier?.some(id => id.system?.includes('CIAS')) ?? false;
  }

  completePractitioner(practitionerSearch: Practitioner, localPractitioner: Practitioner): Practitioner {
    // Merge logic
    return { ...localPractitioner, ...practitionerSearch };
  }

  checkMetaId(organizationSearch: OrganizationRS, organizationLocal: OrganizationRS): boolean {
    return organizationSearch?.meta?.versionId !== organizationLocal?.meta?.versionId;
  }

  completeOrganization(organizationSearch: OrganizationRS, organizationLocal: OrganizationRS): OrganizationRS {
    return { ...organizationLocal, meta: organizationSearch.meta };
  }

  searchPatient(url: string, data: any): Observable<Bundle<any>> {
    return this.http.post<Bundle<any>>(url, data);
  }

  create(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  decodeToken(str: any): any {
    const base64Url = str.split('.')[1];
    const base64 = decodeURIComponent(atob(base64Url).split('').map(c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    return JSON.parse(base64);
  }
}

