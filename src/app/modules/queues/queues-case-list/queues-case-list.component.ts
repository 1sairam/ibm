import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { QueuesCaseList } from '../../../core/models/queues-case-list';

@Component({
  selector: 'bbw-queues-case-list',
  templateUrl: './queues-case-list.component.html',
  styleUrls: ['./queues-case-list.component.css']
})
export class QueuesCaseListComponent implements OnInit {

    //Type pending..
    displayedColumns: string[] = ['type1', 'idNumber', 'special', 'name', 'age', 'Condition', 'status', 'type', 'priority', 'severity', 'title'];
    dataSource = new MatTableDataSource<any>();
    queuesCase: QueuesCaseList[]=[];
    selectedTyp: QueuesCaseList;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @Input()
  set dataToDisplay(dataToDisplay:QueuesCaseList[]){
    this.dataSource.data = dataToDisplay;
    this.queuesCase = dataToDisplay;
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  headerInfo: any;

  public firstList:any= 'All';
  public secondList: any='ID';
  public thirdList: any='Starts With';
  public fourthList: any='Descending';
  
  selectDrop = ["All", "Case", "Subcase", "RQST", "SOLN", "CR"];
  selectedDrop = ["ID", "Age", "Type", "Status", "Priority", "Severity", "Title"];
  selectedDrop1 = ["Starts With", "Ends with", "Contains", "Sounds Like"];
  selectedDrop2 = ["Descending", "Ascending"];



  selectedRow: number;



  disabledButton = true;
  disabledEt = true;



  constructor() {
    this.disabledButton = true;
    this.selectedRow = 0;
  }
  setClickedRow(row) {
    this.selectedTyp = row;
    this.disabledButton = false;

  }

  selectedRowIndex: number = -1;
  highlight(row) {
    this.selectedRowIndex = row;
    this.disabledButton = false;
  }
  openButton() {

    console.log(this.selectedRow);
    //alert(this.selectedTyp.age);
  }
  openButton1() {

    console.log(this.selectedRow);
    //alert(this.selectedTyp.status);
  }
  openButton2() {

    console.log(this.selectedRow);
    alert(this.selectedTyp.title);
  }
  listButton() {
    console.log('hi Anji');
    alert(this.firstList + "...." + this.secondList + "...." + this.thirdList + "...." + this.fourthList);
    // alert(this.panelSirAsc.value)
  }
  listClick() {
    alert("hi");
  }

}
