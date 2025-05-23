import { Injectable } from '@angular/core';
import { State } from '../../../beans/state.bean';
import { ComponentMessages } from '../../../../bean/i18n-bean';
import { GenericRS } from '../../../beans/genericRS.bean';
import { AdmGenericHnAnexoDAOService } from '../../../../service/dao/adm-generic-hnanexo-dao.service'




@Injectable({providedIn: 'root'})
export class AdmListComponentService {

  public componentMessages: ComponentMessages = ComponentMessages.es;
  url: string | undefined;




  public listing: Array<GenericRS> = new Array(); // Datos del listado
  public error: boolean = false; // Booleano que nos dice si existe o no algún error
  public types: Array<State> = new Array(); // Listado de tipos para el combo


  constructor(private daoAdmGeneric: AdmGenericHnAnexoDAOService) {  }

   /** Método de inicialización del componente */
  initComponent(){
     // Nos traemos el listado de todos los grupos
     const item = new GenericRS();
     this.searchItems(item);

     this.listing = this.mockGenericRS;

     // Recuperamos el listado de tipos
     this.checkTypes();
  }

   /**
  * Método que devuelve la lista de grupos
  */

  searchItems(data: GenericRS) {

    this.daoAdmGeneric.searchItems(this.url!, data).subscribe((items: GenericRS[]) => {

     // Si la petición es correcta, seteamos el error a false
     this.error =  false;

     // 1º Reseteamos la lista
     this.listing = [];

     // 2º Miramos que la consulta nos haya traido resultados
     if (items) {

       // 3º Si nos ha traido resultados recorremos la lista y la añadimos a nuestra lista local ya tipada
       items.forEach((data: GenericRS) => {

         const generic = new GenericRS();
         generic.code = data.code;
         generic.description = data.description;
         generic.typeCatalog = data.typeCatalog;
         generic.state = data.state;
         generic.typeProduct = data.typeProduct;
         //group.subgroups = item.subgroups;
         generic.conTipo = data.conTipo;

         this.listing.push(generic);
       });
     }
   }, error => {
     this.error = true;
     console.error(error);
   });




 }
  checkTypes() {

  }



  mockGenericRS: GenericRS[] = [
    {
      'code': 'AXZ',
      'description': 'DescriptionAXZ',
      'typeCatalog': 'catalog-AXZ',
      'state': true,
      'typeProduct': 'product-AXZ',
      'conTipo': true,
    },
    {
      'code': 'RTM',
      'description': 'DescriptionRTM',
      'typeCatalog': 'catalog-RTM',
      'state': true,
      'typeProduct': 'product-RTM',
      'conTipo': true,
    },
    {
      'code': 'YTE',
      'description': 'DescriptionYTE',
      'typeCatalog': 'catalog-YTE',
      'state': true,
      'typeProduct': 'product-YTE',
      'conTipo': true,
    },
    {
      'code': 'PQA',
      'description': 'DescriptionPQA',
      'typeCatalog': 'catalog-PQA',
      'state': true,
      'typeProduct': 'product-PQA',
      'conTipo': true,
    },

  ];

}





/*

import { Injectable, Inject } from '@angular/core';
import { ComponentMessages } from '../../../../../bean/i18n-bean';
import { IAdmGroupHnAnexoDAOService } from '@sacyl/hnanexo-services/build/service/dao/adm-group-hnanexo-dao.interface.service';
import { AdmGroupRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-group.bean';
import { IAdmTypeHnAnexoDAOService } from '@sacyl/hnanexo-services/build/service/dao/adm-type-hnanexo-dao.interface.service';
import { CacheHnAnexoDAOService } from '@sacyl/hnanexo-services/build/service/dao/cache-hnanexo-dao.service';
import { CacheDropdownLists } from '@sacyl/hnanexo-services/build/bean/hnanexo-service-constants';
import { AdmTypeRS } from '@sacyl/hnanexo-services/build/bean/rs/adm-type.bean';
import { ComponentMessages } from '../../../../../../../hnanexo-components/ts/hnanexo-components/bean/i18n-bean';


@Injectable()
export class AdmGroupListVmService {
  public componentMessages: ComponentMessages;
  url: string;

  /*** Atributos de la búsqueda ***/
  /*
  public listing: Array<AdmGroupRS> = new Array(); // Datos del listado
  public error: boolean; // Booleano que nos dice si existe o no algún error
  public types: Array<any> = new Array(); // Listado de tipos para el combo

  constructor(@Inject('IAdmGroupHnAnexoDAOService') private daoAdmGroup: IAdmGroupHnAnexoDAOService,
    @Inject('IAdmTypeHnAnexoDAOService') private daoAdmType: IAdmTypeHnAnexoDAOService,
    @Inject('ICacheHnAnexoDAOService') private daoCache: CacheHnAnexoDAOService) {
    this.componentMessages = ComponentMessages.en;
    const locale = navigator.language;
    if (locale.startsWith('es')) {
      this.componentMessages = ComponentMessages.es;
    }
  }

  /** Método de inicialización del componente */

  /*
  initComponent() {
    // Nos traemos el listado de todos los grupos
    const group = new AdmGroupRS();
    this.searchGroups(group);

    // Recuperamos el listado de tipos
    this.checkTypes();
  }

  /**
  * Método que devuelve la lista de grupos
  */
 /*
  searchGroups(data) {
    this.daoAdmGroup.searchGroups(this.url, data).subscribe(groups => {

      // Si la petición es correcta, seteamos el error a false
      this.error =  false;

      // 1º Reseteamos la lista
      this.listing = [];

      // 2º Miramos que la consulta nos haya traido resultados
      if (groups) {

        // 3º Si nos ha traido resultados recorremos la lista y la añadimos a nuestra lista local ya tipada
        groups.forEach(item => {

          const group = new AdmGroupRS();
          group.code = item.code;
          group.description = item.description;
          group.typeCatalog = item.typeCatalog;
          group.state = item.state;
          group.typeProduct = item.typeProduct;
          group.subgroups = item.subgroups;
          group.conTipo = item.conTipo;

          this.listing.push(group);
        });
      }
    }, error => {
      this.error = true;
      console.error(error);
    });
  }

  /**
   * Método que devuelve la lista de tipos
   */
  /*
  searchTypes(data) {
    this.daoAdmType.searchTypes(this.url, data).subscribe(types => {

      // 1º Reseteamos la lista
      this.types = [];

      // 2º Miramos que la consulta nos haya traido resultados
      if (types) {

        // 3º Guardamos los tipos en la caché
        this.daoCache.setListResources(types, CacheDropdownLists.TYPE_DROPDOWN_LIST);

        // 4º Añadimos el valor por defecto
        this.types.push({ label: this.componentMessages['label.every.options'], value: null });

        // 5º Si nos ha traido resultados recorremos la lista y la añadimos a nuestra lista local
        types.forEach(item => {
          const type = {
            label: item.description,
            value: item.code
          };
          this.types.push(type);
        });
      }
    });
  }

  /**
  * Método que mira si existe la lista de tipos para el combo en caché,
  *  si no existe, la pide a BBDD la cachea y la guarda en local y si existe
  *  la guarda en local directamente
  */
 /*
  checkTypes() {

    // 1º Si no está guardada en caché la recuperamos de BBDD
    if (!this.daoCache.getListResources(CacheDropdownLists.TYPE_DROPDOWN_LIST)) {

      // 2º Nos traemos el listado de todos los tipos activos y lo guardamos en caché
      const type = new AdmTypeRS();
      type.state = true;
      this.searchTypes(type);

    } else {

      // 3º Si los tipos están en caché, los recuperamos y los seteamos
      this.types = new Array();

      // 4º Añadimos el valor por defecto
      this.types.push({ label: this.componentMessages['label.every.options'], value: null });

      // 5º Recorremos la lista de la caché y la vamos añadiendo mapeada a nuestra lista local
      this.daoCache.getListResources(CacheDropdownLists.TYPE_DROPDOWN_LIST).forEach(item => {
        const type = {
          label: item.description,
          value: item.code
        };
        this.types.push(type);
      });
    }
  }


}



*/
