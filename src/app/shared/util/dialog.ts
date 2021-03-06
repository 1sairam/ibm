import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { WarningMessageDialogComponent } from '../components/warning-message-dialog/warning-message-dialog.component';


@Injectable({
    providedIn: 'root'
})
export class Dialog {
    constructor(public dialog: MatDialog) {}

    openDialog(messageToDisplay): void {
        const dialogRef = this.dialog.open(WarningMessageDialogComponent, {
          width: '250px',
          data: {"messageToDisplay" : messageToDisplay}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed' + result);
        });
    }
}
