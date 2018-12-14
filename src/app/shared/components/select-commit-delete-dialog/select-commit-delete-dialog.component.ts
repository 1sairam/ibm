import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'bbw-select-commit-delete-dialog',
  templateUrl: './select-commit-delete-dialog.component.html',
  styleUrls: ['./select-commit-delete-dialog.component.css']
})
export class SelectCommitDeleteDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SelectCommitDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(res: boolean): void {
    this.dialogRef.close(res);
  }
  onYesClick(res: boolean): void {
    this.dialogRef.close(res);
  }
}
