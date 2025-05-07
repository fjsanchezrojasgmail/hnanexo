import { Pipe, PipeTransform } from '@angular/core';

//Aplica la clase format-text

@Pipe({
  name: 'formatText',
  standalone: true
})
export class FormatTextPipe implements PipeTransform {

  transform(text: string): string {
    if (text) {
      const pattern = text.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      const regex = new RegExp(pattern, 'gi');

      return text.replace(regex, (match) => `<span class="format-text">${match}</span>`);
    } else {
      return '';
    }
  }

}
