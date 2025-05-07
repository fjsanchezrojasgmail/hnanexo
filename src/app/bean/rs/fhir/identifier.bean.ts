import { Extension } from './extension.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { Element } from './element.bean';
import { Period } from './period.bean';
import { Reference } from './reference.bean';
/**
 * Clase que modela el tipo Identifier de FHIR
 */
export class Identifier extends Element {
    'use': string;
    'type': CodeableConcept;
    'system': string;
    'value': string;
    'period': Period;
    'assigner':
        Reference;
}
/**
 * Clase que modela el tipo Identifier de FHIR con información extra para datos del paciente
 */
export declare class IdentifierPatient extends Identifier {
    flgTutor: boolean;
    /**
     * Constructor
     * IMPORTANTE: es necesario llamarlo para que sean accesibles los atributos-extensión
     * @param obj {any}
     * @param extensions {Extension[]}
     */
    constructor(obj: any, extensions?: Extension[]);
    /**
     * Método que inicializa los atributos que están incluidos en las extensiones
     * @param extensions {Extension[]}
     */
    initExtensions(extensions: Extension[]): void;
}
