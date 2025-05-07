import { HttpClient } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
import { Organization } from '@oh/hncommons-services/build/bean/rs/fhir/organization.beans';
import { Practitioner } from '@oh/hncommons-services/build/bean/rs/fhir/practitioner.bean';

import { LoadService } from './load.service';
import { IPropertiesServiceGeneric } from '@oh/hnconf-services/build/service/properties-generic.interface.service';
import { ISharedResourcesFhirDAOService } from './interface/ishared-resources-fhir-dao';






import { Bundle } from '../../bean/bundle.bean';
import { OrganizationRS } from '../../bean/rs/fhir/organization.bean';
import { GenericService } from '../generic.service';
import { ReferencesSharedResourcesFHIR } from '../../bean/rs/fhir/references-shared-resources.bean';
import { IFindCenterDAOService } from './interface/ifind-center-dao';



export declare class SharedResourcesFhirDAOService extends GenericService<any> implements ISharedResourcesFhirDAOService {
    private _propertiesVMService;
    private _findCenter;
    payload: any;
    dataLoadedVerifyResources$: Subject<boolean>;
    organizationCenter: OrganizationRS;
    dataLoadedOrganizationCenter$: Subject<boolean>;
    dataLoadedVerifyResourcesError$: Subject<boolean>;
    organizationService: Organization;
    dataLoadedOrganizationService$: Subject<boolean>;
    practitioner: Practitioner;
    dataLoadedPractitioner$: Subject<boolean>;
    referencesSharedResourcesFHIR: ReferencesSharedResourcesFHIR;
    dataLoadedReferences$: Subject<boolean>;
    organizationCenterVaccinationSelected: OrganizationRS;
    dataLoadedCenterVaccinationSelected$: Subject<boolean>;
    dataLoadedCenterVaccinationSelectedError$: Subject<boolean>;
    dataErrorResourceOrganizationCenter$: Subject<boolean>;
    constructor(http: HttpClient, loadService: LoadService, _propertiesVMService: IPropertiesServiceGeneric, _findCenter: IFindCenterDAOService);
    /**
     * Método que genera los recursos compartidos para las apps smart sermas
     * Comprobará si el recurso existe o no en el repositorio
     *      1. Si existe, no lo modificará
     *      2. Si no existe, lo creará con el identificador utilizado para las apps smart sermas
     * @param token
     */
    verifySharedResourcesFhir(token: Promise<string>, urlFhir: string, daysUpdateResourcesFhir: number, idModule?: string): void;
    /**
     * Comprueba si viene o no un Organization referente al centro en el token
     * @param payload
     */
    private existsOrganizationCenter(payload);
    private existsOrganizationService(payload);
    /**
     * Comprueba si viene o no un Practitioner referente al profesional en el token
     * @param payload
     */
    private existsPractitioner(payload);
    /**
      * Este método crea un Organization con el centro proveniente del token
      */
    private createOrganizationCenterSacyl(payload, idModule?);
    /**
     * Este método crea un Organization con el servicio del token
     */
    private createOrganizationService(payload, idModule?);
    /**
     * Este método crea un Practitioner con el profesional del token
     */
    private createPractitioner(payload);
    /**
     * Método que llama al servicio para obtener los detalles del centro
     * @param filters
     * @param urlExport
     */
    getCenter(url: string, codCenter: string): Observable<any>;
    /**
     * Este método añade información extra al recurso Organization Centro
     */
    private addAdditionalInformationCenter(data);
    /**
     * Método que devuelve las referencias de los recursos FHIR compartidos provenientes del token
     * @param token
     */
    getReferencesSharedResourcesFHIR(token: Promise<string>): void;
    /**
     * Método que construye la Url para las peticiones al servidor FHIR
     * @param url
     * @param prefix
     */
    private getUrl(url, prefix?);
    /**
     * Método que devuelve las cabeceras necesarias para validar un recurso
     * @param id
     */
    private getHeaders(id);
    /**
     * Método que procesa el recurso perteneciente al practitioner
     * @param centerData
     */
    processOrganizationCenter(organization: OrganizationRS, urlFhir: string, daysUpdateResourcesFhir: number, practitioner: Practitioner, organizationService: Organization): void;
    /**
     * Método que procesa el recurso organization validando si es necesario actualizarlo
     * @param organization
     * @param urlFhir
     * @param daysUpdateResourcesFhir
     * @param practitioner
     * @param organizationService
     * @param serviceSearch
     */
    processUpdateOrganizationCenter(organization: OrganizationRS, urlFhir: string, daysUpdateResourcesFhir: number, practitioner: Practitioner, organizationService: Organization, serviceSearch: OrganizationRS): void;
    /**
     * Método que procesa el recurso perteneciente al practitioner
     * @param centerData
     */
    processOrganizationService(organization: Organization, urlFhir: string, daysUpdateResourcesFhir: number, practitioner: Practitioner): void;
    /**
     * Método que procesa el recurso perteneciente al practitioner
     * @param centerData
     */
    processPractitioner(practitioner: Practitioner, urlFhir: string, daysUpdateResourcesFhir: number): void;
    /**
     * Método que comprueba si el practitioner tiene cias o no
     * @param practitioner
     * @returns
     */
    checkCiasPractitioner(practitioner: Practitioner): boolean;
    /**
     * Rellena el practitioner con el cias en caso de que no lo tenga y con identificadores
     *  que tenga el practitioner en el repo, pero no lo tenga en el recurso montado en local
     * @param practitionerSearch
     */
    completePractitioner(practitionerSearch: Practitioner, localPractitioner: Practitioner): Practitioner;
    /**
     * Método para comprobar si el meta es distinto al de backend
     * @param organizationSearch
     * @param organizationLocal
     */
    checkMetaId(organizationSearch: Organization, organizationLocal: Organization): boolean;
    /**
     * Método para añádir el nuevo meta al nuevo objeto organization
     * @param organizationSearch
     * @param organizationLocal
     */
    completeOrganization(organizationSearch: Organization, organizationLocal: Organization): Organization;
    /**
     * Método para buscar al paciente
     * @param url
     * @param data
     * @returns
     */
    searchPatient(url: string, data: any): Observable<Bundle<any>>;
    /**
     * Método para realizar un post al server
     * @param url
     * @param data
     */
    create(url: string, data: any): Observable<any>;
    /**
     * Método que decodifica el token
     * @param str
     */
    decodeToken(str: any): any;
}
