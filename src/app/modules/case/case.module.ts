import { NgModule } from '@angular/core';

import {ActivityLogComponent} from './activity-log/activity-log.component';
import { CaseHostComponent } from './case-host/case-host.component';
import { CaseCompManagerDirective } from '../../core/directives/case-comp-manager.directive';
import { MoreInfoComponent } from './more-info/more-info.component';
import { CaseInfoComponent } from './case-info/case-info.component';

/* Shared OR common external and angular modules */
import { MaterialModule } from '../../shared/modules/material/material.module';
import { AngularModule } from '../../shared/modules/angular/angular.module';
import { RestClientModule } from '../../shared/modules/rest-client/rest-client.module';
import { CdkModule } from '../../shared/modules/cdk/cdk.module';


@NgModule({
  imports: [
    MaterialModule,
    AngularModule,
    RestClientModule,
    CdkModule
  ],
  declarations: [
    ActivityLogComponent,
    CaseHostComponent,
    CaseCompManagerDirective,
    MoreInfoComponent,
    CaseInfoComponent
  ],
  entryComponents:[
    CaseInfoComponent,
    ActivityLogComponent,
    MoreInfoComponent,
    
  ],
  providers:[

  ],
  exports:[
    CaseHostComponent,
  ]
})
export class CaseModule { }
