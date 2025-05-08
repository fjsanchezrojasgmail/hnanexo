import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Bundle } from '../bean/bundle.bean';
import { LoadService } from './dao/load.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class GenericService<T> {
  protected http: HttpClient;
  private _loadService: LoadService;

  constructor(http: HttpClient, _loadService: LoadService) {
    this.http = http;
    this._loadService = _loadService;
  }

  protected async encodeText(text: string): Promise<string> {
    return btoa(unescape(encodeURIComponent(text)));
  }

  protected createParamsObj(parameters: any, allowEmptyString: boolean) {
    const params = new URLSearchParams();
    const noEncodeParams = new URLSearchParams();

    Object.entries(parameters || {}).forEach(([key, value]) => {
      if (value !== null && (allowEmptyString || value !== '')) {
        const stringValue = String(value);
        if (this.checkNoEncodeParam(key)) {
          noEncodeParams.set(key, stringValue);
        } else {
          params.set(key, stringValue);
        }
      }
    });

    return { params, noEncodeParams };
  }

  protected checkNoEncodeParam(param: any): boolean {
    return typeof param === 'string' && param.startsWith('noEncode:');
  }

  protected getData(
    url: string,
    parameters: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string
  ): Observable<any> {
    const { params } = this.createParamsObj(parameters, false);
    return this.http.get<T>(`${url}?${params.toString()}`).pipe(
      map(data => callback(data, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected getDataWithEmptyStrings(
    url: string,
    parameters: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string
  ): Observable<any> {
    const { params } = this.createParamsObj(parameters, true);
    return this.http.get<T>(`${url}?${params.toString()}`).pipe(
      map(data => callback(data, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected getDataBundle(
    url: string,
    parameters: any,
    callback: (data: any, error: boolean) => Bundle<T>,
    loaderId?: string
  ): Observable<any> {
    const { params } = this.createParamsObj(parameters, false);
    return this.http.get<Bundle<T>>(`${url}?${params.toString()}`).pipe(
      map(data => callback(data, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected getDataWithOrWithoutEmptyStrings(
    url: string,
    parameters: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string
  ): Observable<any> {
    const { params } = this.createParamsObj(parameters, true);
    return this.http.get<T>(`${url}?${params.toString()}`).pipe(
      map(data => callback(data, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected getDataWithOrWithoutEmptyStringsBundle(
    url: string,
    parameters: any,
    callback: (data: any, error: boolean) => Bundle<T>,
    loaderId?: string
  ): Observable<any> {
    const { params } = this.createParamsObj(parameters, true);
    return this.http.get<Bundle<T>>(`${url}?${params.toString()}`).pipe(
      map(data => callback(data, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected getReport(
    url: string,
    callback: (data: any, error: boolean) => T,
    loaderId?: string
  ): Observable<T> {
    return this.http.get<T>(url).pipe(
      map(data => callback(data, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected getBinaryFile(
    url: string,
    callback: (data: any, error: boolean) => T,
    loaderId?: string
  ): Observable<T> {
    return this.http.get(url, { responseType: 'arraybuffer' as 'json' }).pipe(
      map(data => callback(data, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected postData(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string,
    format: string = 'json',
    responseType: number = 0,
    headers?: HttpHeaders
  ): Observable<any> {
    return this.http.post<T>(url, data, { headers }).pipe(
      map(res => callback(res, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected postDataBinary(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string,
    format: string = 'json',
    responseType: number = 0,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.post<T>(url, data, { headers, responseType: 'arraybuffer' as 'json' }).pipe(
      map(res => callback(res, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected postDataHeaderAccess(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string,
    format: string = 'json',
    responseType: number = 0,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.post<T>(url, data, {
      observe: 'response',
      headers
    }).pipe(
      map(res => callback({
        location: res.headers.get('location'),
        result: res.body
      } as any, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected postDataHeaderResult(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string,
    format: string = 'json',
    responseType: number = 0,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.post<T>(url, data, {
      observe: 'response',
      headers
    }).pipe(
      map(res => {
        const body = res.body as any;
        const location = res.headers.get('location');
        if (body) {
          body.id = location;
        }
        return callback(body, false);
      }),
      catchError(err => of(callback(err, true)))
    );
  }

  protected putData(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string,
    headers?: HttpHeaders
  ): Observable<any> {
    return this.http.put<T>(url, data, { headers }).pipe(
      map(res => callback(res, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected putDataHeaderAccess(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.put<T>(url, data, {
      observe: 'response',
      headers
    }).pipe(
      map(res => callback({
        location: res.headers.get('location'),
        result: res.body
      } as any, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected putDataHeaderResult(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.put<T>(url, data, {
      observe: 'response',
      headers
    }).pipe(
      map(res => {
        const body = res.body as any;
        const location = res.headers.get('location');
        if (body) {
          body.id = location;
        }
        return callback(body, false);
      }),
      catchError(err => of(callback(err, true)))
    );
  }

  protected deleteData(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string
  ): Observable<any> {
    return this.http.request<T>('delete', url, { body: data }).pipe(
      map(res => callback(res, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected patchData(
    url: string,
    data: any,
    callback: (data: any, error: boolean) => T,
    loaderId?: string
  ): Observable<any> {
    return this.http.patch<T>(url, data).pipe(
      map(res => callback(res, false)),
      catchError(err => of(callback(err, true)))
    );
  }

  protected onComplete(): void {
    // Finalización de procesos, si aplica
  }

  protected onServiceResponse(data: T, error: boolean): T {
    return data;
  }

  private replacer(key: string, value: any) {
    return value === undefined ? null : value;
  }

  private addFormatoURL(url: string, format: string = 'json'): string {
    return `${url}?_format=${format}`;
  }
}
