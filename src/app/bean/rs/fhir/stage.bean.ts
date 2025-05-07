
import { BackboneElement } from './backbone-element.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { Reference } from './reference.bean';
export class Stage extends BackboneElement {
    'summary': CodeableConcept;
    'assessment': Reference[];
}
