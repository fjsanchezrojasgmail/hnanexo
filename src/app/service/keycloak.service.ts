export class KeycloakService {
  static getTokenResponse(property: string): any {
    throw new Error('Method not implemented.');
  }
  static auth: any = null;
  static isMocked: boolean = false;
  static defaultRedir: string = '/';
  static appName: string = 'app';
  static requiredExtToken: boolean = false;

  /** Establece el objeto auth (token parseado + extras) manualmente */
  static setAuth(authz: any): void {
    this.auth = authz;
  }

  /** Devuelve el objeto auth */
  static getAuth(): any {
    return this.auth;
  }

  /** Devuelve el token completo (por ejemplo, para headers) */
  static getToken(): Promise<string> {
    return this.auth?.token || '';
  }

  /** Devuelve el idToken parseado */
  static getIdToken(): any {
    return this.auth?.idTokenParsed || {};
  }

  /** Devuelve los roles del usuario */
  static getRoles(): string[] {
    return this.getIdToken()?.roles || [];
  }

  static hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  /** Devuelve permisos, si están definidos */
  static getPermission(): string[] {
    return this.getIdToken()?.permissions || [];
  }

  static hasPermission(permission: string): boolean {
    return this.getPermission().includes(permission);
  }

  /** Devuelve organización (ejemplo personalizado) */
  static getOrganization(): string {
    return this.getIdToken()?.organization || '';
  }

  static getCenter(): string {
    return this.getIdToken()?.resource?.center || '';
  }

  static getUnit(): string {
    return this.getIdToken()?.resource?.unit || '';
  }

  static getArea(): string {
    return this.getIdToken()?.resource?.area || '';
  }

  static getAlias(): string {
    return this.getIdToken()?.resource?.alias || '';
  }

  static getDisplayRole(): string {
    return this.getIdToken()?.displayRole || this.getRoles()[0] || '';
  }

  static getDisplayCenter(): string {
    return this.getIdToken()?.resource?.displayCenter || '';
  }

  static getDisplayUnit(): string {
    return this.getIdToken()?.resource?.displayUnit || '';
  }

  static getUrlVuelta(): string {
    return this.getIdToken()?.urlVuelta || '';
  }

  static getPatientBirthday(): string {
    return this.getIdToken()?.patientBirthday || '';
  }

  static getPatientGender(): string {
    return this.getIdToken()?.patientGender || '';
  }

  static getLastLogin(): string {
    return this.getIdToken()?.lastLogin || '';
  }

  static hasStandaloneHeader(): boolean {
    return this.getIdToken()?.standalone === true;
  }

  static isPatientLogged(): string[] {
    return this.getIdToken()?.loggedPatient || [];
  }

  static logout(): void {
    if (this.isMocked) {
      console.log('Mock logout');
    } else {
      window.location.href = this.defaultRedir;
    }
  }

  static initMock(): void {
    this.isMocked = true;
    this.auth = {
      token: 'fake-token',
      idTokenParsed: {
        preferred_username: 'mockuser',
        roles: ['ROLE_ADMIN'],
        resource: {
          center: '001',
          unit: 'A1',
          area: 'Cardiology',
          alias: 'CAR',
          displayCenter: 'Hospital Central',
          displayUnit: 'Unidad A1'
        },
        displayRole: 'Administrador',
        standalone: true,
        patientGender: 'male',
        patientBirthday: '1990-01-01',
        loggedPatient: ['12345'],
        lastLogin: '2024-05-05T08:00:00Z'
      }
    };
  }
}
