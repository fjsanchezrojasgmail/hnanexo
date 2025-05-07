

import { Animal } from './animal.bean';


import { Identifier } from './identifier.bean';
import { HumanName } from './human-name.bean';
import { ContactPoint } from './contact-point.bean';
import { Address } from './address.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { DomainResource } from './domain-resource.bean';
import { Contact } from './contact.bean';
import { Link } from './link.bean';
import { Communication } from './communication.bean';
export class PatientRS extends DomainResource {
    static EXTENSION_BASE_URL: string;
    static PATIENT_NATIONALITY: string;
    static FATHERS_FAMILY: string;
    static MOTHERS_FAMILY: string;
    static UNKNOWN_AGE: string;
    static VIP_EXTENSION: string;
    static DESC_UNKNOWN_AGE: string;
    static INCOMPLETE_DATA: string;
    static COVERAGE: string;
    static SECONDMENTS: string;
    static EXTENSION_PASSIVE_CAUSE: string;
    static EXTENSION_PASSIVE_DATE: string;
    static EXTENSION_PASSIVE_COMMENT: string;

    'identifier': Identifier[];
    'active': boolean;
    'name': HumanName[];
    'telecom': ContactPoint[];
    'gender': string;
    'birthDate': string | Date;
    'deceasedBoolean': boolean;
    'deceasedDateTime': string;
    'address': Address[];
    'maritalStatus': CodeableConcept;
    'multipleBirthBoolean': boolean;
    'multipleBirthInteger': number;
    'photo': any;
    'contact': Contact[];
    'animal': Animal;
    'communication': Communication[];
    'generalPractitioner': any;
    'managingOrganization': any;
    'link': Link[];
}
