import { NgModule } from '@angular/core';
import { ActivityLogService } from './activity-log.service';
import { CaseInfoService } from './case-info.service';
import { WipBinsService } from './wip-bins.service';
import { CaseCompService } from './case-comp.service';

@NgModule({
  providers:[
    ActivityLogService,
    CaseInfoService,
    WipBinsService,
    CaseCompService,
  ]
})
export class ServicesModule { }
