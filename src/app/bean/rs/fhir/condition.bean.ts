import { DomainResource } from './domain-resource.bean';
import { Identifier } from './identifier.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { Reference } from './reference.bean';



import { Stage } from './stage.bean';
import { Evidence } from './evidence.bean';
import { Annotation } from './annotation.bean';
export class Condition extends DomainResource {
    'identifier': Identifier[];
    'clinicalStatus': string;
    'verificationStatus': string;
    'category': CodeableConcept[];
    'severity': CodeableConcept;
    'code': CodeableConcept;
    'bodySite': CodeableConcept[];
    'subject': Reference;
    'context': Reference;
    'onsetDateTime': string;
    'abatementDateTime': string;
    'assertedDate': string;
    'asserter': Reference;
    'stage': Stage;
    'evidence': Evidence[];
    'note': Annotation[];
}
