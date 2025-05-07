import { Extension } from './extension.bean';
import { Element } from './element.bean';
import { Period } from './period.bean';
import { CodeableConcept } from './codeable-concept.bean';
import { Reference } from './reference.bean';
export class BackboneElement extends Element {
    'modifierExtension': Extension[];
    /**
     * Constructor
     * IMPORTANTE: es necesario llamarlo para que sean accesibles los atributos-extensión
     * @param obj {any}
     */
    constructor(obj: any){
      super();
    };
}
export class CareTeamBackboneElement extends Element {
    'role': CodeableConcept;
    'member': Reference;
    'onBehalfOf': Reference;
    'period': Period;
    /**
     * Constructor
     * IMPORTANTE: es necesario llamarlo para que sean accesibles los atributos-extensión
     * @param obj {any}
     */
    constructor(obj: any){
      super();
    };
}
export class TriageMovementBackboneElement extends BackboneElement {
    'codDiscriminador': string;
    'descDiscriminador': string;
    'codConstantes': string;
    'descConstantes': string;
    'valueConstantes': string;
    'fechaHoraMovimiento': Date;
    'codNivelTriage': string;
    'tipoMovimiento': string;
    'codNivelTriagePrevio': string;
    'codProblem': string;
    'descProblema': string;
    'status': string;
    'period': Period;
    'triageUser': string;
    'observaciones': string;
    'descUbicacion': string;
    'descProfesional': string;
    'descArea': string;
    'descUnidad': string;
    /**
     * Constructor
     * IMPORTANTE: es necesario llamarlo para que sean accesibles los atributos-extensión
     * @param obj {any}
     * @param extensions {Extension[]}
     */
    constructor(obj: any, extensions?: Extension[]){
      super(obj);
    };
    initExtensions(extensions: Extension[]): void {

    };
}
