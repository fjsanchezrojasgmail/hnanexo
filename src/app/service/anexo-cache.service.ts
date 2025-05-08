import { Injectable } from '@angular/core';
import { SermasHNSessionUserDataRS } from '@sacyl/hnanexo-services/build/bean/rs/sermas-user-bean';

@Injectable(
)
export class AnexoCacheService {

  public _sermasLoggedUser: SermasHNSessionUserDataRS | undefined;

  public get sermasLoggedUser(): SermasHNSessionUserDataRS {
    return this._sermasLoggedUser!;
  }

  public set sermasLoggedUser(value: SermasHNSessionUserDataRS) {
    this._sermasLoggedUser = value;
  }

constructor() { }

}
