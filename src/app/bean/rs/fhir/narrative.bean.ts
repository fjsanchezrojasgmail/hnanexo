export class Narrative {
  'status': 'generated' | 'extensions' | 'additional' | 'empty';
  'div': string; // XHTML contenido como string (por ejemplo: "<div xmlns='http://www.w3.org/1999/xhtml'>Texto</div>")
}
