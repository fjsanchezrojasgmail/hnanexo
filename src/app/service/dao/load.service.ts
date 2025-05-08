import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoadService {
  private static count: number = 0;
  private static defaultLoaderId: string = '__default__';

  private static encode: boolean = false;
  private static encodeKey: string = '';
  private static noEncodeParams: string[] = [];

  constructor() {}

  static isLoading(): boolean {
    return this.count > 0;
  }

  static isLoaded(): boolean {
    return this.count === 0;
  }

  static startRequest(loaderId: string = this.defaultLoaderId): void {
    console.debug(`Start request [${loaderId}]`);
    this.count++;
  }

  static endRequest(loaderId: string = this.defaultLoaderId): void {
    console.debug(`End request [${loaderId}]`);
    if (this.count > 0) {
      this.count--;
    }
  }

  static setEncodedApp(encode: boolean): void {
    this.encode = encode;
  }

  static getEncodedApp(): boolean {
    return this.encode;
  }

  static setEncodeKey(key: string): void {
    this.encodeKey = key;
  }

  static getEncodedKey(): string {
    return this.encodeKey;
  }

  static setNoEncodeParams(listNoencodeParams: string[]): void {
    this.noEncodeParams = listNoencodeParams;
  }

  static addNoEncodeParam(param: string): void {
    if (!this.noEncodeParams.includes(param)) {
      this.noEncodeParams.push(param);
    }
  }

  static getNoEncodeParams(): string[] {
    return this.noEncodeParams;
  }
}
