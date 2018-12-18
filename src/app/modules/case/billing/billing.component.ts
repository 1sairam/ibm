import { Component, OnInit, Input,  } from '@angular/core';
import {MatDialog} from '@angular/material';
import { BgateErrorDialogComponent } from '../../dialogs/bgate-error-dialog/bgate-error-dialog.component';
import { SiidDialogComponent } from '../../dialogs/siid-dialog/siid-dialog.component';
import { CaseInfo } from 'src/app/core/models/case-info';

@Component({
  selector: 'bbw-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  selectDrop = ["Invoice", "Subcase", "RQST", "SOLN", "CR"];
  selectedDropdown:any = 'Invoice';

  @Input()
  caseInfo:CaseInfo;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(BgateErrorDialogComponent,  {
      width: '75%',
      height : '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  siidDialog() {
    const dialogRef = this.dialog.open(SiidDialogComponent,  {
      width: '55%',
      height : '60%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  MAT_TAB_COLLAPSED_HEIGHT = '35px';
  MAT_TAB_EXPANDED_HEIGHT = '27px';

}

