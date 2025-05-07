import { Element } from './element.bean';
import { Period } from './period.bean';
export class ContactPoint extends Element {
    static EXTENSION_PRACTITIONER_TELECOM_TYPE_DESC: string;
    static SYSTEM_CODE_PHONE: string;
    static SYSTEM_CODE_FAX: string;
    static SYSTEM_CODE_EMAIL: string;
    static SYSTEM_CODE_PAGER: string;
    static SYSTEM_CODE_OTHER: string;
    static USE_CODE_HOME: string;
    static USE_CODE_WORK: string;
    static USE_CODE_TEMP: string;
    static USE_CODE_OLD: string;
    static USE_CODE_MOBILE: string;
    'resourceType': 'ContactPoint';
    'system': string;
    'value': string;
    'use': string;
    'rank': number;
    'period': Period;
}
