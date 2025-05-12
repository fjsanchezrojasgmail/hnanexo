export class AppConstants {
  // Application Name
  static APP_NAME = 'hnanexo-components';
  static APP_CONFIG = 'assets/config/env.json';
  static APP_NAME_ISQUI = 'isqui';
  static APP_NAME_ISHOS = 'ishos';
  static APP_NAME_HNCAT = 'hncat';
  static APP_NAME_HNAUT = 'hnaut';
  static APP_NAME_HNTRI = 'hntri';
  static APP_NAME_ISURG = 'isurg';
  static APP_NAME_BIDAFARMA = 'bidafarma';
  // Properties service names
  static URL_BASE = 'general.url';
  static URL_ISHOS = 'ishos.url';
  static URL_HNCAT = 'hncat.url';
  static URL_HNAUT = 'hnaut.url';
  static URL_ISPOB = 'ispob.url';
  static URL_ISURG = 'isurg.url';
  static URL_ISQUI = 'isqui.url';
  static URL_HNTRI = 'hntri.url';
  static URL_BIDAFARMA = 'bidafarma.url';
  static PREFIX_CIAS = 'CIAS';
  static TYPE_PRES_PRI_CODE = 'PRI';
  // Código de producto que se añade cuando se añade un producto del gupo sillas (manuales/automáticas)
  static PRODUCT_CODE_REQUIRED_GROUP_WHEELCHAIR = 'SRA 000J';
  // Mapa en el que se van a guardar las fotos de los binarios que se hayan buscado
  static MAP_PHOTO_BINARIES: Map<string, string> = new Map();

  // Valor 'Según presupuesto' para IMF
  static IMF_SP = 'SP';

  // Grupo Sillas de ruedas eléctrica
  static GROUP_PRODUCT_SILL_RUE_EL = 'SILL_RUE_EL';
   // Grupo Sillas de ruedas manual
  static GROUP_PRODUCT_SILL_RUE_MA = 'SILL_RUE_MA';
  // URN CGAI
  static URN_SERMAS_CENTER_CGAI = 'urn:sacyl:center:codes|';
  // URN CGAI identifier
  static URN_SERMAS_CENTER_CGAI_IDN = 'urn:sacyl:center:codes';
  // URN Service code
  static URN_ORG_SERVICE_CODE = 'es.indra.organization.serviceCode|';
  // URN Service identifier
  static URN_ORG_SERVICE_CODE_IDN = 'es.indra.organization.serviceCode';
  static MAP_ID_ALL_UNITS = 'allUnits';
}

/** ACCIONES DE LAS SOLICITUDES [BOTONES WORKLIST - WIDGET]
* - NOTA: las acciones de transicionar y
*         prerequisitos son las marcadas por la maquina de estados
*/
export class FunctionRequestAction {
  static ACTION_DETAIL = 'detail'; // CONSULTAR DETALLE
  static ACTION_CANCEL = 'cancel'; // ANULAR
  static ACTION_COMUNICATION= 'comunication'
  static ACTION_DETAIL_CANCEL = 'detailcancel'; // CONSULTAR Y ANULAR
  static ACTION_EDIT   = 'edit';   // EDITAR
  static ACTION_VALIDATE = 'validate'; // VALIDAR
  static ACTION_BENEFIT = 'benefit'; // SOLICITUD DE PRESTACIÓN
  static ACTION_COMPLETE = 'complete'; // COMPLETAR
  static ACTION_DELETE = 'delete'; // BORRADO DE UNA PRESCRIPCIÓN (que esté en estado 'En elaboración')
  static ACTION_ACCEPT_PRECAUTIONARY_BLOCKING = 'acceptPrecautionaryBlocking'; //ACEPTAR BLOQUEO CAUTELAR
  static ACTION_REJECT_PRECAUTIONARY_BLOCKING = 'rejectPrecautionaryBlocking'; //RECHAZAR BLOQUEO CAUTELAR
  static ACTION_ACCEPT_REJECT_PRECAUTIONARY_BLOCKING = 'acceptRejectPrecautionaryBlocking'; //ACEPTAR / RECHAZAR BLOQUEO CAUTELAR

}

export class ProfileUserHnanexoStatus {

  static ANEXO_MEDICO = 'OH/ORTO_MEDICO';
  static ANEXO_SSCC = 'OH/ANEXO_SSCC';
  static ANEXO_ADMINISTRADOR = 'OH/ORTO_ADMINISTRADOR';
  static ANEXO_INSPECTOR_MEDICO = 'OH/ORTO_INSPECTOR_MEDICO';
  static ANEXO_CONSULTA = 'OH/ORTO_CONSULTA';

}



export class RequestHnanexoStatus {
static PRESCPDTEVALIDACION = 'PRESCPDTEVALIDACION';
static PRESCPDTENUEVAVALIDACION = 'PRESCPDTENUEVAVALIDACION';
static ANULADA = 'ANULADA';
static PRESC_EN_ELABORACION = 'PRESCENELABORACION';
static PRESC_PDTE_DISPENSAR = 'PRESCPDTEDISPENSAR';
static PRESC_PDTE_VISTO_BUENO = 'PRESCPDTEVISTOBUENO';
static PRESC_NO_SACYL = 'PRESCNOSACYL';
static PRESC_DENEGADO_VISTO_BUENO = 'PRESCDENEGADOVISTOBUENO';
static PRESC_ACEPTADO_VISTO_BUENO = 'PRESCACEPTADOVISTOBUENO';
static PRESC_RESERVADA = 'PRESCRESERVADA';
static PRESC_DISPENSADA = 'PRESCDISPENSADA';
static PRESC_BLOQUEO_CAUTELAR = 'PRESCBLOQUEOCAUTELAR';
static ANULADA_BLOQUEO_CAUTELAR = 'ANULADABLOQUEOCAUTELAR';
static BLOQUEO_CAUTELAR_ADMITIDO = 'BLOQUEOCAUTELARADMITIDO';
static BLOQUEO_CAUTELAR_NO_ADMITIDO = 'BLOQUEOCAUTELARNOADMITIDO';
}

export class StatusOfPrescriptions {
static listStatusOfPrescriptions = [
  {
    id: 'draft',
    label: 'title.status.draft',
    value: [
      RequestHnanexoStatus.PRESC_EN_ELABORACION
    ],
    roles: [
      ProfileUserHnanexoStatus.ANEXO_MEDICO
    ]
  },
  {
    id: 'active',
    label: 'title.status.active',
    value: [
      RequestHnanexoStatus.PRESC_PDTE_DISPENSAR,
      RequestHnanexoStatus.PRESC_PDTE_VISTO_BUENO,
      RequestHnanexoStatus.PRESC_NO_SACYL,
      RequestHnanexoStatus.PRESC_RESERVADA,
      RequestHnanexoStatus.PRESCPDTEVALIDACION,
      RequestHnanexoStatus.PRESCPDTENUEVAVALIDACION,
      RequestHnanexoStatus.PRESC_BLOQUEO_CAUTELAR
    ],
    date: 'ge' + StatusOfPrescriptions.formatDate(new Date()),
    roles: [
      ProfileUserHnanexoStatus.ANEXO_MEDICO,
      ProfileUserHnanexoStatus.ANEXO_SSCC,
      ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO
    ]
  },
/*     {
    id: 'activePending',
    label: 'title.status.active.pending',
    value: [
      RequestHnanexoStatus.PRESCPDTEVALIDACION,
      RequestHnanexoStatus.PRESCPDTENUEVAVALIDACION
    ],
    date: 'ge' + StatusOfPrescriptions.formatDate(new Date()),
    roles: [
      ProfileUserHnanexoStatus.ANEXO_MEDICO,
      ProfileUserHnanexoStatus.ANEXO_SSCC,
      ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO
    ]
  }, */
  {
    id: 'noactive',
    label: 'title.status.no.active',
    value: [
      RequestHnanexoStatus.PRESC_DISPENSADA,
      RequestHnanexoStatus.PRESC_DENEGADO_VISTO_BUENO,
      RequestHnanexoStatus.ANULADA,
      RequestHnanexoStatus.ANULADA_BLOQUEO_CAUTELAR,
      RequestHnanexoStatus.PRESC_PDTE_DISPENSAR,
      RequestHnanexoStatus.PRESC_NO_SACYL
    ],
    date: 'lt' + StatusOfPrescriptions.formatDate(new Date()),
    roles: [
      ProfileUserHnanexoStatus.ANEXO_MEDICO,
      ProfileUserHnanexoStatus.ANEXO_SSCC,
      ProfileUserHnanexoStatus.ANEXO_INSPECTOR_MEDICO
    ]
  }
  /* ,{
    id: 'canceled',
    label: 'title.status.canceled',
    value: [
      RequestHnanexoStatus.ANULADA
    ],
    date: null,
    roles: [
      ProfileUserHnanexoStatus.ANEXO_MEDICO,
      ProfileUserHnanexoStatus.ANEXO_SSCC
    ]
  } */
];

/**
* Función formatea una fecha a un string del tipo 'yyyy-MM-dd'
* @param date
*/
static formatDate(date: Date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }

  return [year, month, day].join('-');
}
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
  // Permiso buscador simple integrado con Cibeles
  static HNANEXO_SEARCH_CIBELES_SIMPLE = 'HNANEXO_SEARCH_CIBELES_SIMPLE';
  // Permiso buscador avanzado No integrado con Cibeles
  static HNANEXO_SEARCH_NOCIBELES_ADVANCE = 'HNANEXO_SEARCH_NOCIBELES_ADVANCE';
  // Permiso Consultar Prescripciones
  static HNANEXO_READ_PRESC = 'HNORTO_READ_PRESC';
  // Permiso Crear Prescripciones
  static HNANEXO_CREATE_PRESC = 'HNORTO_CREATE_PRESC';
  // Permiso Modificar Prescripciones Activas
  static HNANEXO_EDIT_PRESC_ACTIVE = 'HNORTO_EDIT_PRESC_ACTIVE';
  // Permiso Anular Prescripciones Activas
  static HNANEXO_ANUL_PRESC_ACTIVE = 'HNORTO_ANUL_PRESC_ACTIVE';
  // Permiso Validar Prescripciones Activas
  static HNANEXO_VALIDATE_PRESC_ACTIVE = 'HNORTO_VALIDATE_PRESC_ACTIVE';
  // Permiso Solicitud de la Prestación
  static HNANEXO_REQUEST_PREST = 'HNANEXO_REQUEST_PREST';
  // Permiso Visualizar prescripciones anuladas
  static HNANEXO_VIEW_PRESC_ANUL = 'HNORTO_VIEW_PRESC_ANUL';
}

export class AnswerIsPrescriberService {
  static ANSWER_IS_PRESCRIPTOR = 'S';
  static ANSWER_ISNOT_PRESCRIPTOR = 'N';
}


export class RequestListHnanexo {
  // Listado de prescripciones VIGENTES (activas y activas ptes. de validación) Y NO VIGENTES
  static REQUEST_LIST_ACTIVE_INACTIVE = 'REQUEST_LIST_ACTIVE_INACTIVE';
}

export class PdfConstant {
  // Constantes
  static PDF_CONFIGURATION: String = 'PdfConfiguration'; // key del mapa del PDf
  static DEVICES_RESOURCES: String = 'DevicesResources'; // key del mapa del PDf
  static PDF_VERSION_PRESCRIPTION: String = 'VersionPrescription'; // key del mapa del PDf
  // key del mapa del PDf que nos indica el cias del último practitioner que haya creado/modificado la prescripción
  static PDF_CIAS: String = 'cias';
}


export class ClaimEmplaza {
  static HABITUAL_COD = 'H';
  static HABITUAL = 'Habitual';
  static DESPLAZADO_COD = 'D';
  static DESPLAZADO = 'Desplazado';
  static TRANSEUNTE_COD = 'T';
  static TRANSEUNTE = 'Transeunte';
}

export class ClaimTipoAportacion {
  static GRATIS_COD = '01';
  static GRATIS = 'GRATIS';
  static NORMAL_COD = '02';
  static NORMAL = 'NORMAL';
  static MUTUALISTA_COD = '03';
  static MUTUALISTA = 'MUTUALISTA';
  static PARAFARMACIA_COD = '04';
  static PARAFARMACIA = 'PARAFARMACIA';
}

export class ClaimInsurance {
  static INSURANCE_SI = 'S';
  static INSURANCE_TIENECOBERTURA = 'tieneCobertura';
  static INSURANCE_COBERTURAAE = 'coberturaAE';
  static INSURANCE_COBERTURAAP = 'coberturaAP';
}

// Límite de caracteres
export class CharacterTruncateLimits {
  static NAME_PRACTITIONER_HEADER = 65;
  static NAME_BANNER_PATIENT = 50;
}

// Clase que contiene las constantes con los valores de los combos
export class ListsDropdownAnexo {
// Valores para el combo de imf
static VALUES_IMF = [
  { label: 'label.combo.default.value', value: null },
  { label: 'label.validation.yes', value: true },
  { label: 'label.validation.no', value: false}
];

// Valores para el combo de lateralidad
static VALUES_LATERALITIES = [
  {label: 'label.adm.table.laterality.apply', value: 'S'},
  {label: 'label.adm.table.laterality.not.apply', value: 'N'},
];

// Valores para el combo de estado
static VALUES_STATES =  [
  { label: 'label.adm.table.all', value: null },
  { label: 'label.adm.table.state.active', value: true },
  { label: 'label.adm.table.state.pasive', value: false }
];

// Valores para el combo justificación
static VALUES_JUSTIFICATIONS =  [
  { label: 'label.adm.table.justification.active', value: 'S' },
  { label: 'label.adm.table.justification.pasive', value: 'N' }
];

// Valores para el combo de tipo de reglas
static VALUES_TYPE_RULE=  [
  { label: 'label.adm.table.type.rule.P', value: 'P' },
  { label: 'label.adm.table.type.rule.S', value: 'S' }
];

// Valores para el combo prescriptor
static VALUES_PRESCRIPTOR =  [
  { label: 'label.adm.table.prescriptor.true', value: 'S' },
  { label: 'label.adm.table.prescriptor.false', value: 'N' }
];

// Valores para el combo restricción
static VALUES_RESTRICTION =  [
  { label: 'label.adm.table.restriction.true', value: 'S' },
  { label: 'label.adm.table.restriction.false', value: 'N' }
];

// Valores para el combo validación
static VALUES_VALIDATION =  [
  { label: 'label.adm.table.prescriptor.true', value: 'S' },
  { label: 'label.adm.table.prescriptor.false', value: 'N' }
];
}

// Clase que contiene los valores constantes para las reglas de negocio de protocolo (RNP) y las de subgrupo (RNS)
export class AllRuleTypes {
  static PROTOCOL_RULE = 'P';
  static SUBGROUP_RULE = 'S';
}

export class JustificationValues {
static JUSTIFICATION_REQUIRED = 'S';
static JUSTIFICATION_NOT_REQUIRED = 'N';
}

export class TypeConditionValues {
static CLINICAL_CONDITION = 'C';
static ADMINISTRATIVE_CONDITION = 'A';
}

export class TypeOrganization {
static TYPE_ORGANIZATION_CENTER = 'Center';
static TYPE_ORGANIZATION_SERVICE = 'Service';
}

export class BundleResponseStatus {
static STATUS_201 = '201 Created';
}

// Se recogen los meses para el cambio de las fechas validityDate y maxActiveDate cuando una prescripción pasa de
// estado 'en elaboración' a prescrita
export class ValidityDatesDraftToCreate {
static VALIDITY_MONTHS_DRAFT_TO_CREATE = '12';
static ACTIVE_MONTHS_DRAFT_TO_CREATE = '24';
}

/**
* Constantes para la Auditoría
*/
export class AtnaRegistrationConstants {
static AUDIT_APP_NAME = 'hnanexo';
static ACTION_CREATE = 'C';
static ACTION_UPDATE = 'U';
static ACTION_DELETE = 'D';
static ACTION_EXECUTE = 'E';
static ACTION_READ = 'R';
static SUBTYPE_CODE_CREATE_DRAFT = 'hnanexo_create_draft_prescription';
static SUBTYPE_CODE_CREATE = 'hnanexo_create_prescription';
static SUBTYPE_CODE_UPDATE = 'hnanexo_update_prescription';
static SUBTYPE_CODE_UPDATE_SSCC = 'hnanexo_update_prescription_SSCC';
static SUBTYPE_CODE_DELETE = 'hnanexo_delete_elaboration_prescription';
static SUBTYPE_CODE_CONSULT = 'hnanexo_consult_prescription';
static SUBTYPE_CODE_CANCEL = 'hnanexo_cancel_prescription';
static SUBTYPE_CODE_CANCEL_ADMIT_BLOCKING = 'hnanexo_cancel_admit_blocking';
static SUBTYPE_CODE_REJECTING_PRECAUTIONARY_BLOCKING = 'hnanexo_rejecting_precautionary_blocking';
static SUBTYPE_CODE_VALIDATE = 'hnanexo_validate_prescription';
static SUBTYPE_CODE_DISCARD_VALIDATE = 'hnanexo_discard_validate_prescription';
static SUBTYPE_DISPLAY_CREATE_DRAFT = 'Create Prescription Draft Application Registration';
static SUBTYPE_DISPLAY_CREATE = 'Create Prescription Application Registration';
static SUBTYPE_DISPLAY_UPDATE = 'Update Prescription Application Registration';
static SUBTYPE_DISPLAY_UPDATE_SSCC = 'Update SSCC Prescription Application Registration';
static SUBTYPE_DISPLAY_DELETE = 'Delete Prescription Elaboration Application Registration';
static SUBTYPE_DISPLAY_CONSULT = 'Consult Prescription Applicaction Registration';
static SUBTYPE_DISPLAY_CANCEL = 'Cancel Prescription Application Registration';
static SUBTYPE_DISPLAY_CANCEL_ADMIT_BLOCKING = 'Cancellation Prescription After Accepting Precautionary Blocking';
static SUBTYPE_DISPLAY_REJECTING_PRECAUTIONARY_BLOCKING = 'Rejecting Precautionary Blocking of prescription';
static SUBTYPE_DISPLAY_VALIDATE = 'Validate Prescription Application Registration';
static SUBTYPE_DISPLAY_DISCARD_VALIDATE = 'Discard Validate Prescription Application Registration';
static IDENTIFIER_CIPA_PATIENT = 'cipa';
static IDENTIFIER_DNI_PATIENT = 'dni';
static IDENTIFIER_PRSID_PATIENT = 'prsid';
static IDENTIFIER_PASSPORT_PATIENT = 'passport';
static IDENTIFIER_NUM_COLEGIADO_PRACTITIONER = 'num_colegiado';
static IDENTIFIER_CIAS_PRACTITIONER = 'cias';
static IDENTIFIER_DNI_PRACTITIONER = 'dni';
static PATH_FHIR = '/fhir';
static APP_SOURCE = 'Prescrip. Ortoprótesis';
static SUBTYPE_CODE_APPROVAL_ACCEPT = 'hnanexo_approval_accept';
static SUBTYPE_CODE_APPROVAL_DENY = 'hnanexo_approval_deny';
static SUBTYPE_DISPLAY_APPROVAL_ACCEPT = 'Approve prescription in approval module';
static SUBTYPE_DISPLAY_APPROVAL_DENY = 'Deny prescription in approval module';
}


export class StatusOfvalidations {
static VALIDITY_PENDING = '1';
static VALIDITY_NEW_PENDING = '2';
static VALIDITY_ACCEPTED = '3';
static VALIDITY_REJECTED = '4';

}



