import { Extension } from "./extension.bean";

/**
 * Clase que modela el tipo Element de FHIR
 * @version 2
 */
export class Element {
    'id': string;
    'extension': Extension[];
}
