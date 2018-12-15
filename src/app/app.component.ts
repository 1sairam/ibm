import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { UserInfoService } from './core/services/user-info.service';
import { CaseCompService } from './core/services/case-comp.service';
import { CaseCompItem } from './core/models/case-comp-item';
import { UserInfo } from './core/models/user-info';
import { Dialog } from './shared/util/dialog';
import { CaseHostComponent } from './modules/case/case-host/case-host.component';

@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(CaseHostComponent) caseHost: CaseHostComponent;
  title = 'BroadBand Workflow';
  caseIdList: string[] = [];
  caseId: string="";
  selectedCaseIndex: number = 0;//default
  selectCase: number;//default
  caseCompList: CaseCompItem[] = [];
  userInfo: UserInfo;

  isLoading=true;
  
  constructor(private caseInfoService: CaseInfoService,
    private dialog : Dialog,
    private caseCompService: CaseCompService,
    private userInfoService: UserInfoService) {
      console.log('construct...');
  }

  ngAfterViewInit(){
    this.isLoading = false;
    console.log('after...');
  }
  ngOnInit() {

    //Intial Load Get user Info ,wipbins and queues data
    console.log('before...');
    this.userInfoService.getUserInfo().subscribe(data => {this.userInfo = data});
    console.log('After...');
    //User data service call to get all data at one shot
    if(this.userInfo == null){
      this.userInfo = {
        loginName: "dev_d_sa",
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
        objid: "268525973",
        userAttuid: "Dummy",
      }
    }
    this.caseCompList = this.caseCompService.getCaseCompList();
  }

  checkNumber(caseId){
    var reg = new RegExp(/^\d+$/);
    return reg.test(caseId);
  }
  getCaseInfo(caseId) {

    console.log(caseId);
    if ((caseId == null || caseId.length < 1)) {
      this.dialog.openDialog('Please Enter Case ID.');
      return;
    }
    if(!this.checkNumber(caseId)){
      this.dialog.openDialog('Invalid Case ID. Please enter valid Case ID');
      return;
    }
    this.isLoading = true;
    let local = false;
    if(local){
      let caseInfo;
      this.caseInfoService.getLocalCaseInfo().then(data => {
        caseInfo = data;
        this.caseInfoService.createCaseInfo(caseId,caseInfo);//for all components
        this.caseIdList.push(caseId);
        this.selectCase = this.caseIdList.length;
        this.selectedCaseIndex = this.selectCase;
        this.isLoading = false;
      });  
    }
    else{
    //Write logic to validate the case and pass case info....
    //this.userInfoService.testSample().then(data => {
    this.caseInfoService.getCaseInfo(caseId).then(data => {
    this.caseIdList.push(caseId);//local to app component
    //select Manually newly created case
    this.selectCase = this.caseIdList.length;
    console.log(this.selectCase + "select case");
    this.caseInfoService.createCaseInfo(caseId,data);//for all components
    this.selectedCaseIndex = this.selectCase;
    this.isLoading = false;
    },
    error =>{
      this.dialog.openDialog('Case ID ('+ caseId +') not found. Please enter valid case ID.');
      console.log("something went wrong.. open model");
      this.isLoading = false;
    }
    );
   }
  }
  
  createCase(){
    //this.getCaseInfo('untitled');
  }

  
  openLogCommitment(){
    this.caseHost.loadComponent(9);
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

  //will be called from child wipbins
  viewCase(caseId){
    console.log(caseId);
  }
}
