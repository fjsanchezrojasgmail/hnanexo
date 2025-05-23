import { Table } from 'primeng/table';
import { State } from '../administration/beans/state.bean';

interface ComboItem {
  code?: string;
  value?: string;
  label?: string;
  [key: string]: any;
}

export class AdmUtil {
  /**
   * Devuelve el texto con información del primer y último elemento de la página y el total.
   */
  public static elementsPerPages(dt: Table, textOf: string, paginationTable: number): string {
    const firstElement = (dt.first ?? 0) + 1;
    const lastElement = this.lastElementOfPage(dt, paginationTable);
    const totalRecords = dt.totalRecords ?? 0;
    return `${firstElement}-${lastElement} ${textOf} ${totalRecords}`;
  }

  /**
   * Devuelve el último elemento visible de la tabla en la página actual.
   */
  public static lastElementOfPage(dt: Table, paginationTable: number): number {
    const totalRecords = dt.totalRecords ?? 0;
    const first = dt.first ?? 0;
    let lastElement = first + paginationTable;

    return lastElement > totalRecords ? totalRecords : lastElement;
  }

  /**
   * Dado un valor y una lista, devuelve su etiqueta (label).
   */
  public static getLabelOfValueInCombo(value: string, list: ComboItem[]): string {
    let label: string = '';

    list.forEach(item => {
      if (item.value === value) {
        label = item.label ?? '';
      }
    });

    return label;
  }

  public static getLabelOfValueInStateCombo(value: string, list: State[]): string {

    let label: string = '';
    list.forEach(item => {
      if (item.value) {
        label = item.label ?? '';
      }
    });

    return label;

  }


  /**
   * Busca el índice de un elemento en la lista por su código.
   */
  public static findIndexList(code: string, list: ComboItem[]): number {
    return list.findIndex(item => item.code === code);
  }

  /**
   * Quita de la lista source los elementos presentes en la lista target.
   */
  public static uniqueValuesPickList(source: ComboItem[], target: ComboItem[]): void {
    const targetCodes = new Set(target.map(item => item.code));
    for (let i = source.length - 1; i >= 0; i--) {
      if (targetCodes.has(source[i].code)) {
        source.splice(i, 1);
      }
    }
  }

  /**
   * Quita duplicados de la lista source en base a una propiedad.
   */
  public static avoidValuesDuplicatedPickList<T extends Record<string, any>>(source: T[], property: keyof T): T[] {
    const lookup: Record<string, T> = {};
    for (const item of source) {
      const key = item[property];
      if (typeof key === 'string') {
        lookup[key] = item;
      }
    }
    return Object.values(lookup);
  }
}
