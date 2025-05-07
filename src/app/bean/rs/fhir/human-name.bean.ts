import { Element } from './element.bean';
import { Period } from './period.bean';

export class HumanName extends Element {
    'resourceType': 'HumanName';
    'use': string;
    'text': string;
    'family': string;
    'given': string[];
    'prefix': string[];
    'suffix': string[];
    'period': Period;
}
