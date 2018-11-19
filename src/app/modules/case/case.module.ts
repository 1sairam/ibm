import { NgModule } from '@angular/core';

import {ActivityLogComponent} from './activity-log/activity-log.component';
import { CaseHostComponent } from './case-host/case-host.component';
import { CaseCompManagerDirective } from '../../core/directives/case-comp-manager.directive';
import { MoreInfoComponent } from './more-info/more-info.component';
import { CaseInfoComponent } from './case-info/case-info.component';
@NgModule({
  imports: [
    
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
