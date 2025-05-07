import { Pipe, PipeTransform } from '@angular/core';

/** Pipe para truncar un texto de entrada en función del limite de caracteres que se le indica */

@Pipe({
  name: 'truncateText',
  standalone: true
})

export class TruncatePipe implements PipeTransform {
  /**
   *
   * @param valor valor de la cadena de texto original
   * @param limite límite de caracteres a mostrar
   */
  transform(valor: string, limite: number): string {

    //const limit = parseInt(limite);
    const value = valor ? valor : '';
    return value.length > limite ? value.substring(0, limite) + '...' : value;
  }
}
