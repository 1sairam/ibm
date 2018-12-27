import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BrassResponse } from 'src/app/core/models/brass';
import { BrassService } from '../../../core/services/brass.service';
import { CaseInfoService } from '../../../core/services/case-info.service';
import { CaseInfo } from '../../../core/models/case-info';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Dialog } from '../../../shared/util/dialog';
import{SirCreationDialogComponent} from '../../../shared/components/sir-creation-dialog/sir-creation-dialog.component';
import { ActivityLogService } from '../../../core/services/activity-log.service';
import { ActivityLog } from '../../../core/models/activity-log';
import {ConfirmDialogComponent} from '../../dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'bbw-brass',
  templateUrl: './brass.component.html',
  styleUrls: ['./brass.component.css']
})
export class BrassComponent implements OnInit,AfterViewInit {

  @Output() changeToComponent = new EventEmitter<number>();

  fileNameDialogRef: MatDialogRef<SirCreationDialogComponent>;
  confirmDialogComponentRef: MatDialogRef<ConfirmDialogComponent>;

  basedOnSirResponse:boolean=false;
  activityLog: ActivityLog[] = [];
  caseInfo: CaseInfo;//default
  foods:any[] = [];
  foo:any;
  isLoading=true;
  

  actionTypes = ["Cancel Order", "Prequalification","Resume Service", "Suspend Service", "Please Specify"];
  ipActionTypes = ["Activate IP", "Reserve IP", "Please Specify"];
  fetchTypes = ["Status", "Charge Code", "Please Specify"];
  //Select by default
  selectedActionType = this.actionTypes[4];
  selectedIpActionType = this.ipActionTypes[2];
  selectedFetchType =this.fetchTypes[2];


  constructor( private activityLogService: ActivityLogService,private dialogBox : Dialog,private brassService: BrassService,private caseInfoService:CaseInfoService,public dialog: MatDialog) { 
    this.selectedRow = 0;
  }

  selectedRow: number;


  ngOnInit() {
   this.isLoading = false;
   this.caseInfo = this.caseInfoService.getSelectedCaseInfo();
  }

  ngAfterViewInit(){
    this.refreshLog();
  }

  refreshLog(){
    this.isLoading = true;
    this.activityLogService.getActivityLogData(this.caseInfo.tableCase.objid).subscribe(data=> {
      this.activityLog = this.dataSource.data =data;
      this.isLoading = false;
    },
    error => {
      this.isLoading = false;
    }
    );
    this.dataSource.data = this.activityLog;
  }

  selectedAct: ActivityLog;

  size: number = 0;
  selectedIndex: number = -1;

  setClickedRow(row) {
    this.selectedAct = row;
  }

  displayedColumns: string[] = ['Activity', 'Create Date', 'User', 'Additional Information'];

  displayedColumns1:string[]=['Last Updated','Status','Notes'];

  dataSource = new MatTableDataSource<any>();
  dataSource1=new MatTableDataSource<any>();
  
  changeComp(){
    console.log('In Change Comp...!');
    this.changeToComponent.emit(4);
  }


  validate(val){
    if(val == "Please Specify"){
      return false;
    }
    return true;
  }

  showDialog(msg){
    this.dialogBox.openDialog(msg);
  }

  confirmUserAction(message){
    return this.dialog.open(ConfirmDialogComponent,{
      width:"400px",
      data: message
    });
  }

  confirmAction(btn){

    switch(btn){
      case 'action':
          if(!this.validate(this.selectedActionType)){
            this.showDialog("Please select an Action Type");
            return;
          }
          this.confirmUserAction('Do you want to send action type "'+this.selectedActionType+'" to be sent to Brass ?').afterClosed().subscribe(action=>{
            if(action == 'Yes'){
                console.log('Yes selected ....');
            }else{
              console.log('No selected ....');
              //Do nothing
            }
          });
          break;
      case 'ipAction':
          if(!this.validate(this.selectedActionType)){
            this.showDialog("Please select Reserve Type");
            return;
          }
          this.confirmUserAction('Do you want to "' + this.selectedIpActionType +'" ?').afterClosed().subscribe(action=>{
            if(action == 'Yes'){
                console.log('Yes selected ....');
            }else{
              console.log('No selected ....');
              //Do nothing
            }
          });
          break;
      case 'fetch':
          if(!this.validate(this.selectedActionType)){
            this.showDialog("Please select Fetch Type");
            return;
          }
          this.confirmUserAction('Do you want to  fetch "' + this.selectedFetchType + '" from Brass ?').afterClosed().subscribe(action=>{
            if(action == 'Yes'){
                console.log('Yes selected ....');
            }else{
              console.log('No selected ....');
              //Do nothing
            }
          });
          break;
    }


  }

  openSIRDialog(){
   
    this.fileNameDialogRef=this.dialog.open(SirCreationDialogComponent,{
      data: this.caseInfo.caseId
    });

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      this.basedOnSirResponse=result;
      if(result){
        this.dialogBox.openDialog("Thank you, Service Instance Request created sucessFully !!");
      }else{
        this.dialogBox.openDialog("Sorry , Service Instance Request not created ");
      }
      console.log('The dialog was closed result'+result);
    });
  }
  additionalInfo(){
    if(this.selectedAct != undefined && this.selectedAct.addInfo != undefined){
    this.dialogBox.openDialog(this.selectedAct.addInfo);
    }
  }
}
