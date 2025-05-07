
import { Observable } from 'rxjs';
import { Bundle } from '../bean/bundle.bean';
import { LoadService } from './dao/load.service';
import { HttpClient } from '@angular/common/http';
export declare class GenericService<T> {
    protected http: HttpClient;
    private _loadService;
    private loadService;
    constructor(http: HttpClient, _loadService: LoadService);
    /**
     * Encrypts the text passed to it by parameter
     * @param text
     * @returns
     */
    protected encodeText(text: string): Promise<string>;
    protected createParamsObj(parameters: any, allowEmptyString: boolean): {
        params: URLSearchParams;
        noEncodeParams: URLSearchParams;
    };
    /**
     * GetData (not sending parameters with empty strings or null as value)
     * @param url
     * @param parameters
     * @param callback
     * @param loaderId
     */
    protected getData(url: string, parameters: any, callback: (data: any, error: boolean) => T, loaderId?: string): Observable<any>;
    /**
     * GetData (not sending parameters with empty strings or null as value)
     * @param url
     * @param parameters
     * @param callback
     * @param loaderId
     */
    protected getDataBundle(url: string, parameters: any, callback: (data: any, error: boolean) => Bundle<T>, loaderId?: string): Observable<any>;
    /**
     * Check if the parameter has to be encrypted or not
     * @param param
     */
    protected checkNoEncodeParam(param: any): boolean;
    /**
     * GetData (allowing to send parameters with empty strings as value)
     * @param url
     * @param parameters
     * @param callback
     * @param loaderId
     */
    protected getDataWithEmptyStrings(url: string, parameters: any, callback: (data: any, error: boolean) => T, loaderId?: string): Observable<any>;
    /**
     *
     * @param url
     * @param parameters
     * @param allowEmptyString - indicates wheter to allow sending parameteres with empty string as value (true) or not (false)
     * @param callback
     * @param loaderId
     */
    protected getDataWithOrWithoutEmptyStringsBundle(url: string, parameters: any, callback: (data: any, error: boolean) => Bundle<T>, loaderId?: string): Observable<any>;
    /**
     *
     * @param url
     * @param parameters
     * @param allowEmptyString - indicates wheter to allow sending parameteres with empty string as value (true) or not (false)
     * @param callback
     * @param loaderId
     */
    protected getDataWithOrWithoutEmptyStrings(url: string, parameters: any, callback: (data: any, error: boolean) => T, loaderId?: string): Observable<any>;
    protected getReport(url: string, callback: (data: any, error: boolean) => T, loaderId?: string): Observable<T>;
    protected getBinaryFile(url: string, callback: (data: any, error: boolean) => T, loaderId?: string): Observable<T>;
    /**
     *
     * Parte comun a los distitnso metodos postData
     */
    private postDataCommon(url, data, format?, responseType?, headers?);
    /**
     * Devuelve el OperationOutcome que devuelve el servicio
     */
    protected postData(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string, format?: string, responseType?: number, headers?: Headers): Observable<any>;
    /**
     * Devuelve el ArrayBuffer que devuelve el servicio
     */
    protected postDataBinary(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string, format?: string, responseType?: number, headers?: Headers): Observable<T>;
    /**
     * Devuelve un objecto con dos atributos:
     * location: id que nos devuelven en el atributo location del header
     * result: OperationOutcome del servicio
     */
    protected postDataHeaderAccess(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string, format?: string, responseType?: number, headers?: Headers): Observable<T>;
    /**
     * A diferencia del metodo postDataHeaderAccess, este devuelve un OperationOutcome
     * y sustituye el id por el id que vienen en el atributo location del header
     */
    protected postDataHeaderResult(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string, format?: string, responseType?: number, headers?: Headers): Observable<T>;
    private replacer(key, value);
    /**
     *
     * Parte comun a los distitnso metodos putData
     */
    protected putDataCommon(url: string, data: any, headers?: Headers): IdleRequestOptions;
    /**
     * Devuelve el OperationOutcome que devuelve el servicio
     */
    protected putData(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string, headers?: Headers): Observable<any>;
    /**
     * Devuelve un objecto con dos atributos(OperationOutcomeHeader):
     * location: id que nos devuelven en el atributo location del header
     * result: OperationOutcome del servicio
     */
    protected putDataHeaderAccess(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string, headers?: Headers): Observable<T>;
    /**
     * A diferencia del metodo putDataHeaderAccess, este devuelve un OperationOutcome
     * y sustituye el id por el id que vienen en el atributo location del header
     */
    protected putDataHeaderResult(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string, headers?: Headers): Observable<T>;
    protected deleteData(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string): Observable<any>;
    protected deleteDataCommon(url: string, data: any, headers?: Headers): IdleRequestOptions;
    /**
    * Devuelve el OperationOutcome que devuelve el servicio
    */
    protected patchData(url: string, data: any, callback: (data: any, error: boolean) => T, loaderId?: string): Observable<any>;
    private onResponseReport(res, loaderId, callback);
    private onResponseBinary(res, loaderId, callback);
    private onResponse(res, loaderId, callback);
    private onResponseBundle(res, loaderId, callback);
    private onResponseCore(res, loaderId, callback);
    private onResponseHeaderAccess(res, loaderId, callback);
    private onResponseHeaderResult(res, loaderId, callback);
    private onError(data, loaderId, callback);
    private onErrorBundle(data, loaderId, callback);
    private onErrorCore(data, loaderId, callback);
    protected onComplete(): void;
    private addFormatoURL(url, format?);
    /**
  * Callback de la llamada al servicio
  * @param data {Bundle<TriageBean>}
  * @param error {boolean}
  */
    onServiceResponse(data: T, error: boolean): T;
}
