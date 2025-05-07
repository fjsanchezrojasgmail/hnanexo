export interface ICacheHnAnexoDAOService {
  /**
  * Método que devuelve el mapa del recurso determinado
  */
  getListResources(prefix: string): any;
  /**
   * Método que setea el mapa del recurso determinado
   */
  setListResources(_resources: any, prefix: string): void;
}
