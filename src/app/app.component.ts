import { Component, OnInit } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { WipBinsService } from './core/services/wip-bins.service';

import { CaseCompService } from './core/services/case-comp.service';
import { CaseCompItem } from './core/models/case-comp-item';

@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BroadBand Workflow';
  caseId: string;
  caseIdList: string[] = [];
  selectedCaseIndex: number = 0;//default
  selectCase: number;//default
  caseCompList: CaseCompItem[] = [];

  constructor(private caseInfoService: CaseInfoService,
    private wipBinsService: WipBinsService,
    private caseCompService: CaseCompService) {

  }
  ngOnInit() {
    this.getUserInfo();
    this.caseCompList = this.caseCompService.getCaseCompList();
  }

  getUserInfo() {
    //get user info after login
  }

  getCaseInfo() {
    if (this.caseId == null || this.caseId.length < 1) {
      return;
    }
    this.caseIdList.push(this.caseId);//local to app component
    //select Manually newly created case
    this.selectCase = this.caseIdList.length;
    console.log(this.selectCase + "select case");
    this.caseInfoService.createCaseInfo(this.caseId);//for all components
    this.selectedCaseIndex = this.selectCase;
    //this.caseInfo = this.caseInfoService.getCaseInfo(this.caseId); 
  }

  setSelected(index) {
    console.log("selected index : " + index);
    this.selectedCaseIndex = index;
    this.caseInfoService.selectedIndex = index;
    this.selectCase = index;
  }

  removeCase(index) {
    this.caseIdList.splice(index, 1);
    this.caseInfoService.removeCaseInfo(index);
  }


















  getWIPBins() {
    this.wipBinsService.getWipBinsList(this.userInfo.objid);
  }

  getQueues() {

  }

  userInfo = {
    "userName": "Srinivasarao",
    "id": "ss139t",
    "objid": "268525973",
    "loginName": "dev_d_sa"
  };

}
