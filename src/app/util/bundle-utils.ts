




import { PatientRS } from "../bean/rs/fhir/patient.bean";
import { SermasHNSessionUserDataRS } from "../bean/rs/fhir/sermas-user.bean";
import { HNSessionUserDataRS } from "../bean/user-bean";


/**
 * Clase de utilidades para el Bundle de HNANEXO-SERVICES - Request
 */
export class BundleUtil {

    /** Devuelve el DNI/NIF de un paciente */
static getPatientDNI_NIF(patient: PatientRS): string {
  const dni = patient.identifier?.find(id => id.system?.includes('DNI') || id.type?.text?.toLowerCase().includes('dni'));
  return dni?.value || '';
}

/** Devuelve el CIPA de un paciente */
static getPatientCIPA(patient: PatientRS): string {
  const cipa = patient.identifier?.find(id => id.system?.includes('CIPA') || id.type?.text?.toLowerCase().includes('cipa'));
  return cipa?.value || '';
}

/** Devuelve el Pasaporte de un paciente */
static getPatientPASSPORT(patient: PatientRS): string {
  const passport = patient.identifier?.find(id => id.system?.includes('PASAPORTE') || id.type?.text?.toLowerCase().includes('pasaporte'));
  return passport?.value || '';
}

/** Devuelve el nombre completo del paciente */
static getFullPatientName(patient: PatientRS): string {
  const name = patient.name?.[0];
  if (!name) return '';
  return `${name.given?.join(' ') ?? ''} ${name.family ?? ''}`.trim();
}

/** Devuelve el nombre del paciente */
static getPatientName(patient: PatientRS): string {
  const name = patient.name?.[0];
  return name?.given?.[0] ?? '';
}

/** Devuelve el apellido paterno de un paciente */
static getPatientFathersFamilyName(patient: PatientRS): string {
  const ext = patient.name?.[0]?.extension?.find(ext => ext.url === PatientRS.FATHERS_FAMILY);
  return ext?.valueString ?? '';
}

/** Devuelve el apellido materno de un paciente */
static getPatientMothersFamilyName(patient: PatientRS): string {
  const ext = patient.name?.[0]?.extension?.find(ext => ext.url === PatientRS.MOTHERS_FAMILY);
  return ext?.valueString ?? '';
}

/** Devuelve la provincia del paciente si está en la dirección */
static getPatientProvince(patient: PatientRS): string {
  return patient.address?.[0]?.state ?? '';
}

/** Método que devuelve un objeto estandar del Sermas a partir del genérico de HN y la propiedad  que recibe como parámetro (enviada en el token mymed) **/
static getSermasUserFromProperty(HNUserData: HNSessionUserDataRS, datos_login: any): SermasHNSessionUserDataRS{
  return {
  'cias': '',
  'cpf': '',
  'identificador': '',
  'num_colegiado': '',
  'datos_login': datos_login,
  'codProvincia': '',
  /************** */
    'id': HNUserData.id,
    'login': HNUserData.login,
    'userName': HNUserData.userName,
    'accessOptions': HNUserData.accessOptions,
    'role': HNUserData.role,
    'center': HNUserData.center,
    'organization': HNUserData.organization,
    'careLine': HNUserData.careLine,
    'unit': HNUserData.unit,
    'scope': HNUserData.scope,
    'hnrole': HNUserData.hnrole,
    'idPatientLogged': '',
    'aud': '',
    'permissions': [],
    'hasStandaloneHeader': false,
    'birthday': '',
    'gender': '',
    'lastConnection': ''
  }
};

}
