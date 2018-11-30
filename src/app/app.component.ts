import { Component, OnInit } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { WipBinsService } from './core/services/wip-bins.service';
import { QueuesService } from './core/services/queues.service';
import { UserInfoService } from './core/services/user-info.service';
import { CaseCompService } from './core/services/case-comp.service';
import { CaseCompItem } from './core/models/case-comp-item';
import { UserInfo } from './core/models/user-info';
import { WipBins } from './core/models/wip-bins';
import { Queues } from './core/models/queues';

@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'BroadBand Workflow';
  caseIdList: string[] = [];
  selectedCaseIndex: number = 0;//default
  selectCase: number;//default
  caseCompList: CaseCompItem[] = [];
  userInfo: UserInfo;
  wipBinsData: WipBins[] = [];
  queuesData: Queues[] = [];

  constructor(private caseInfoService: CaseInfoService,
    private wipBinsService: WipBinsService,
    private queuesService: QueuesService,
    private caseCompService: CaseCompService,
    private userInfoService: UserInfoService) {

  }

  getWipBinsQueuesData(){
    console.log(this.userInfo);
    if(this.wipBinsData.length <= 0) {
      this.wipBinsService.getWipBinsList(this.userInfo.objid).subscribe(data=> this.wipBinsData = data);
      this.queuesService.getQueuesList(this.userInfo.objid).subscribe(data => this.queuesData = data);
    }
  }

  ngOnInit() {
    //Intial Load Get user Info ,wipbins and queues data
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

  getCaseInfo(caseId) {
    console.log(caseId);
    if (caseId == null || caseId.length < 1) {
      return;
    }
    this.caseIdList.push(caseId);//local to app component
    //select Manually newly created case
    this.selectCase = this.caseIdList.length;
    console.log(this.selectCase + "select case");
    this.caseInfoService.createCaseInfo(caseId);//for all components
    this.selectedCaseIndex = this.selectCase;
    //this.caseInfo = this.caseInfoService.getCaseInfo(this.caseId); 
  }
  
  createCase(){
    this.getCaseInfo('untitled');
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

}
