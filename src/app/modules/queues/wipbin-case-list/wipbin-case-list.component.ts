import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'bbw-wipbin-case-list',
  templateUrl: './wipbin-case-list.component.html',
  styleUrls: ['./wipbin-case-list.component.css']
})
export class WipbinCaseListComponent implements OnInit {

  public firsrList:any = 'All';
  public secondList:any = 'ID';
  public thiredList:any ='Starts with';
  public fourthList:any ='Ascending';
  
  @Input()
  dataToDisplay: MatTableDataSource<any>;

  constructor() { }

  ngOnInit() {
  }
  selectDrop = ["All", "Case", "Subcase", "RQST", "SOLN", "CR", 'Quote/contact', 'Opportunity'];
  selectDrop2=['ID', 'Condition', 'Age', 'Status', 'Priority', 'Severity', 'Title']
  selectedDrop3=['Starts with','<', '>'];
  selectedDrop4=['Ascending', 'Descending']

  displayedColumns: string[] = ['type', 'id', 'sitename', 'age', 'Condition', 'status', 'priority', 'severity', 'title'];
  dataSource = new MatTableDataSource<any>();
  
  


}
