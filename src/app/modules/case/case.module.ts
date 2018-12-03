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
import { BrassComponent } from './brass/brass.component';
import { BrassIpLetterComponent } from './brass-ip-letter/brass-ip-letter.component';
import { CommitmentLogComponent } from './commitment-log/commitment-log.component';
import { SelectCommitmentsComponent } from './select-commitments/select-commitments.component';
import { HsiaInfoComponent } from './hsia-info/hsia-info.component';
import { CommHistoryComponent } from './comm-history/comm-history.component';
import {DialogContentExampleDialog} from './case-info/case-info.component';

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
    CaseInfoComponent,
    BrassComponent,
    BrassIpLetterComponent,
    CommitmentLogComponent,
    SelectCommitmentsComponent,
    HsiaInfoComponent,
    CommHistoryComponent,
    DialogContentExampleDialog,
  ],
  entryComponents:[
    CaseInfoComponent,
    ActivityLogComponent,
    MoreInfoComponent,
    BrassComponent,
    BrassIpLetterComponent,
    CommitmentLogComponent,
    SelectCommitmentsComponent,
    HsiaInfoComponent,
    DialogContentExampleDialog,
  ],
  providers:[

  ],
  exports:[
    CaseHostComponent,
  ]
})
export class CaseModule { }
