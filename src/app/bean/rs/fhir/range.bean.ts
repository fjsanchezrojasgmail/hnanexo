import { Quantity } from './quantity.bean';
import { Element } from './element.bean';
export class Range extends Element {
    'low': Quantity;
    'high': Quantity;
}
