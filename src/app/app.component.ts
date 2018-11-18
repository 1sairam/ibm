import { Component, OnInit } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { WipBinsService } from './core/services/wip-bins.service';

@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BroadBand Workflow';
  caseId:string;
  caseInfo;

  userInfo = {
    "userName" : "Srinivasarao",
    "id":"ss139t",
    "objid":"268525973"
  };

  ngOnInit(){
   
  }

  constructor(private caseInfoService:CaseInfoService,
              private wipBinsService:WipBinsService){

  }

  getCaseInfo(){
  if(this.caseId ==  null || this.caseId.length <1){
    return;
  }
   this.caseInfo = this.caseInfoService.getCaseInfo(this.caseId); 
  }

  getWIPBins(){
    this.wipBinsService.getWipBinsList(this.userInfo.objid);
  }

  getQueues(){

  }

}
