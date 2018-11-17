import { Component } from '@angular/core';
import { ActivityLogService } from './core/services/activity-log.service';

@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'BroadBand Workflow';
  activityLog=[];
  
  constructor(private activityLogService:ActivityLogService){ }

  getActivityLog(){
    this.activityLogService.getActivityLogData("2682296").subscribe(data=> this.activityLog=data ); 
  }



}
