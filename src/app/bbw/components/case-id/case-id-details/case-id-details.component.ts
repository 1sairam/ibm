import { Component, OnInit, OnDestroy } from '@angular/core';

import {CaseIdInfo} from '../../../models/case-id-info';
import {CaseIdService} from '../../../services/case-id.service';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import {BrassComponent} from '../brass/brass.component';

@Component({
  selector: 'bbw-case-id-details',
  templateUrl: './case-id-details.component.html',
  styleUrls: ['./case-id-details.component.css']
})
export class CaseIdDetailsComponent implements OnInit,OnDestroy {

  caseIdData : CaseIdInfo;
  
  openedSubModuleTitle : string;

  constructor(public caseIdService: CaseIdService) { }

  displayBrass(){

  }
  
  ngOnInit() {
    this.caseIdData =  this.caseIdService.getSelectedCaseInfo();
    this.openedSubModuleTitle = "Case " + this.caseIdData.caseId;
  }

  ngOnDestroy(){
    console.log('i am getting cleared cleared/destroyed.' + this.caseIdData.caseId);
  }

  openModel(){

  }
  
  // openBrassScreen(){
  //   const dialogRef = this.dialog.open(BrassComponent, {
  //     backdropClass:'nothing',
  //     closeOnNavigation:false,
  //     disableClose:true,
  //     hasBackdrop:false,
  //     data: {name: "srinivas", animal: "no"}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
