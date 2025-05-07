import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class DataVMService {

  private _patient: any;
  private _type!: string;

  public get patient(): any {
    return this._patient;
  }
  public set patient(value: any) {
    this._patient = value;
  }

  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }


  patient$: Subject<any>;
  type$: Subject<string>;

  subscriptionPatient: Subscription;
  subscriptionType: Subscription;

  constructor() {
    this.patient$ = new Subject<any>();
    this.type$ = new Subject<string>();
    const self = this;

    this.subscriptionPatient = this.patient$.subscribe(patient => {
      this._patient = patient;
    });

    this.subscriptionType = this.type$.subscribe(type => {
      this._type = type;
    });

  }

}
