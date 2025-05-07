import { Element } from './element.bean';
import { Comparable } from '../../interface/comparable.bean';
import { Coding } from './coding.bean';

/**
 * Clase que modela el tipo CodeableConcept de FHIR
 * @version 2
 */
export class CodeableConcept extends Element implements Comparable {
  coding: Coding[] = [];
  text: string = '';

  constructor(obj?: any) {
    super();
    if (obj) {
      this.text = obj.text || '';
      this.coding = (obj.coding || []).map((c: any) => new Coding());
    }
  }

  equals(e: CodeableConcept): boolean {
    if (!e) return false;
    if (this.text !== e.text) return false;

    if ((this.coding?.length || 0) !== (e.coding?.length || 0)) return false;

    return this.coding.every((c, i) => c.equals(e.coding[i]));
  }
}


