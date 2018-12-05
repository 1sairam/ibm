import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { WipbinsCaseList } from '../../../core/models/wipbins-case-list';

@Component({
  selector: 'bbw-wipbin-case-list',
  templateUrl: './wipbin-case-list.component.html',
  styleUrls: ['./wipbin-case-list.component.css']
})
export class WipbinCaseListComponent implements OnInit {

  disabledEt:any;
  public firsrList:any = 'All';
  public secondList:any = 'ID';
  public thiredList:any ='Starts with';
  public fourthList:any ='Ascending';

  dataSource = new MatTableDataSource<any>();
  wipBinCase:any;
  
  @Input()
  set dataToDisplay(dataToDisplay:WipbinsCaseList[]){
    this.dataSource.data = dataToDisplay;
    this.wipBinCase = dataToDisplay;
    this.dataSource.paginator = this.paginator;
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  headerInfo: any;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectDrop = ["All", "Case", "Subcase", "RQST", "SOLN", "CR", 'Quote/contact', 'Opportunity'];
  selectDrop2=['ID', 'Condition', 'Age', 'Status', 'Priority', 'Severity', 'Title']
  selectedDrop3=['Starts with','<', '>'];
  selectedDrop4=['Ascending', 'Descending']

  //type pending
  displayedColumns: string[] = ['type', 'idNumber', 'name', 'age', 'condition', 'status', 'priority', 'severity', 'title'];
  
  listButton(){
    
  }
  

}
