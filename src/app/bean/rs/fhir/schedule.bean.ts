import { Identifier } from './identifier.bean';
import { Reference } from './reference.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { Period } from './period.bean';

export class Schedule {
  resourceType: 'Schedule' = 'Schedule';
  id?: string;
  identifier?: Identifier[];
  active?: boolean;
  serviceCategory?: CodeableConcept[];
  serviceType?: CodeableConcept[];
  specialty?: CodeableConcept[];
  actor?: Reference[];
  planningHorizon?: Period;
  comment?: string;
}
