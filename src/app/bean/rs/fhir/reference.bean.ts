import { Extension } from './extension.bean';
import { Element } from './element.bean';
import { Identifier } from './identifier.bean';

/**
 * Clase que modela el tipo Reference de FHIR
 * @version 2
 */
export class Reference extends Element {
  resourceType: 'Reference' = 'Reference';
  reference?: string;
  display?: string;
  identifier?: Identifier;
  type?: string;

  constructor(obj?: any) {
    super();
    if (obj) {
      this.reference = obj.reference;
      this.display = obj.display;
      this.identifier = obj.identifier;
      this.type = obj.type;
    }
  }
}

/**
 * Clase que modela el tipo Reference de FHIR con información extra para datos de paciente
 */
export class ReferencePatient extends Reference {
  birthDate?: Date;
  codGender?: string;
  descGender?: string;
  flgUnknown?: boolean;
  patientCodUnknownAge?: string;
  patientDsUnknownAge?: string;

  constructor(obj?: any, extensions?: Extension[]) {
    super(obj);
    if (extensions) this.initExtensions(extensions);
  }

  initExtensions(extensions: Extension[]): void {
    for (const ext of extensions) {
      switch (ext.url) {
        case 'birthDate':
          this.birthDate = new Date(ext.valueDate!);
          break;
        case 'codGender':
          this.codGender = ext.valueString;
          break;
        case 'descGender':
          this.descGender = ext.valueString;
          break;
        case 'flgUnknown':
          this.flgUnknown = ext.valueBoolean;
          break;
        case 'patientCodUnknownAge':
          this.patientCodUnknownAge = ext.valueString;
          break;
        case 'patientDsUnknownAge':
          this.patientDsUnknownAge = ext.valueString;
          break;
      }
    }
  }
}

