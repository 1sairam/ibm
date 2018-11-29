import { NgModule } from '@angular/core';
import { ActivityLogService } from './activity-log.service';
import { CaseInfoService } from './case-info.service';
import { WipBinsService } from './wip-bins.service';
import { CaseCompService } from './case-comp.service';
import { UserInfoService } from './user-info.service';
import { QueuesService } from './queues.service';

@NgModule({
  providers:[
    ActivityLogService,
    CaseInfoService,
    WipBinsService,
    CaseCompService,
    UserInfoService,
    QueuesService,
  ]
})
export class ServicesModule { }
