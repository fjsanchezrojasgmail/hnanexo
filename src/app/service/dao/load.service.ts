export declare class LoadService {
  private static count;
  private static defaultLoaderId;
  private encode;
  private encodeKey;
  private noEncodeParams;
  constructor();
  isLoading(): boolean;
  isloaded(): boolean;
  startRequest(loaderId?: string): void;
  endRequest(loaderId?: string): void;
  setEncodedApp(encode: boolean): void;
  getEncodedApp(): boolean;
  setEncodeKey(key: string): void;
  getEncodedKey(): string;
  setNoEncodeParams(listNoencodeParams: string[]): void;
  addNoEncodeParam(param: string): void;
  getNoEncodeParams(): any[];
}
