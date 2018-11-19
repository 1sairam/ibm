import { Component, OnInit } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { WipBinsService } from './core/services/wip-bins.service';

import { CaseCompService } from './core/services/case-comp.service';
import { CaseCompItem } from './core/models/case-comp-item';
import { CaseInfo } from './core/models/case-info';

@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BroadBand Workflow';
  caseId:string ;
  caseInfo : CaseInfo[]=[];//default
  selectedCaseIndex : number=0;//default
  selectCase : number;//default

  caseCompList: CaseCompItem[];

  constructor(private caseInfoService:CaseInfoService,
    private wipBinsService:WipBinsService,
    private caseCompService:CaseCompService){

  }

  setSelected(index){
    console.log("in set");
    this.selectedCaseIndex = index;
  }

  removeCase(index){
    this.caseInfo.splice(index, 1);
  }

  userInfo = {
    "userName" : "Srinivasarao",
    "id":"ss139t",
    "objid":"268525973",
    "loginName":"dev_d_sa"
  };

  ngOnInit(){
   this.getUserInfo();
   this.caseCompList = this.caseCompService.getCaseCompList();
  }
  
  getUserInfo(){
    //get user info after login
  }

  getCaseInfo(){
  if(this.caseId ==  null || this.caseId.length <1){
    return;
  }
  console.log(this.caseId);
  this.caseInfo.push(new CaseInfo(this.caseId) );
  this.selectCase = this.caseInfo.length;
  //this.caseInfo = this.caseInfoService.getCaseInfo(this.caseId); 
  }

  getWIPBins(){
    this.wipBinsService.getWipBinsList(this.userInfo.objid);
  }

  getQueues(){

  }

}
