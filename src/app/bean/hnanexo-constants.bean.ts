
export class hnanexoConstants {
    // Application Name
    static APP_NAME = 'hnanexo';
    static URL_HNANEXO = 'hnanexo.url';
    static URL_HNCAT= 'hncat.url';
    static APP_CONFIG= 'assets/config/env.json';
    static LAUNCHTOKEN = 'launchToken';
}

/**
 * Constantes para definir los identificadores del paciente que llegan en el launchToken
 */
 export class TokenPatientIdentifiers {
  static URN_PATIENT_CIPA = 'urn:sermas:patient:ids:cipa';
  static URN_PATIENT_NNESP = 'urn:sermas:patient:ids:nif';
  static URN_PATIENT_PRSID = 'urn:sermas:patient:ids:prsId';
}

/**
 * Diagnóstico que van a tener los distintos mensaje de error
 */
 export class ErrorDiagnosticResponse {
  static ERROR_CITIZEN = 'errorCiudadanos'; // ERROR CIPA LARGO O CON CARACTER NO NUMÉRICOS
}

/**
 * Constantes de IDs de parámetros
 */
export class ParamsConstants {

    static ID_FIELD1 = '1';
    static ID_FIELD2 = '2';
    static ID_FIELD3 = '3';
}

export class ProfileUserHnanexoStatus {

    static ANEXO_MEDICO = 'OH/ORTO_MEDICO';
    static ANEXO_SSCC = 'OH/ANEXO_SSCC';
    static ANEXO_ADMINISTRADOR = 'OH/ORTO_ADMINISTRADOR';
    static ANEXO_INSPECTOR_MEDICO = 'OH/ORTO_INSPECTOR_MEDICO';
    static ANEXO_CONSULTA = 'OH/ORTO_CONSULTA';

}

export class AnswerWsAstare {
    static ANSWER_OK = 'OK';
    static ANSWER_NO_EXISTS = '01';
    static ANSWER_OTHER_CIAS = '02';
    static ANSWER_CORRECT = '0';
    static ANSWER_INCORRECT_DATA = '-001';
    static ANSWER_INCORRECT_PERMISSION = '-002';
    static ANSWER_INCORRECT_BD = '-998';
    static ANSWER_INCORRECT_GENERIC = '-999';
}

export class PermissionsProfileUserHnanexo {
    //Permiso buscador simple integrado con Cibeles
    static HNANEXO_SEARCH_CIBELES_SIMPLE = 'HNANEXO_SEARCH_CIBELES_SIMPLE';
    //Permiso buscador avanzado No integrado con Cibeles
    static HNANEXO_SEARCH_NOCIBELES_ADVANCE = 'HNANEXO_SEARCH_NOCIBELES_ADVANCE';
    //Permiso Consultar Prescripciones
    static HNANEXO_READ_PRESC = 'HNORTO_READ_PRESC';
    //Permiso Crear Prescripciones
    static HNANEXO_CREATE_PRESC = 'HNORTO_CREATE_PRESC';
    //Permiso Modificar Prescripciones Activas
    static HNANEXO_EDIT_PRESC_ACTIVE = 'HNORTO_EDIT_PRESC_ACTIVE';
    //Permiso Anular Prescripciones Activas
    static HNANEXO_ANUL_PRESC_ACTIVE = 'HNORTO_ANUL_PRESC_ACTIVE';
    //Permiso Validar Prescripciones Activas
    static HNANEXO_VALIDATE_PRESC_ACTIVE = 'HNORTO_VALIDATE_PRESC_ACTIVE';
    //Permiso Solicitud de la Prestación
    static HNANEXO_REQUEST_PREST = 'HNANEXO_REQUEST_PREST';
    //Permiso Visualizar prescripciones anuladas
    static HNANEXO_VIEW_PRESC_ANUL = 'HNORTO_VIEW_PRESC_ANUL';
}

export class AnswerIsPrescriberService {
    static ANSWER_IS_PRESCRIPTOR = 'S';
    static ANSWER_ISNOT_PRESCRIPTOR = 'N';
}

//Limite de caracteres
export class CharacterTruncateLimits {
  static NAME_PRACTITIONER_HEADER = 65;
  static NAME_BANNER_PATIENT = 50;
}
