import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { WipbinsCaseList } from '../../../core/models/wipbins-case-list';

@Component({
  selector: 'bbw-wipbin-case-list',
  templateUrl: './wipbin-case-list.component.html',
  styleUrls: ['./wipbin-case-list.component.css']
})
export class WipbinCaseListComponent implements OnInit {

  @Input()
  wipBinsSideNav:any;
  
  disabledEt:any;
  public firstList:any = 'All';
    // public secondList:any = 'ID';
    // public thiredList:any ='Starts with';
  public fourthList:any ='Ascending';

  public selectedTyp;
  disabledButton=true;
  dataSource = new MatTableDataSource<any>();
  wipBinCase:any;
  selectedRow: number;
//Drop-Downs Values
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
  //clearing the inputs
  
  return Array.from(this.map.keys());
}
get selectedDrop3():string[]{
  let orders = this.map.get(this.drop2);
  return orders;
}
  @Input()
  set dataToDisplay(dataToDisplay:WipbinsCaseList[]){
    this.dataSource.data = dataToDisplay;
    this.wipBinCase = dataToDisplay;
    this.dataSource.paginator = this.paginator;
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  headerInfo: any;

  selectedRowIndex: number = -1;
  setClickedRow(row) {
    this.selectedTyp = row;
    this.disabledButton = false;
  }
  highlight(row) {
    this.selectedRowIndex = row;
    this.disabledButton = false;
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectDrop = ["All", "Case", "Subcase", "RQST", "SOLN", "CR", 'Quote/contact', 'Opportunity'];
  selectedDrop4=['Ascending', 'Descending']

  displayedColumns: string[] = ['type', 'idNumber', 'name', 'age', 'condition', 'status', 'priority', 'severity', 'title'];
  
  listButton(){
    
  }
  openCase(){
    
  }

  dispatchCase(){
    
  }
  

}
