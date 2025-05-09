/*export class KeycloakService {


  static getTokenResponse(property: string): any {
    //throw new Error('Method not implemented.');
    return Promise.resolve(this.fakeToken);
  }
  static auth: any = null;
  static isMocked: boolean = false;
  static defaultRedir: string = '/';
  static appName: string = 'app';
  static requiredExtToken: boolean = false;
  static fakeToken = 'eyJraWQiOiI4OTI0MDgxNDMyMTE3MjQxNzI0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJQcm9mZXNpb25hbCIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sImhucm9sZSI6eyJjb2RlIjoiT0gvRElTUE9SVE9fRVNUQUJMRUNJTUlFTlRPX0RJU1BFTlNBRE9SIiwidGlwb1JvbCI6IjEiLCJkaXNwbGF5IjoiT0gvRElTUE9SVE9fRVNUQUJMRUNJTUlFTlRPX0RJU1BFTlNBRE9SIiwic2NvcGUiOiI0IiwicGVybWlzb0ZhY3QiOiJTIiwidGl0dWxhciI6IlMifSwiaXNzIjoiaHR0cDovL29ydG9zYWN5bC5pbmRyYS5lcy9hdXRoL3JlYWxtcy9obnJvbGUiLCJ0eXAiOiJCZWFyZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJQcm9mZXNpb25hbCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiSE5ESVNQT1JUT19ESVNQRU5TQVRJT04iLCJITkRJU1BPUlRPX09QRU5fSU5WT0lDSU5HIl19LCJhenAiOiJobnJvbGUiLCJhdXRoX3RpbWUiOjE3MDAyMjQ5ODMsInNjb3BlIjoib3BlbmlkIiwiZGF0b3NfbG9naW4iOnsiYXBlbGxpZG8yIjoiQXNvY2lhY2nDs24iLCJhcGVsbGlkbzEiOiJFc3RhYmxlY2ltaWVudG8iLCJ0ZWxlZm9ubyI6Ijk1NjIxMDIzIiwibm9tYnJlIjoiUHJvZmVzaW9uYWwiLCJkbmkiOiI5OTk5OTk5OVIifSwiZXhwIjoxNzAwMjI4NTgzLCJzZXNzaW9uX3N0YXRlIjoiZWZjNjg5OTctMTJmYS00OWE4LTk1YzctZGUxYzEyMTZlYmVkIiwiaWF0IjoxNzAwMjI0OTgzLCJqdGkiOiJhOGVkYzNlNy02MmNmLTQ0YjQtODBkNS00OTRiM2FiYWJhOGIiLCJkbmkiOiI5OTk5OTk5OVIiLCJsYXN0LWxvZ2luIjoiIiwicmVzb3VyY2UiOltdLCJwcmFjdGl0aW9uZXJfaWQiOiJQcm9mZXNpb25hbCIsImdpdmVuX25hbWUiOiJFc3RhYmxlY2ltaWVudG8iLCJub25jZSI6ImVhYWMxYTJiLTZlYWQtNDUyMi04ZmMyLWMxYzFjZGY4MDI3MiIsImF1ZCI6Imh0dHA6Ly9vcnRvc2FjeWwuaW5kcmEuZXMvYXV0aCIsIm5iZiI6MTcwMDIyMTUyMSwibmFtZSI6IkVzdGFibGVjaW1pZW50byBBc29jaWFjacOzbiIsImZhbWlseV9uYW1lIjoiQXNvY2lhY2nDs24ifQ.jcWQ7LQTMQbtpF38QcFJZOtASODZpaghQqmZrrTS6_QRpanTqENaq2s1r2jEM4upLTW9WTR0vDVtUomD24dgA7K6e0mSaULPwLuMKMm7IMxtuofTJBAWYN2NQPxBiozPk18EwbnkVSd2PgToOWfQTlic-HzaBGhMfb4rJhUn5ZXsJ6zFipRysP9X7SdABmSzBoZcxtF3UW24ROvvGAcpyrilH9lsfp6Tm42AUcgRUzvD0rjY0OxbUqTMca9QRWQmsiGLl3z91y4DMbFLFYG2sDr9JrP5N-h9DQJ6_k9eXlqQNlWItT_pMHWf62PnflztooDzbQK1xdh-n5sOhGgzYw';


  /** Establece el objeto auth (token parseado + extras) manualmente */

  /*
  static setAuth(authz: any): void {
    this.auth = authz;
  }

  /** Devuelve el objeto auth */
  /*
  static getAuth(): any {
    return this.auth;
  }

  /** Devuelve el token completo (por ejemplo, para headers) */
  /*
  static getToken(): Promise<string> {
    //return this.auth?.token || '';
    return Promise.resolve(this.fakeToken);
  }

  /** Devuelve el idToken parseado */
  /*
  static getIdToken(): any {
    return this.auth?.idTokenParsed || {};
  }

  /** Devuelve los roles del usuario */
  /*
  static getRoles(): string[] {
    return this.getIdToken()?.roles || [];
  }

  static hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  /** Devuelve permisos, si están definidos */
  /*
  static getPermission(): string[] {
    return this.getIdToken()?.permissions || [];
  }

  static hasPermission(permission: string): boolean {
    return this.getPermission().includes(permission);
  }

  /** Devuelve organización (ejemplo personalizado) */
  /*
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
}*/

export class KeycloakService {
  // Token simulado (HS256). Puedes cambiarlo por uno real o regenerarlo dinámicamente.
  static fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                     'eyJwcmVmZXJyZWRfdXNlcm5hbWUiOiJtb2NrdXNlciIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwicmVzb3VyY2UiOnsicmVzIjoiZXhhbXBsZUNlbnRlciIsInVuaXQiOiJ1bmlkQTEiLCJhcmVhIjoiQ2FyZGlvbG9neSIsImFsaWFzIjoiQ0FSIiwiZGlzcGxheUNlbnRlciI6Ikhvc3BpdGFsIENlbnRyYWwiLCJkaXNwbGF5VW5pdCI6IlVuaWRhIEExIn0sImRpc3BsYXlSb2xlIjoiQWRtaW5pc3RyYWRvciIsInN0YW5kYWxvbmUiOnRydWUsInBhdGllbnRHZW5kZXIiOiJtYWxlIiwicGF0aWVudEJpcnRoZGF5IjoiMTk5MC0wMS0wMSIsImxvZ2dlZFBhdGllbnQiOlsiMTIzNDUiXSwibGFzdExvZ2luIjoiMjAyNC0wNS0wNVQwODowMDowMFoifQ.' +
                     'zfhRCKiVRxg9xxJ63MYdWFT7hqfipPgZ5vchOhID9v8';

  static auth: any = null;
  static isMocked = false;
  static defaultRedir = '/';
  static appName = 'app';
  static requiredExtToken = false;

  /** Inicializa el mock con un token predefinido */
  static initMock(): void {
    this.isMocked = true;
    this.auth = {
      token: this.fakeToken,
      idTokenParsed: JSON.parse(atob(this.fakeToken.split('.')[1]))
    };
  }

  /** Asigna manualmente un objeto auth personalizado */
  static setAuth(authz: any): void {
    this.auth = authz;
  }

  /** Devuelve el objeto auth actual */
  static getAuth(): any {
    return this.auth;
  }

  /** Devuelve el token completo (usado en headers, etc.) */
  static getToken(): Promise<string> {
    return Promise.resolve(this.auth?.token || '');
  }

  /** Devuelve el token parseado (idToken) */
  static getIdToken(): any {
    return this.auth?.idTokenParsed || {};
  }

  /** Funciones de utilidad para obtener información del token */
  static getRoles(): string[] {
    return this.getIdToken()?.roles || [];
  }

  static hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  static getPermission(): string[] {
    return this.getIdToken()?.permissions || [];
  }

  static hasPermission(permission: string): boolean {
    return this.getPermission().includes(permission);
  }

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

  /** Simula logout redirigiendo o limpiando estado */
  static logout(): void {
    if (this.isMocked) {
      console.log('Mock logout');
    } else {
      window.location.href = this.defaultRedir;
    }
  }

  /** Para obtener el token como observable si lo necesitas desde servicios */
  static getTokenResponse(property: string): Promise<any> {
    return Promise.resolve(this.fakeToken);
  }
}

