import { Element } from './element.bean';

export class Period extends Element {
  start?: string;
  end?: string;

  /**
   * Constructor
   * IMPORTANTE: es necesario llamarlo para que sean accesibles los atributos-extensión
   * @param obj {any}
   */
  constructor(obj?: any) {
    super(); // Asegura que se llama al constructor de Element
    if (obj) {
      this.start = obj.start;
      this.end = obj.end;
    }
  }
}
