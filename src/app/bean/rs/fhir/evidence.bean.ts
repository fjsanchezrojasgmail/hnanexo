import { BackboneElement } from './backbone-element.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { Reference } from './reference.bean';
export class Evidence extends BackboneElement {
    'code': CodeableConcept[];
    'detail': Reference[];
}
