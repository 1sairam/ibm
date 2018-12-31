import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { CaseInfoService } from './core/services/case-info.service';
import { UserInfoService } from './core/services/user-info.service';
import { CaseCompService } from './core/services/case-comp.service';
import { CaseCompItem } from './core/models/case-comp-item';
import { UserInfo } from './core/models/user-info';
import { Dialog } from './shared/util/dialog';
import { CaseHostComponent } from './modules/case/case-host/case-host.component';
import { YankCase } from './core/models/yank-case';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { YankCreationDialogComponent } from '../app/modules/dialogs/yank-creation-dialog/yank-creation-dialog.component';
import { DispatchDialogComponent } from '../app/modules/dialogs/dispatch-dialog/dispatch-dialog.component';

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
  basedOnYankResponse:boolean=false;
  dialogRef: MatDialogRef<YankCreationDialogComponent>;
  selectedCaseIndex: number = 0;//default
  selectCase: number;//default
  caseCompList: CaseCompItem[] = [];
  userInfo: UserInfo;
  disableCaseSelectedForAction:boolean=true;

  YabkResponseMessage:YankCase;
  isLoading=true;
  
  constructor(private caseInfoService: CaseInfoService,
    private dialog : Dialog,
    private caseCompService: CaseCompService,
    private userInfoService: UserInfoService, 
    public yankDialog: MatDialog,
    public dispatchDialog:MatDialog) {
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
    let local = true;
    if(local){
      let caseInfo;
      this.caseInfoService.getLocalCaseInfo().then(data => {
        caseInfo = data;
        this.caseInfoService.createCaseInfo(caseId,caseInfo);//for all components
        this.caseIdList.push(caseId);
        this.disableCaseSelectedForAction = false;
        this.selectCase = this.caseIdList.length;
        this.selectedCaseIndex = this.selectCase;
        this.isLoading = false;
      });  
    }
    else{
    //Write logic to validate the case and pass case info....
    //this.userInfoService.testSample().then(data => {
    this.caseInfoService.getCaseInfo(caseId).then(data => {

    if(data == null || data == undefined){
      this.showMessage(caseId);
      return;
    }
    this.disableCaseSelectedForAction = false;
    this.caseIdList.push(caseId);//local to app component
    //select Manually newly created case
    this.selectCase = this.caseIdList.length;
    console.log(this.selectCase + "select case");
    this.caseInfoService.createCaseInfo(caseId,data);//for all components
    this.selectedCaseIndex = this.selectCase;
    this.isLoading = false;
    },
    error =>{
      this.showMessage(caseId);
    }
    );
   }
  }
  
  showMessage(caseId){
    this.dialog.openDialog('Case ID ('+ caseId +') not found. Please enter valid case ID.');
    console.log("something went wrong.. open model");
    this.isLoading = false;
  }
  createCase(){
    //this.getCaseInfo('untitled');
  }

  setWipBindWindowClosed(){
    //set wipbin window closed
  }
  
  openLogCommitment(){
   //this.caseHost.loadComponent(9);
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

  /////Desktop Options START
  openAcceptDialog(){

  }
  openDispatchDialog(){
    
    this.dispatchDialog.open(DispatchDialogComponent, {
      data: this.caseInfoService.getSelectedCaseInfo()
    }).afterClosed().subscribe(data=>{

    });

  }
  openMoveDialog(){
    ///Open move dialog to display wipbins list.
  }
  openAssignDialog(){
    
  }
  openRejectForwardDialog(){

  }
  openYankDialog(){
   
    this.dialogRef=this.yankDialog.open(YankCreationDialogComponent,{
      width: "17%",
      height: "30%",
      //data: this.caseInfo.caseId
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('Refresh the page, case window and wipbin windows...etc');
    }
    );
  }
  /////Desktop Options END

}
