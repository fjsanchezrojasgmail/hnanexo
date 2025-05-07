import { Element } from './element.bean';
import { Period } from './period.bean';
export class Address extends Element {
    'resourceType': 'Address';
    'use': string;
    'type': string;
    'text': string;
    'line': string[];
    'city': string;
    'district': string;
    'state': string;
    'postalCode': string;
    'country': string;
    'period': Period;
}
