import { DomainResource } from './domain-resource.bean';
import { Identifier } from './identifier.bean';
import { HumanName } from './human-name.bean';
import { ContactPoint } from './contact-point.bean';
import { Address } from './address.bean';
import { CodeableConcept } from './codeable-concept.bean';

export class Practitioner extends DomainResource {
    static EXTENSION_USER_LOGIN: string;
    static EXTENSION_VALID_DATE_FROM: string;
    static EXTENSION_VALID_DATE_TO: string;
    static EXTENSION_USER_PROF_NUMBER: string;
    static EXTENSION_USER_PASSWORD: string;
    static EXTENSION_USER_EXPIRATION_PASSWORD: string;
    static EXTENSION_USER_PASIVE_CAUSE: string;
    static EXTENSION_PRACTITIONER_SCOPE_CODE: string;
    static EXTENSION_PRACTITIONER_IMPLANT: string;
    static EXTENSION_PRACTITIONER_EDITABLE: string;
    static EXTENSION_PRACTITIONER_GENDER_DESC: string;


    identifier: Identifier[] = [];
    active: boolean = false;
    name: HumanName[] = [];
    telecom: ContactPoint[] = [];
    address: Address[]= [];
    gender: string | undefined;
    birthDate: string | undefined ;
    communication: CodeableConcept[] = [];
}
