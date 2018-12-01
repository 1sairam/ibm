import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { CommHistory } from '../../../core/models/comm-history';
import { MatTableDataSource } from '@angular/material';
import { CommHistoryService } from '../../../core/services/comm-history.service';
@Component({
  selector: 'bbw-comm-history',
  templateUrl: './comm-history.component.html',
  styleUrls: ['./comm-history.component.css']
})
export class CommHistoryComponent implements OnInit,AfterViewInit {

  @Output() changeToComponent = new EventEmitter<number>();

  @Input() caseId: string;
  
  commHistory: CommHistory[] = [];

  constructor(private commHistoryService: CommHistoryService) {
    this.selectedRow = 0;
   }
   selectedRow: number;

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.commHistoryService.getCommHistoryData().subscribe(data=> this.commHistory = this.dataSource.data =data);
    this.dataSource.data = this.commHistory;
  }

  displayedColumns: string[] = ['Title', 'Scheduled Date', 'Original Date', 'Complete Date','Hold Reason','Offs'];
  dataSource = new MatTableDataSource<any>();

  selectedAct: CommHistory;
  size: number = 0;
  selectedIndex: number = -1;

  setClickedRow(row) {
    this.selectedAct = row;
  }

  gotoMoreInfo(index) {
    this.changeToComponent.emit(index);
  }
}