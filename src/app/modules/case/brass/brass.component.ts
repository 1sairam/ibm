import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BrassResponse } from 'src/app/core/models/brass';
import { BrassService } from '../../../core/services/brass.service';
import { CaseInfoService } from '../../../core/services/case-info.service';
import { CaseInfo } from '../../../core/models/case-info';

@Component({
  selector: 'bbw-brass',
  templateUrl: './brass.component.html',
  styleUrls: ['./brass.component.css']
})
export class BrassComponent implements OnInit,AfterViewInit {
  @Output() changeToComponent = new EventEmitter<number>();

  brassResponse: BrassResponse[] = [];
  caseInfo: CaseInfo;//default


  constructor(private brassService: BrassService,private caseInfoService:CaseInfoService) { 
    this.selectedRow = 0;
  }

  selectedRow: number;


  ngOnInit() {
   this.caseInfo = this.caseInfoService.getSelectedCaseInfo();
  }

  ngAfterViewInit(){
    this.brassService.getBrassResponseData(this.caseInfo.caseId).subscribe(data=> this.brassResponse = this.dataSource.data =data);
    this.dataSource.data = this.brassResponse;
  }

  selectedAct: BrassResponse;

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

}
