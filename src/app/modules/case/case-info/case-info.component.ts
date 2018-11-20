import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { CaseInfoService } from '../../../core/services/case-info.service';
import { CaseInfo } from '../../../core/models/case-info';
import { ActivityLogService } from '../../../core/services/activity-log.service';

@Component({
  selector: 'bbw-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  @Output() changeToComponent = new EventEmitter<number>();

  caseInfo: CaseInfo;//default

  constructor(private caseInfoService:CaseInfoService,private activityLogService: ActivityLogService) {

  }

  ngOnInit() {
    this.caseInfo = this.caseInfoService.getSelectedCaseInfo();
    this.activityLogService.getActivityLogData(this.caseInfo.caseId).subscribe(data=> this.caseInfo.activity =data);
    console.log("caseInfo:"+this.caseInfo);
  }

  changeComp(index){
    this.changeToComponent.emit(index);
  }


}
