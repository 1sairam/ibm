import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { QueuesCaseList } from '../../../core/models/queues-case-list';

@Component({
  selector: 'bbw-queues-case-list',
  templateUrl: './queues-case-list.component.html',
  styleUrls: ['./queues-case-list.component.css']
})
export class QueuesCaseListComponent implements OnInit {

  @Input()
  wipBinsSideNav:any;
  
    //Type pending..
    displayedColumns: string[] = ['type1', 'idNumber', 'special', 'name', 'age', 'Condition', 'status', 'type', 'priority', 'severity', 'title'];
    dataSource = new MatTableDataSource<any>();
    queuesCase: QueuesCaseList[]=[];
    selectedTyp: QueuesCaseList;
private map= new Map<string, string[]>([
  ['ID',['Starts With','ends With','Contains','Sounds Like']],
  ['Age',['<','>']],
  ['Condition',['Starts With','ends with','Contains','Sounds Like']],
  ['Status',['Starts With','ends With','Contains','Sounds Like']],
  ['Priority',['Starts With','ends With','Contains','Sounds Like']],
  ['Severity',['Starts With','ends With','Contains','Sounds Like']],
  ['Title',['Starts With','ends With','Contains','Sounds Like']],
])
drop2:string="ID";
drop3:string ="Starts With";

get selectDrop2():string[]{
  this.drop3 = this.map.get(this.drop2)[0];
  return Array.from(this.map.keys());
}

get selectedDrop3():string[]{
  let orders = this.map.get(this.drop2);
  return orders;
}
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
  public fourthList: any='Ascending';
  
  selectDrop = ["All", "Case", "Subcase", "RQST", "SOLN", "CR"];
  selectedDrop4 = ["Descending", "Ascending"];



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
  viewCase() {

    console.log(this.selectedRow);
    //alert(this.selectedTyp.age);
  }
  rejectCase() {

    console.log(this.selectedRow);
    //alert(this.selectedTyp.status);
  }
  acceptCase() {

    console.log(this.selectedRow);
    //alert(this.selectedTyp.title);
  }
  listButton() {

   // alert(this.firstList + "...." + this.secondList + "...." + this.thirdList + "...." + this.fourthList);
    // alert(this.panelSirAsc.value)
  }
  listClick() {
    
  }

}
