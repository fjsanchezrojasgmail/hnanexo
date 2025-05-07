import { Element } from './element.bean';
import { Reference } from './reference.bean';
export class Annotation extends Element {
    'authorReference': Reference;
    'authorString': string;
    'time': Date;
    'text': string;
}
