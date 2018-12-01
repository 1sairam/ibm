import { NgModule } from '@angular/core';
import { ActivityLogService } from './activity-log.service';
import { BrassService } from '../../core/services/brass.service';
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
    BrassService,
    UserInfoService,
    QueuesService,
  ]
})
export class ServicesModule { }
