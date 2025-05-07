import { PipeTransform, Pipe } from '@angular/core';

/**
 * Pipe de transformación de texto que devuelve un string con la primera letra de la primera palabra
 * en mayúscula y las demas en minúscula
 */

@Pipe({ name: 'lowercaseCharacters',
  standalone: true })

export class LowercaseCharactersPipe implements PipeTransform {
    transform(value: string): string {
        if (value) {
            let arrayPalabras:any[] = value.split(" ");
            let palabrasTransformadas: string = "";
            for (let i = 0; i < arrayPalabras.length; i++) {
                if (arrayPalabras.length === 1) {
                    palabrasTransformadas = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                } else {
                    if (i === 0) {
                        arrayPalabras[i] = arrayPalabras[i].charAt(0).toUpperCase() + arrayPalabras[i].slice(1).toLowerCase();
                    } else {
                        arrayPalabras[i] = arrayPalabras[i].toLowerCase();
                    }
                    if (i == arrayPalabras.length - 1) {
                        palabrasTransformadas = palabrasTransformadas + arrayPalabras[i];
                    } else {
                        palabrasTransformadas = palabrasTransformadas + arrayPalabras[i] + " ";
                    }
                }
            }
            return palabrasTransformadas;
        } else {
            return '';
        }
    }
}
