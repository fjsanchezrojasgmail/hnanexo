import { HNSessionUserDataRS } from "../../user-bean";

export class SermasHNSessionUserDataRS extends HNSessionUserDataRS {
    'cias': string;
    'cpf': string;
    'identificador': string;
    'num_colegiado': string;
    datos_login?: string;
    codProvincia: any;
    constructor(hnUserData: HNSessionUserDataRS){
      super();
    };
}
