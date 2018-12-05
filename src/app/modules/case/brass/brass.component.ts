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

@Component({
  selector: 'bbw-brass',
  templateUrl: './brass.component.html',
  styleUrls: ['./brass.component.css']
})
export class BrassComponent implements OnInit,AfterViewInit {
  @Output() changeToComponent = new EventEmitter<number>();

  fileNameDialogRef: MatDialogRef<SirCreationDialogComponent>;
  basedOnSirResponse:boolean=false;
  activityLog: ActivityLog[] = [];
  caseInfo: CaseInfo;//default
  foods:any[] = [];
  foo


  constructor( private activityLogService: ActivityLogService,private dialogBox : Dialog,private brassService: BrassService,private caseInfoService:CaseInfoService,public dialog: MatDialog) { 
    this.selectedRow = 0;
  }

  selectedRow: number;


  ngOnInit() {
   this.caseInfo = this.caseInfoService.getSelectedCaseInfo();
  }

  ngAfterViewInit(){
    this.activityLogService.getActivityLogData(this.caseInfo.tableCase.objid).subscribe(data=> this.activityLog = this.dataSource.data =data);
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


  createIpMail(index){
    this.changeToComponent.emit(index);
  }
  
  changeComp(index){
    this.changeToComponent.emit(index);
  }
  openDialog(){
   
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
}
