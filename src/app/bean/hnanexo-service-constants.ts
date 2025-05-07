/**
 * Constantes generales del Service
 */
export class HnanexoServiceConstants {
  static APP_NAME: string;
  static URL_HNGEP_FHIR_RELATIVE: string;
  static URL_HNGEP_REST_RELATIVE: string;
  static APP_CONFIG: string;
  static SERMAS_LOGGED_USER: string;
  static PATIENT_SELECTED: string;
  static PRESCRIPTOR_SERVICE_LOGGED: string;
  static LOGGED_SERVICE_RESTRICTION: string;
  static PATH_VALUE_SET: string;
  static EXIST_DIAGNOSTIC: string;
  static LOGO_SACYL: string;
  static LOGO_JCYL: string;
  static COMMERCIAL_BRAND: string;
}
export class FhirResourceType {
  static MESSAGE_HEADER: string;
  static BUNDLE: string;
  static REQUEST_GROUP: string;
  static IDREQUEST_GROUP: string;
  static ORGANIZATION: string;
  static PRACTITIONER_ROLE: string;
  static PRACTITIONER: string;
  static PATIENT: string;
  static ENCOUNTER: string;
  static DEVICE_REQUEST: string;
  static DEVICE: string;
  static QUESTTIONNAIRERESPONSE: string;
  static CONDITION: string;
  static DEVICES: string;
  static DEVICES_REQUEST: string;
  static OPERATION_OUTCOME: string;
  static BINARY: string;
}
/** Constantes URL RequestGroup **/
export class FhirRequestGroupUrl {
  static URL_PRESCRIPTION_STATUS: string;
  static URL_PRESCRIPTION_TYPE: string;
  static URL_PRESCRIPTION_ATLANTIX: string;
  static URL_PRESCRIPTION_ATLANTIX_CODE: string;
  static URL_PRESCRIPTION_GROUP: string;
  static URL_PRESCRIPTION_VALIDITY: string;
  static URL_REASON_CODE: string;
  static URL_REQUEST_GROUP_TYPE: string;
  static URL_ATLANTIX_NUMBER: string;
  static URL_CLAIM_REQUEST: string;
  static URL_MAX_DRAFT_DATE: string;
  static URL_PRESCRIPTION_ACTIVE: string;
  static URL_REF_CONDITION: string;
  static URL_REF_SERV_PROVIDER: string;
  static URL_ATLANTIX_INVOICE_DATE: string;
  static URL_VALIDATION_REQUIRED: string;
  static URL_REQUIRES_APPROVAL: string;
  static URL_PRECAUTIONARY_BLOCKING: string;
  static URL_BLOCK: string;
  static URL_DISPENSATION_DATE: string;
  static URL_DISPENSING_CENTER: string;
}
/** Constantes RequestGroup Contained **/
export class FhirRequestGroupContained {
  static CONTAINED_SOCIAL_VALUE: string;
  static CONTAINED_RECOMMENDATIONS: string;
  static CONTAINED_FINANCIALCONDITIONS: string;
}
/** Constantes URL Condition */
export class FhirConditionUrl {
  static URL_CONDITION_DIAGNOSIS: string;
}
export class FhirActionUrl {
  static URL_MOTIVE: string;
  static URL_OBSERVATIONS: string;
}
/** Constantes URL Practitioner */
export class FhirPractitionerUrl {
  static URL_PRACTITIONER_CIAS: string;
  static URL_PRACTITIONER_NUM_COLEGIADO: string;
  static URL_PRACTITIONER_DNI: string;
  static URL_PRACTITIONER_CPF: string;
}
/** Constantes URL Practitioner */
export class FhirObservationsUrl {
  static URL_OBSERVATION_ORTHOPEDICS: string;
  static URL_OBSERVATION_SOCIALVALUE: string;
  static OBSERVATION_ORTHOPEDICS: string;
  static OBSERVATION_SOCIALVALUE: string;
  static URL_OBSERVATION_REASON_CANCEL_PRESCRIPTION: string;
  static OBSERVATION_REASON_CANCEL_PRESCRIPTION_ID: string;
}
/** Constantes URL Device */
export class FhirDeviceUrl {
  static URL_DEVICE_GROUP: string;
  static URL_GROUP: string;
  static URL_DEVICE_SUBGROUP: string;
  static URL_SUBGROUP: string;
  static URL_DEVICE_REQUIREVALIDATION: string;
  static URL_DEVICE_INDICATIONS: string;
  static URL_DEVICE_IMF: string;
  static URL_DEVICE_LATERALITY: string;
  static URL_DEVICE_PHOTO: string;
  static URL_DEVICE_TYPE_UDS_PROD: string;
  static URL_DEVICE_PRESCRIBERCHECK: string;
  static URL_DEVICE_REMARKS: string;
  static URL_DEVICE_REPLACEABLE: string;
  static URL_DEVICE_SPECIALPRESCRIPTION: string;
  static URL_DEVICE_INSPECTORAPPROVAL: string;
  static URL_DEVICE_AMOUNT: string;
  static URL_DEVICE_REDUCEDVAT: string;
  static URL_DEVICE_MODIFIABLEAMOUNT: string;
  static URL_DEVICE_MAXIMUMMODIFIABLEIMF: string;
  static URL_DEVICE_USERCONTRIBUTION: string;
  static URL_DEVICE_NUMBERUNITS: string;
  static URL_DEVICE_EXPENSEREIMBURSEMENT: string;
  static URL_DEVICE_RECOVERABLE: string;
  static URL_DEVICE_EYES: string;
  static URL_DEVICE_HEADSET: string;
  static URL_DEVICE_ASSIGNEDSERVICE: string;
  static URL_DEVICE_MONTHDISPENSE: string;
  static URL_DEVICE_COMERCIALBRAND: string;
  static URL_DEVICE_PULLEDAPART: string;
  static URL_DEVICE_TYPEELABORATION: string;
}
/** Constantes URL DeviceRequest */
export class FhirDeviceRequestUrl {
  static URL_DEVICEREQUEST_BODYSITE: string;
  static URL_DEVICEREQUEST_QUANTITY: string;
  static URL_DEVICEREQUEST_REASONREJECTED: string;
  static URL_DEVICEREQUEST_REASONREJECTED_ID: string;
  static URL_DEVICEREQUEST_DATEREJECTED: string;
  static URL_DEVICEREQUEST_DATEREJECTED_ID: string;
  static URL_DEVICEREQUEST_JUSTIFICATION: string;
  static URL_DEVICEREQUEST_IMPROVABLE: string;
}
/** Constantes URL QuestionnaireResponse */
export class FhirQuestionnaireResponseUrl {
  static URL_QUESTTIONNAIRERESPONSE_RULETYPE: string;
  static URL_QUESTTIONNAIRERESPONSE_PRODUCTCONDITION: string;
  static URL_QUESTTIONNAIRERESPONSE_DEFINITION: string;
  static URL_QUESTTIONNAIRERESPONSE_REFERENCE: string;
}
export class FhirRequestElements {
  static URN_UUID: string;
  static ORGANIZATION: string;
  static PATIENT: string;
  static PRACTITIONER: string;
  static PRACTITIONER_ROLE: string;
  static REQUEST_GROUP: string;
  static ENCOUNTER: string;
  static CONDITION: string;
  static DEVICE: string;
  static DEVICE_REQUEST: string;
  static QUESTIONNAIRE_RESPONSE: string;
  static BINARY: string;
}
export class FhirMessageHeaderUrl {
  static URL_SYSTEM: string;
}
export class FhirMessageHeader {
  /** CREACION */
  static REQUEST_CREATE: string;
  /** EDITAR */
  static REQUEST_EDIT: string;
  /** TRANSITAR */
  static REQUEST_UPDATE: string;
  /** CANCELAR */
  static REQUEST_CANCEL: string;
}
export class FhirPatient {
  static DNI_SYSTEM: string;
  static CIPA_SYSTEM: string;
  static PASSPORT_SYSTEM: string;
  static PRSID_SYSTEM: string;
  static NAME_FATHERS_FAMILY: string;
  static NAME_MOTHERS_FAMILY: string;
  static NATIONALITY: string;
  static BASIC_HEALTH_AREA: string;
  static PHARMACY_INDICATOR: string;
  static PATIENT_SITUATION: string;
  static PROVINCE: string;
  static BARCODE: string;
  static PATIENT_DISABILITY: string;
}
export class FhirRequestGroupClaim {
  static URL_CLAIM_RESOURCETYPE: string;
  static URL_CLAIM_ID: string;
  static URL_CLAIM_REQUEST: string;
  static URL_CLAIM_INDICADORFARMACIA: string;
  static URL_CLAIM_INDICADORFARMACIA_COD: string;
  static URL_CLAIM_SUBINDICADORFARMACIA: string;
  static URL_CLAIM_SUBINDICADORFARMACIA_COD: string;
  static URL_CLAIM_TIPOCIUDADANO: string;
  static URL_CLAIM_TIPOCIUDADANO_COD: string;
  static URL_CLAIM_EMPLAZA: string;
  static URL_CLAIM_TIPOAPORTACION: string;
  static URL_CLAIM_ESBAJA: string;
}
export class TypeIdentificationDocument {
  static TYPE_DOCUMENT_CIPA: string;
  static TYPE_DOCUMENT_NIF: string;
  static TYPE_DOCUMENT_PASAPORTE: string;
  static TYPE_DOCUMENT_SNS: string;
  static TYPE_DOCUMENT_NSEGURIDADSOCIAL: string;
  static TYPE_DOCUMENT_IDENTIFICADORMPI: string;
}
export class UrlChannelMirthFindPatient {
  static URL_CIPA: string;
  static URL_NIF: string;
  static URL_PASAPORTE: string;
  static URL_SNS: string;
  static URL_NSEGURIDADSOCIAL: string;
}
export class CacheDropdownLists {
  static TYPE_DROPDOWN_LIST: string;
  static CONDITION_TYPES_DROPDOWN_LIST: string;
  static TYPE_UDS_PROD_DROPDOWN_LIST: string;
  static JUSTIFICATION_FIELD_DROPDOWN_LIST: string;
}
export class HNANEXOResourcesSharedFHIR {
  static FHIR_REFERENCES_SHARED_RESOURCES: string;
  static ORGANIZATION_CENTER_LOGGIN: string;
  static ORGANIZATION_SERVICE_LOGGIN: string;
  static PRACTITIONER_LOGIN: string;
}
export class CatalogValueSetIdentifier {
  static IDENTIFIER_TYPE_UDS_PRODUCT: string;
  static CODE_TYPE_UDS_PRODUCT_FIXED: string;
  static CODE_TYPE_UDS_PRODUCT_VARIABLE: string;
}
export class DeviceTypeUdsProd {
  static CODE_TYPE_UDS_PRODUCT_VARIABLE: string;
  static CODE_TYPE_UDS_PRODUCT_FIXED: string;
  static DEVICE_VALUE_YES_LATERALITY: string;
  static DEVICE_VALUE_NOT_LATERALITY: string;
  static DEVICE_REQUEST_RIGHT_LATERALITY: string;
  static DEVICE_REQUEST_LEFT_LATERALITY: string;
  static DEVICE_REQUEST_BOTHSIDE_LATERALITY: string;
  static INPUT_ONE_VALUE: string;
  static INPUT_TWO_VALUE: string;
  static COMBO_ONE_UNIT: string;
  static COMBO_TWO_UNIT: string;
  static COMBO_FOUR_UNIT: string;
}
