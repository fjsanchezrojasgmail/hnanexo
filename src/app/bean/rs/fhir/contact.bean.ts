


import { Address } from './address.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { ContactPoint } from './contact-point.bean';
import { HumanName } from './human-name.bean';
import { Element } from './element.bean';

export class Contact extends Element {
    static CONTACT_IDENTIFIER: string;
    'relationship': CodeableConcept[];
    'name': HumanName;
    'telecom': ContactPoint[];
    'address': Address;
    'gender': string;
    'organization': any;
    'period': any;
}
