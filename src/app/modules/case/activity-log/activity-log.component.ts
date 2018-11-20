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
    this.selectedRow = 0;
  }

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

  firstOrders = ["Activity", "Create Date", "User", "Additional Information"];
  secondOrders = ["earlier than", "later than"];
  thirdOrders = ["Ascending", "Descending"];
  selectedAct: ActivityLog;

  public firstList: any;
  public secondList: any;
  public thirdList: any;
  public datePick: any;
  


  selectedRow: number;
  isOpenButtonDisabled: boolean;

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
    alert(this.firstList + " " + this.secondList + " " + this.thirdList + " " + this.datePick);

  }
}
