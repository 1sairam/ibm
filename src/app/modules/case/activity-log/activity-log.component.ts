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
  @Input() caseId: string;

  constructor(private activityLogService: ActivityLogService) {
    this.isOpenButtonDisabled = true;
    this.isDateDisabled=true;
    this.isSelected=true;
    this.selectedRow = 0;
  }
    selectedRow: number;
    isOpenButtonDisabled: boolean;
    isDateDisabled:boolean;
    isSelected:boolean;

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    this.activityLogService.getActivityLogData(this.caseId).subscribe(data=> this.activityLog = this.dataSource.data =data);
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
thirdOrder:string="Descending";
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

  public firstList: any;
  public secondList: any;
  public thirdList: any;
  public datePick: any;
  



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
    //alert(this.firstList + " " + this.secondList + " " + this.thirdList + " " + this.datePick);

  }
}
