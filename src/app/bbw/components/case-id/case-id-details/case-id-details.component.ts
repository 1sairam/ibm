import { Component, OnInit, Input,OnDestroy } from '@angular/core';

import {CaseIdInfo} from '../../../models/case-id-info';
import {CaseIdService} from '../../../services/case-id.service';

@Component({
  selector: 'bbw-case-id-details',
  templateUrl: './case-id-details.component.html',
  styleUrls: ['./case-id-details.component.css']
})
export class CaseIdDetailsComponent implements OnInit,OnDestroy {

  caseIdData : CaseIdInfo;
  
  openedSubModuleTitle : string;

  constructor(private caseIdService: CaseIdService) { }

  ngOnInit() {
    this.caseIdData =  this.caseIdService.getSelectedCaseInfo();
    this.openedSubModuleTitle = "Case " + this.caseIdData.caseId;
  }

  ngOnDestroy(){
    console.log('i am getting cleared cleared/destroyed.' + this.caseIdData.caseId);
  }

}
