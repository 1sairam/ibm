import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { QueuesCaseList } from '../../../core/models/queues-case-list';

@Component({
  selector: 'bbw-queues-case-list',
  templateUrl: './queues-case-list.component.html',
  styleUrls: ['./queues-case-list.component.css']
})
export class QueuesCaseListComponent implements OnInit {


  ngOnInit() {
  }

  @Input()
  dataToDisplay: MatTableDataSource<any>;

  public firstList: any;
  public secondList: any;
  public thirdList: any;
  public fourthList: any;
  selectDrop = ["All", "Case", "Subcase", "RQST", "SOLN", "CR"];
  selectedDrop = ["ID", "Age", "Type", "Status", "Priority", "Severity", "Title"];
  selectedDrop1 = ["Starts With", "Ends with", "Contains", "Sounds Like"];
  selectedDrop2 = ["Descending", "Ascending"];

  
  displayedColumns: string[] = ['type', 'id', 'special', 'site', 'age', 'Condition', 'status', 'type', 'priority', 'severity', 'title'];
  dataSource = new MatTableDataSource<any>();
  queuesCaseList: QueuesCaseList[] = [];
  queuesCase: QueuesCaseList;
  selectedTyp: QueuesCaseList;

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
