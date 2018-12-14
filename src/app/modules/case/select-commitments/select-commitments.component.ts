import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { SelectCommitment } from 'src/app/core/models/selectCommitment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { SelectCommitmentService } from '../../../core/services/log-commitment.service';
import { SelectCommitDeleteDialogComponent } from '../../../shared/components/select-commit-delete-dialog/select-commit-delete-dialog.component';

@Component({
  selector: 'bbw-select-commitments',
  templateUrl: './select-commitments.component.html',
  styleUrls: ['./select-commitments.component.css']
})
export class SelectCommitmentsComponent implements OnInit, AfterViewInit {

  @Output() changeToComponent = new EventEmitter<number>();
  @Input() caseInfo: any;

  deleteDialogStatus: boolean = false;
  deleteDialog: boolean = false;
  selectCommitment: SelectCommitment[] = [];
  dataSource = new MatTableDataSource<any>();
  deleteDisabled: boolean;
  dataLength: number;

  selected2: any;
  selected: any;
  SelectCommitments = [];

  constructor(private selectCommitmentService: SelectCommitmentService, public dialog: MatDialog) {
    this.selectedRow = 0;
    this.deleteDisabled = true;
    this.dataLength = 0;
  }
  selectedRow: number;

  changeComp(val){
    this.changeToComponent.emit(val);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.selectCommitmentService.getSelectCommitmentData(this.caseInfo)
      .subscribe(data => this.selectCommitment = this.dataSource.data = data);
       this.dataSource.data = this.selectCommitment;
     }

  // ngAfterViewInit() {
  //   this.selectCommitmentService.getSelectCommitmentData(this.caseInfo.tableCase.objid).subscribe(data => this.selectCommitment = this.dataSource.data = data);
  //   this.dataSource.data = this.selectCommitment;
  // }

  selectedAct: SelectCommitment;
  displayedColumns: string[] = ['Title', 'Warning Date', 'Commit Date', 'Condition', 'Original Date', 'Complete Date', 'Offset'];


  //Drop-Downs Values
private map= new Map<string, string[]>([
  ['Title',['starts with','ends with','contains','sounds like']],
  ['Commit Date',['earlier than','later than']]  
])
firstOrder:string="Commit Date";
secondOrder:string ="earlier than";
thirdList:string="Ascending";
get firstOrders():string[]{
  this.secondOrder = this.map.get(this.firstOrder)[0]; 
  
  return Array.from(this.map.keys());
}
get secondOrders():string[]{
  let orders = this.map.get(this.firstOrder);
  return orders;
}
setDefault(val){
    this.userTextInput = "";
    this.userInput = "";
}
  thirdOrders = ["Ascending", "Descending"];

  public firstList: any ="";
  public secondList: any="";
  public userInput: any="";
  userTextInput:any="";

  listClick() {
    this.dataSource.data = [];
    let option = this.firstOrder;
    let subOpt = this.secondOrder;
    let queryInput = "";
    if(this.firstOrder != 'Commit Date'){
      queryInput = this.userTextInput;
    }else{
      try{ 
      queryInput = this.userInput.getDate() +'/' +(this.userInput.getMonth()+1)+'/'+this.userInput.getFullYear();
      }catch(err){}
    }
    console.log(queryInput);
    let sortOpt = this.thirdList;
    this.selectCommitmentService.getSelectCommitmentWithFilter(this.caseInfo.tableCase.objid,option,subOpt,sortOpt,queryInput)
    .subscribe(data=> this.selectCommitment = this.dataSource.data =data);
    this.dataSource.data = this.selectCommitment;
}  

  //Delete Set Row
  setRow(index, direction?) {
    switch (direction) {
      case 'delete':
        console.log("data source data => ", this.dataSource.data);
        let newdata = this.dataSource.data;
        newdata.splice(this.selectedRow, 1);
        this.dataSource.data = newdata;
        if (this.dataSource.data.length == this.selectedRow) {
          this.selectedRow = this.dataSource.data.length - 1;
          break;
        }
      default:
        this.selectedRow = index;
        break;
    }

  }
  size: number = 0;
  selectedIndex: number = -1;

  //Clicked Row
  setClickedRow(row): void {
    this.selectedAct = row;
    //this.selectedRow = index;
    console.log('Selected row: ', this.selectedRow);
    this.deleteDisabled = false;
  }

  //Delete Table Row
  delete() {
    this.openDialog().subscribe(status => {
      if (status) {

        let deleteRecordId = this.dataSource.data[this.selectedRow].requestforDelete;
        this.selectCommitmentService.deleteRecord(deleteRecordId).subscribe(() => {
          console.log('delete row', this.selectedRow);
          this.setRow(this.selectedRow, 'delete');
          console.log('data length: ', this.dataSource.data.length);
          if (this.dataSource.data.length <= 0) {
            console.log('Disable delete');
            this.deleteDisabled = true;
          }
          this.dataLength = this.dataSource.data.length;
        },
          onError => { console.log("error -unable to delete =>", onError) });

      }
    });
  }

  //Delete Dialog Box
  openDialog(): Observable<boolean> {
    let status: boolean;
    let dialogRef = this.dialog.open(SelectCommitDeleteDialogComponent, {
      width: '380px',
      data: {}
    });
    return dialogRef.afterClosed();
  }
}
