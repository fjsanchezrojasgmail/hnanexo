import { DomainResource } from "@oh/hncommons-services/build/bean/rs/fhir/domain-resource.bean";
import { Identifier } from "@oh/hncommons-services/build/bean/rs/fhir/identifier.bean";
import { CodeableConcept } from "@oh/hncommons-services/build/bean/rs/fhir/codeable-concept.bean";
import { Annotation } from "@oh/hncommons-services/build/bean/rs/fhir/annotation.bean";
import { Reference } from "@oh/hncommons-services/build/bean/rs/fhir/reference.bean";
/**
 * Recurso para representa los productos
 * @version 3
 */
export class Device extends DomainResource {

    'identifier': Identifier[];
    'status': string;
    'type': CodeableConcept;
    'note': Annotation[];
    'expirationDate': Date;
    'version': string;
    'model': string;
    'manufacturer': string;
    'patient': Reference;
}
