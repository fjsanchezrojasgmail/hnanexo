export interface ISharedResourcesFhirDAOService {
  /**
   * Método que verifica si existen o no los recursos compartidos de FHIR que utilizará
   * una aplicación. Si no existe, los creará con el identificador correspondiente según
   * las apps smart sermas.
   */
  verifySharedResourcesFhir(token: Promise<string>, urlFhir: string, daysUpdateResourcesFhir: number, idModule?: string): any;
  /**
   * Método que devuelve las referencias de los recursos FHIR compartidos provenientes del token
   */
  getReferencesSharedResourcesFHIR(token: Promise<string>): any;
}
