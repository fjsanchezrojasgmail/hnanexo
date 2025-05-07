import { PipeTransform, Pipe } from '@angular/core';

/**
 * Pipe de transformación de texto que devuelve un string con la primera letra en mayúscula
 * y las demas en minúscula de una palabra o una oración.
 */

@Pipe({ name: 'oneUpperCaseSpecial',
  standalone: true })

export class OneUpperCaseSpecial implements PipeTransform {
    transform(value: string): string {
        if (value) {
            let arrayPalabras:any[] = value.split(" ");
            let palabrasTransformadas: string = "";
            for (let i = 0; i < arrayPalabras.length; i++) {
                if (arrayPalabras[i].indexOf(".") === -1
                        && arrayPalabras[i].indexOf("-") === -1) {
                    arrayPalabras[i] = arrayPalabras[i].charAt(0).toUpperCase() + arrayPalabras[i].slice(1).toLowerCase();
                } else {
                    if (arrayPalabras[i].indexOf(".") > -1){
                        arrayPalabras[i] = arrayPalabras[i].toUpperCase();
                    }
                    else if (arrayPalabras[i].indexOf("-") > -1) {
                        let arrayPalabrasGuion:any[] = arrayPalabras[i].split("-");
                        let palabraTransformadaGuion: string = "";
                        for (let j = 0; j < arrayPalabrasGuion.length; j++) {
                            if (arrayPalabrasGuion[j] != "") {
                                if (j == arrayPalabras.length - 1) {
                                    palabraTransformadaGuion = palabraTransformadaGuion + arrayPalabrasGuion[j].charAt(0).toUpperCase() + arrayPalabrasGuion[j].slice(1).toLowerCase();
                                } else {
                                    if (palabraTransformadaGuion === "") {
                                        palabraTransformadaGuion = palabraTransformadaGuion + arrayPalabrasGuion[j].charAt(0).toUpperCase() + arrayPalabrasGuion[j].slice(1).toLowerCase();
                                    } else {
                                        palabraTransformadaGuion = palabraTransformadaGuion + "-" + arrayPalabrasGuion[j].charAt(0).toUpperCase() + arrayPalabrasGuion[j].slice(1).toLowerCase();
                                    }
                                }
                            }
                        }
                        arrayPalabras[i] = palabraTransformadaGuion;
                    } else {
                        arrayPalabras[i] = arrayPalabras[i].toUpperCase();
                    }
                }
                if (i == arrayPalabras.length - 1) {
                    palabrasTransformadas = palabrasTransformadas + arrayPalabras[i];
                } else {
                    palabrasTransformadas = palabrasTransformadas + arrayPalabras[i] + " ";
                }
            }
            return palabrasTransformadas;
        } else {
            return '';
        }
    }
}
