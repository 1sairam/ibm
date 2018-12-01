import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbw-select-commitments',
  templateUrl: './select-commitments.component.html',
  styleUrls: ['./select-commitments.component.css']
})
export class SelectCommitmentsComponent implements OnInit {

  selected2:any;
  selected:any;
  dataSource:any;
  displayedColumns;
  SelectCommitments=[];

  constructor() { }

  ngOnInit() {
  }

}
