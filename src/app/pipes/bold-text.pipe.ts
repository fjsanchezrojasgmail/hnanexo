import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'boldText' })
export class BoldTextPipe implements PipeTransform {
    transform(text: string, search: string): string {
        if (search && text) {
            const pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            const regex = new RegExp(pattern, 'gi');

            return text.replace(regex, (match) => `<span class="search-bold-Text">${match}</span>`);
        } else {
            return text;
        }
    }
}
