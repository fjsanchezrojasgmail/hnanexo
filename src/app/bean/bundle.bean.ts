export declare class Bundle<T> {
  resourceType: 'Bundle';
  id: string;
  meta: any;
  type: string;
  total: number;
  entry: Array<Entry<T>>;
  link: Array<Relation<T>>;
}
export declare class Entry<T> {
  fullUrl: string;
  resource: T;
  search: Search;
  id: string;
  request: {
      method: string;
      url: string;
  };
  response: {
      status: string;
      location: string;
      lastModified: Date;
      outcome: any;
  };
}
export declare class Relation<T> {
  relation: string;
  url: string;
}
export declare class Search {
  static MATCH_GRADE_EXTENSION: string;
  mode: string;
  score: string;
  extension: any;
}
