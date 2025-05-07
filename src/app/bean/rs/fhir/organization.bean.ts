import { Address } from "./address.bean";
import { CodeableConcept } from "./codeable-concept.bean";
import { ContactPoint } from "./contact-point.bean";
import { DomainResource } from "./domain-resource.bean";
import { Extension } from "./extension.bean";
import { Identifier } from "./identifier.bean";
import { Reference } from "./reference.bean";

export class OrganizationRS extends DomainResource {

    'type': CodeableConcept[];
    'name': string;
    'partOf': Reference;
    'active': boolean;
    'identifier': Identifier[];
    'address': Address;
    'telecom': ContactPoint;
}
