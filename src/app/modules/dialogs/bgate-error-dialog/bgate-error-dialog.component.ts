import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'bbw-bgate-error-dialog',
  templateUrl: './bgate-error-dialog.component.html',
  styleUrls: ['./bgate-error-dialog.component.css']
})
export class BgateErrorDialogComponent implements OnInit {

  public drop:any="New";
  selectDrop=['New', 'Old']
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = ['type1', 'idNumber', 'special', 'name'];
  constructor(public dialogRef:MatDialogRef<BgateErrorDialogComponent>) { }

  clearDialog(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
