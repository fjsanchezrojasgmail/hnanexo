export declare class KeycloakService {
  static URL_ENV_JSON: string;
  static URL_KEYCLOAK_JS: string;
  static FHIR: any;
  /** variable estatica para trabajar con login(=false) o sin login(=true) */
  static isMocked: boolean;
  static promiseAfterLogin: Promise<any>;
  static auth: any;
  static appName: any;
  static observable: any;
  static defaultRedir: string;
  static requiredExtToken: boolean;
  static loadKCScript(): Promise<any>;
  static init(location: any, appName: string, useExternalToken?: boolean): Promise<any>;
  /** Meto init para saltar el login */
  static initMock(location: any, appName: string): Promise<any>;
  /** Initialice the keycloak Service */
  static initOriginal(location: any, appName: string): Promise<any>;
  static initUrlToken(): Promise<any>;
  static loadUrlKC(): Promise<{}>;
  static redirFromUrlToken(appName: string): Promise<any>;
  static setToken(tokenResponse: any, appName: string, logoutUrl: string, avoidControlPromise?: boolean): Promise<any>;
  readonly promiseAfterLogin: Promise<any>;
  static getPatientData(): any;
  static getExternalAccess(): any;
  static getAuth(): any;
  static setAuth(authz: any): any;
  updateLogoutURL(url: string): void;
  logout(): void;
  getToken(): Promise<string>;
  getOrganization(): any;
  getHnRole(): any;
  getAppName(): string;
  getIdToken(): any;
  getAuth(): any;
  getTokenResponse(property: string): any;
  getArray(value: string, split: string): Array<string>;
  getRoles(): Array<string>;
  hasRole(role: string): boolean;
  getPermission(): Array<string>;
  hasPermission(permission: string): boolean;
  getResource(): Array<string>;
  getDisplayCareline(): string;
  /**
  * Método que obtiene datos del centro del usuario a partir de resource del token de respuesta.
  * Sólo se puede obtener el código del centro a partir de este dato para que se cumpla el estándar.
  */
  getCenter(): string;
  /**
  * Método que obtiene datos de la unidad del usuario a partir de resource del token de respuesta.
  * Sólo se puede obtener el código de la unidad a partir de este dato para que se cumpla el estándar.
  */
  getUnit(): string;
  /**
  * Método que obtiene datos del área del usuario a partir de resource del token de respuesta.
  * Sólo se puede obtener el código del centro a partir de este dato para que se cumpla el estándar.
  */
  getArea(): string;
  /**
   * Método que obtiene la descripción del rol del objeto 'role' en idTokenParsed.
   *
   */
  getDisplayRole(): string;
  /**
   * Método que obtiene la descripción del centro del objeto center del token de respuesta.
   */
  getDisplayCenter(): string;
  /**
   * Método que obtiene la descripción de la unidad médica del objeto unit del token de respuesta.
   */
  getDisplayUnit(): string;
  /**
   * Método que obtiene el alias/abreviatura del centro del objeto center del token de respuesta.
   */
  getAlias(): string;
  getUrlVuelta(): string;
  getPatientBirthday(): string;
  getPatientGender(): string;
  getLastLogin(): string;
  /**
   * Método que devuelve si mostramos la ventana Standalone o integrada en el Desketop
   */
  hasStandaloneHeader(): boolean;
  /**
   * Método que devuelve si hemos sido invocados pasando un paciente y el codigo que la aplicacion que nos llama
   */
  isPatientLogged(): string[];
  private testHeader();
}
