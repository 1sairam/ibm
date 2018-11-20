import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { CaseInfoService } from '../../../core/services/case-info.service';
import { CaseInfo } from '../../../core/models/case-info';

@Component({
  selector: 'bbw-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit {

  @Output() changeToComponent = new EventEmitter<number>();

  caseInfo: CaseInfo;//default

  constructor(private caseInfoService:CaseInfoService) {

  }

  ngOnInit() {
    this.caseInfo = this.caseInfoService.getSelectedCaseInfo();
    console.log("caseInfo:"+this.caseInfo);
  }

  changeComp(index){
    this.changeToComponent.emit(index);
  }


  MAT_TAB_COLLAPSED_HEIGHT = '35px';
  MAT_TAB_EXPANDED_HEIGHT = '35px';
}
