import { DomainResource } from "@oh/hncommons-services/build/bean/rs/fhir/domain-resource.bean";
import { Identifier } from "@oh/hncommons-services/build/bean/rs/fhir/identifier.bean";
import { Reference } from "@oh/hncommons-services/build/bean/rs/fhir/reference.bean";
import { Annotation } from "@oh/hncommons-services/build/bean/rs/fhir/annotation.bean";
import { CodeableConcept } from "@oh/hncommons-services/build/bean/rs/fhir/codeable-concept.bean";
import { Extension } from "@oh/hncommons-services/build/bean/rs/fhir/extension.bean";
/**
 * Agrupador de peticiones que representa la prescripción de productos
 *
 * @version 3
 */
export class RequestGroup extends DomainResource {

    'identifier': Identifier[];
    'status': string;
    'context': Reference;
    'note': Annotation[];
    'reasonCodeableConcept': CodeableConcept;
    'basedOn': Reference;
    'definition': Reference[];
    'subject': Reference;
    'author': Reference;
    'authoredOn': Date;
    'action': [{
        resource: Reference;
        label: string;
        participant: Reference;
        code: CodeableConcept;
        timingDateTime: Date;
        extension: Extension[];
    }];
    'intent': string;
}
