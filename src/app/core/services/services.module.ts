import { NgModule } from '@angular/core';
import { ActivityLogService } from './activity-log.service';

@NgModule({
  providers:[
    ActivityLogService,
  ]
})
export class ServicesModule { }
