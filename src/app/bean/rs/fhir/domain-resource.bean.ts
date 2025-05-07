import { Extension } from './extension.bean';
import { Narrative } from './narrative.bean';
import { Resource } from './resource.bean';

/**
 * Clase que modela el tipo DomainResource de FHIR
 * @version 2
 */
export class DomainResource extends Resource {
    'text':
        Narrative;

    'contained': Resource[];
    'extension': Extension[];
    'modifierExtension': Extension[];
}
