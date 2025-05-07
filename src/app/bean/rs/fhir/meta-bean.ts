import { Coding } from './coding.bean';
import { Element } from './element.bean';
/**
 * Clase que modela el tipo Resource de FHIR
 * @version 2
 */
export class Meta extends Element {
    'versionId': string;
    'lastUpdated': Date;
    'profile': string[];
    'security': Coding[];
    'tag': Coding[];
}
