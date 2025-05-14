import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ComponentMessages } from '../bean/i18n-bean';
import { AdministrationVmService } from './administration.vm.service';
import { TemplateEntity } from '@angular/compiler';
import { Entity } from './beans/entity.bean';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "../components/menu/menu.component";


@Component({
  selector: 'hnanexo-administration',
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdministrationComponent  implements OnInit{

  // TRADUCCIONES
  locale: string | undefined;
  componentMessages: any = ComponentMessages.en;

  public access = [
    'admin'
  ];

  // Declaración de los items del menú de la izquierda
  public entities: Entity[] | undefined;

  constructor(public vm: AdministrationVmService) {}

  ngOnInit () {
    this.loadEntities();
  }

  loadEntities() {
    this.entities = [
      {
        id: '1',
        label: this.getTraduction(ComponentMessages.es,'label.adm.types'),
        routerLink: ['/administrador/type'],
        icon: 'icon-wheelchair',
        visible: true,
        permissions: []
      },
      {
        id: '2',
        label: this.getTraduction(ComponentMessages.es,'label.adm.groups'),
        routerLink: ['/administrador/group'],
        icon: 'icon-structure-management',
        visible: true,
        permissions: []
      },
      {
        id: '3',
        label: this.getTraduction(ComponentMessages.es,'label.adm.subGroups'),
        routerLink: ['/administrador/subgroup'],
        icon: 'icon-structure-management',
        visible: true,
        permissions: []
      },
      {
        id: '4',
        label: this.getTraduction(ComponentMessages.es,'label.adm.products'),
        routerLink: ['/administrador/product'],
        icon: 'icon-procedimientos',
        visible: true,
        permissions: []
      },
      {
        id: '5',
        label: this.getTraduction(ComponentMessages.es,'label.adm.article'),
        routerLink: ['/administrador/article'],
        icon: 'icon-procedimientos',
        visible: true,
        permissions: []
      },
      {
        id: '6',
        label: this.getTraduction(ComponentMessages.es,'label.adm.conditions'),
        routerLink: ['/administrador/condition'],
        icon: 'icon-condition',
        visible: true,
        permissions: []
      },
      {
        id: '7',
        label: this.getTraduction(ComponentMessages.es,'label.adm.rules'),
        routerLink: ['/administrador/rule'],
        icon: 'icon-escalas',
        visible: true,
        permissions: []
      },
      {
        id: '8',
        label: this.getTraduction(ComponentMessages.es,'label.adm.constants'),
        routerLink: ['/administrador/constant'],
        icon: 'icon-link',
        visible: true,
        permissions: []
      },
      {
        id: '9',
        label: this.getTraduction(ComponentMessages.es,'label.adm.mot.presc'),
        routerLink: ['/administrador/motPresciption'],
        icon: 'icon-traumatological-medical-history',
        visible: true,
        permissions: []
      },
      {
        id: '10',
        label: this.getTraduction(ComponentMessages.es,'label.adm.blocking.reason'),
        routerLink: ['/administrador/blocking-reason'],
        icon: 'icon-traumatological-medical-history',
        visible: true,
        permissions: []
      },
      {
        id: '11',
        label: this.getTraduction(ComponentMessages.es,'label.adm.renewal.justification'),
        routerLink: ['/administrador/renewal-justification'],
        icon: 'icon-traumatological-medical-history',
        visible: true,
        permissions: []
      },
      {
        id: '12',
        label: this.getTraduction(ComponentMessages.es,'label.adm.services'),
        routerLink: ['/administrador/service'],
        icon: 'icon-nurse',
        visible: true,
        permissions: []
      },
      {
        id: '13',
        label: this.getTraduction(ComponentMessages.es,'label.adm.inspectors'),
        routerLink: ['/administrador/inspectors'],
        icon: 'icon-patient',
        visible: true,
        permissions: []
      }
    ];
  }

  getTraduction(messages: { [key: string]: string }, path: string): string {
    return messages[path] || path;
  }

}
