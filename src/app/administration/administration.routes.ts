
import { Routes } from '@angular/router';
import { AdministratorService } from '../service/administrator.service';
import { AdministrationComponent } from './administration.component';

import { AdministrationTemplateComponent } from './components/administration-template/administration-template.component';



/*import { AdministratonTypeComponent } from './components/administration-type/administration-type.component';
import { AdministrationDefaultComponent } from './components/administration-default/administration-default.component';
import { AdministrationCatalogComponent } from './components/administration-catalog/administration-catalog.component';
import { AdministrationConstantComponent } from './components/administration-constant/administration-constant.component';
import { AdministrationMotPrescriptionComponent } from './components/administration-mot-prescription/administration-mot-prescription.component';
import { AdministrationGroupComponent } from './components/administration-group/administration-group.component';
import { AdministrationSubgroupComponent } from './components/administration-subgroup/administration-subgroup.component';

import { AdministratorConditionComponent } from './components/administration-condition/administration-condition.component';
import { AdministrationRuleComponent } from './components/administration-rule/administration-rule.component';
import { AdministrationServiceComponent } from './components/administration-service/administration-service.component';
import { AdministrationProductComponent } from './components/administration-product/administration-product.component';
import { AdministrationInspectorComponent } from "./components/administration-inspector/administration-inspector.component";
import {
  AdministrationBlockingReasonComponent
} from "./components/administration-blocking-reason/administration-blocking-reason.component";
import {
  AdministrationRenewalJustificationComponent
} from "./components/administration-renewal-justification/administration-renewal-justification.component";
import {AdministrationArticleComponent} from "./components/administration-article/administration-article.component";*/

/** Rutas */
export const administrationRoutes: Routes = [
    {
        path: '',
        component: AdministrationTemplateComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'template' },
          { path: 'template', component: AdministrationTemplateComponent },
        ],
    }
];

/*

canActivate: [AdministratorService],

 { path: 'constant', component: AdministrationConstantComponent },
  { path: 'type', component: AdministratonTypeComponent },
          { path: 'default', component: AdministrationDefaultComponent },
          { path: 'motPresciption', component: AdministrationMotPrescriptionComponent },
          { path: 'group', component: AdministrationGroupComponent },
          { path: 'subgroup', component: AdministrationSubgroupComponent },
           { path: 'condition', component: AdministratorConditionComponent },
          { path: 'rule', component: AdministrationRuleComponent },
          { path: 'service', component: AdministrationServiceComponent },
          { path: 'product', component: AdministrationProductComponent },
          { path: 'inspectors', component: AdministrationInspectorComponent },
          { path: 'blocking-reason', component: AdministrationBlockingReasonComponent },
          { path: 'renewal-justification', component: AdministrationRenewalJustificationComponent },
          { path: 'article', component: AdministrationArticleComponent },
*/
