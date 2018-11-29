import { Component, OnInit } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { WipBinsService } from './core/services/wip-bins.service';
import { UserInfoService } from './core/services/user-info.service';
import { CaseCompService } from './core/services/case-comp.service';
import { CaseCompItem } from './core/models/case-comp-item';
import { UserInfo } from './core/models/user-info';

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
  userInfo: UserInfo;

  constructor(private caseInfoService: CaseInfoService,
    private wipBinsService: WipBinsService,
    private caseCompService: CaseCompService,
    private userInfoService: UserInfoService) {

  }
  ngOnInit() {
    this.userInfoService.getUserInfo().subscribe(data => this.userInfo = data);
    if(this.userInfo == null){
      this.userInfo = {
        loginName: "Dummy",
        wirelessEmail: "Dummy",
        user2pageClass: "Dummy",
        userAccessIndicator: "Dummy",
        sLoginName: "Dummy",
        agentId: "Dummy",
        status: "Dummy",
        equipId: "Dummy",
        csLic: "Dummy",
        csdeLic: "Dummy",
        cqLic: "Dummy",
        passwdChg: "Dummy",
        lastLogin: "Dummy",
        clfoLic: "Dummy",
        csLicType: "Dummy",
        cqLicType: "Dummy",
        csftsdeLic: "Dummy",
        webLogin: "Dummy",
        sWebLogin: "Dummy",
        submitterInd: "Dummy",
        userAccess2privclass: "Dummy",
        userDefault2wipbin: "Dummy",
        supvrDefault2monitor: "Dummy",
        user2rcConfig: "Dummy",
        user2srvr: "Dummy",
        sfaLic: "Dummy",
        univLic: "Dummy",
        dev: "Dummy",
        locale: "Dummy",
        nodeId: "Dummy",
        offline2privclass: "Dummy",
        csftsLic: "Dummy",
        cqftsLic: "Dummy",
        objid: "Dummy",
        userAttuid: "Dummy",
      }
    }
    this.caseCompList = this.caseCompService.getCaseCompList();
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

}
