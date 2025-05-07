import { Element } from './element.bean';
import { Quantity } from './quantity.bean';
export class Ratio extends Element {
    'numerator': Quantity;
    'denominator': Quantity;
}
