/**
 * Constantes generales
 */
export class Constants {
  static DEFAULT_DEV_URL: string;
  static APP_NAME_ISQUI: string;
  static APP_NAME_ISHOS: string;
  static APP_NAME_HNCAT: string;
  static APP_NAME_HNAUT: string;
  static APP_NAME_HNTRI: string;
  static APP_NAME_ISURG: string;
  static APP_NAME_BIDAFARMA: string;
  static APP_NAME_HNCONF: string;
  static URL_BASE: string;
  static URL_ISHOS: string;
  static URL_HNCAT: string;
  static URL_HNAUT: string;
  static URL_ISPOB: string;
  static URL_ISURG: string;
  static URL_ISQUI: string;
  static URL_HNTRI: string;
  static URL_HNGEP: string;
  static URL_BIDAFARMA: string;
  static URL_HNCONF: string;
  static URL_HNPREFAC: string;
  static LABEL_DIAGNOSTICO_CATALOGO: string;
  static LABEL_PROCEDIMIENTO_CATALOGO: string;
  static RESULT_PER_PAGE: string;
  static REFRESH_TIME: string;
  static REPORT_UNIT_CATALOG: string;
  static REPORT_TEMPLATE_CATALOG: string;
  static DEFAULT_RESULT_PER_PAGE: number;
  static DAFAULT_REFRESH_TIME: number;
  static SEPARATOR_PARAM_LIST: string;
  static MILISECONDS_DAY: number;
  static URL_ACCOUNT_MANAGER: string;
}
/**
* Constantes auxiliares de parametros
*/
export class ParamsAuxConstants {
  static SELECT_RADIOBUTTON: string;
  static RESET_RADIOBUTTON: string;
  static OPERATOR_AND: string;
}
/**
* Constantes de estructura
*/
export class StructureConstants {
  static TYPE_CENTER: string;
  static TYPE_BUILDING: string;
  static TYPE_FLOOR: string;
  static TYPE_NURSE_CONTROL: string;
  static TYPE_ROOM: string;
  static TYPE_UNIT: string;
  static TYPE_SURGICAL_BLOCK: string;
  static TYPE_OP_ROOM: string;
  static TYPE_BOX: string;
  static TYPE_ROOM_URG: string;
  static TYPE_WAITING_ROOM: string;
  static TYPE_SURGICAL_WAITING_ROOM: string;
  static TYPE_POST_SURGICAL_ROOM: string;
  static SUBTYPE_UNIT_MED: string;
  static SUBTYPE_UNIT_ENF: string;
  static ROLE_NURSE: string;
  static ROLE_DOCTOR: string;
  static ROLE_SUR: string;
  static CARE_LINE_URG: string;
  static CARE_LINE_HOS: string;
  static CARE_LINE_CEX: string;
  static CARE_LINE_PRI: string;
  static CARE_LINE_AP: string;
  static ACTIVE: string;
  static QUERY_STATISTICS: string;
}
export class CatalogConstants {
  static TIPO_DOCUMENTO: string;
  static TIPO_CENTRO: string;
  static TIPO_LINEA_ASISTENCIAL: string;
  static TIPO_CIRUGIA: string;
  static TIPO_LATERALIDAD: string;
  static FECHA_PREINGRESO_DEFECTO: string;
  static MOTIVOS_CANCELACION: string;
  static MOTIVOS_SUSPENSION: string;
  static MOTIVOS_REANUDACION: string;
  static MATERIAL_SANITARIO: string;
  static QUIROFANOTIPOMATERIAL_FUNGIBLE: string;
  static QUIROFANOIMPLANTESPROTESIS: string;
  static TIPODEHERIDA: string;
  static MOTIVOS_ALTA: string;
  static TIPO_PROFESIONAL: string;
  static MOTIVO_INGRESO: string;
  static ORIG_INGRESO: string;
  static TIPO_MATERIALES: string;
  static MOTINHABILITACIONQUI: string;
  static TIPOPROFESIONAL: string;
  static COD_TIPO_CENTRO_EXTERNO: string;
  static COD_TIPO_CENTRO_INTERNO: string;
  static MOTRETRASOINTERVENCIONINICIO: string;
  static MOTRETRASOINTERVENCIONFIN: string;
  static MOTTRASLADO: string;
  static STATUS_EPI_URG: string;
  static SEXO: string;
  static PAIS: string;
  static IDIOMAS: string;
  static USO_CONTACTO: string;
}
export class TypeFreqPeriod {
  static DAYLY: string;
  static WEEKLY: string;
  static MONTHLY: string;
}
export class DaysOfWeek {
  static Mo: string;
  static Tu: string;
  static We: string;
  static Th: string;
  static Fr: string;
  static Sa: string;
  static Su: string;
}
/**
* Constantes relativas al servicio de parámetros de configuración: {{urlbase}}/isqui/fhir/rest/ConfigParamListRS/GENERAL
*/
export class ConfigParamConstants {
  static ID_CATALOG_DIAGNOSES: string;
  static ID_CATALOG_PROCEDURES: string;
  static ID_START_DELAY: string;
  static ID_END_DELAY: string;
  static ID_INTEGRATION_ISHOS: string;
  static ID_INTEGRATION_ISURG: string;
  static ID_DIAGNOSES_FREE_TEXT_ALLOWED: string;
  static ID_DIAGNOSES_FREE_TEXT_BY_DEFAULT: string;
  static ID_PROCEDURES_FREE_TEXT_ALLOWED: string;
  static ID_PROCEDURES_FREE_TEXT_BY_DEFAULT: string;
  static ID_TEAM_ROLES: string;
}
export class ReportConstants {
  static CAT_CODE: string;
  static CAT_VERSION: string;
}
/**
* Constantes para definir las opciones de selección de elementos de un datatable
*/
export class DatatableItemSelectorConstants {
  static PAGE: string;
  static ALL: string;
  static NONE: string;
  static SOME: string;
}
/**
* Constantes para definir los operadores de búsqueda por varios items
*/
export class SearchOperatorConstants {
  static AND: string;
  static OR: string;
}
export class FormatConstants {
  static JSON: string;
  static XML: string;
  static PATCH_JSON: string;
}
export class PatchOperationConstants {
  static ADD: string;
  static REMOVE: string;
  static REPLACE: string;
}
