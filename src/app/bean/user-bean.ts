export declare enum HNSessionUserScope {
  NA = 0,
  SYSTEM = 1,
  ORGANIZATION = 2,
  CENTER = 3,
  UNIT = 4,
}

export class HNSessionUserDataRS {
  'id': string;
  'login': string;
  'userName': string;
  'accessOptions': AccessOption;
  'role': PropertyUser;
  'center': PropertyUser;
  'organization': PropertyUser;
  'careLine': PropertyUser;
  'unit': PropertyUser;
  'scope': HNSessionUserScope;
  'hnrole': PropertyUser;
  'idPatientLogged': string;
  'aud': string;
  'permissions': Array<string>;
  'hasStandaloneHeader': boolean;
  'birthday': string;
  'gender': string;
  'lastConnection': string;
}

export class AccessOption {
  'id': string;
  'code': string;
  'urlVuelta': string;
}

export class PropertyUser {
  'code': string;
  'display': string;
  'alias': string;
  'scope': string;
  'hcProfessionCode': string;
  'hcProfessionName': string;
  'hcSpecialtyCode': string;
  'hcSpecialtyName': string;
}
