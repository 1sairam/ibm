import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { ActivityLog } from 'src/app/core/models/activity-log';
import { MatTableDataSource } from '@angular/material';
import { ActivityLogService } from '../../../core/services/activity-log.service';

@Component({
  selector: 'bbw-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit,AfterViewInit {

  @Output() changeToComponent = new EventEmitter<number>();
  activityLog: ActivityLog[] = [];
  @Input() caseInfo: any;

  constructor(private activityLogService: ActivityLogService) {
    this.isOpenButtonDisabled = true;
    this.isDateDisabled=true;
    this.isSelectedRadio=true;
    this.selectedRow = 0;
  }
    selectedRow: number;
    isOpenButtonDisabled: boolean;
    isDateDisabled:boolean;
    isSelectedRadio:boolean;

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.activityLogService.getActivityLogData(this.caseInfo.tableCase.objid).subscribe(data=> this.activityLog = this.dataSource.data =data);
    this.dataSource.data = this.activityLog;
  }

  gotoMoreInfo(index) {
    this.changeToComponent.emit(index);
  }

  displayedColumns: string[] = ['Activity', 'Create Date', 'User', 'Additional Information'];
  dataSource = new MatTableDataSource<any>();

//Drop-Downs Values
private map= new Map<string, string[]>([
  ['Activity',['starts with','ends with','contains','sounds like']],
  ['Create Date',['earlier than','later than']],
  ['User',['starts with','ends with','contains','sounds like']],
  ['Additional Information',['starts with','ends with','contains','sounds like']],
])
firstOrder:string="Create Date";
secondOrder:string ="earlier than";
thirdList:string="Descending";
get firstOrders():string[]{
  this.secondOrder = this.map.get(this.firstOrder)[0];
  return Array.from(this.map.keys());
}
get secondOrders():string[]{
  let orders = this.map.get(this.firstOrder);
  return orders;
}
  thirdOrders = ["Ascending", "Descending"];
  selectedAct: ActivityLog;

  public firstList: any ="";
  public secondList: any="";
  public userInput: any="";
  localTime:any;
  siteTime:any;
  



  isItChecked = true;
  size: number = 0;
  selectedIndex: number = -1;

  setClickedRow(row) {
    this.selectedAct = row;
    this.isOpenButtonDisabled = false;

  }

  openButton() {

    console.log(this.selectedRow);
    alert(this.selectedAct.addnlInfo);
  }
  listClick() {
    this.dataSource.data = [];
    let option = this.firstOrder;
    let subOpt = this.secondOrder;
    let queryInput = this.userInput;
    console.log(this.userInput);
    let sortOpt = this.thirdList;

  this.activityLogService.getActivityLogWithFilter(this.caseInfo.tableCase.objid,option,subOpt,sortOpt,queryInput)
                         .subscribe(data=> this.activityLog = this.dataSource.data =data);
                         this.dataSource.data = this.activityLog;
  }  
}
