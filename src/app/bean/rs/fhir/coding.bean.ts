import { Element } from './element.bean';
import { Comparable } from '../../interface/comparable.bean';
/**
 * Clase que modela el tipo Coding de FHIR
 * @version 2
 */
export declare class Coding extends Element implements Comparable {
    'system': string;
    'version': string;
    'code': string;
    'display': string;
    'userSelected': boolean;
    equals(e: Coding): boolean;
}
