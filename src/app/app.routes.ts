import { Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';

/*export const routes: Routes = [

  { path: 'search-patient', component: SearcherComponent },
  { path: 'info-patient', component: InfoPatientComponent },
  {
    path: 'visado', loadChildren: './visado/visado.module#VisadoModule',
    canActivate: [VisadoService]
  },
  {
    path: 'administrador', loadChildren: './administration/administration.module#AdministrationModule',
    canActivate: [AdministratorService]
  },
  { path: 'unauthorized', component: UnauthorizedComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'search-patient' }
];*/

export const routes: Routes = [
  {
    path: 'administrador', component: AdministrationComponent
  }
]
