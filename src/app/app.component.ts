import { Component } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { WipBinsService } from './core/services/wip-bins.service';

@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BroadBand Workflow';
  caseId:string;
  caseInfo;

  userInfo = {
    "userName" : "Srinivasarao",
    "id":"ss139t"
  };

  constructor(private caseInfoService:CaseInfoService,
              private wipBinsService:WipBinsService){

  }

  getCaseInfo(){
   this.caseInfo = this.caseInfoService.getCaseInfo(this.caseId); 
  }

  getWIPBins(){
    //getWipBinInfo...
  }

  getQueues(){

  }

}
