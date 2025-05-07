import { Meta } from "./meta-bean";

/**
 * Clase que modela el tipo Resource de FHIR
 * @version 2
 */
export class Resource {
    'resourceType'?: string;
    'id': string;
    'meta': Meta;
    'implicitRules': string;
    'language': string;
}
