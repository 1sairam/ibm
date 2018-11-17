import { NgModule } from '@angular/core';
import { ActivityLogService } from './activity-log.service';
import { CaseInfoService } from './case-info.service';
import { WipBinsService } from './wip-bins.service';

@NgModule({
  providers:[
    ActivityLogService,
    CaseInfoService,
    WipBinsService,
  ]
})
export class ServicesModule { }
