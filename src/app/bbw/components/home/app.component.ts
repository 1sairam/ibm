import { Component } from '@angular/core';
import { Location } from '@angular/common';

import {CaseIdService} from '../../services/case-id.service';
@Component({
  selector: 'bbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  caseId:string = "";

  constructor(public caseIdService: CaseIdService,private location: Location) {

  }
  
  goBack(): void {
    this.location.back();
  }

  queryForCaseIdInfo() {
    if(this.caseId == null || this.caseId == ""){
      return;
    }
    //get caseIdInfo based on caseId from backend or service to display on GUI
    this.caseIdService.addCaseIdInfo(this.caseId,"dummy");

    this.caseId="";
  }

  setSelected(index : number){
    this.caseIdService.setSelectedCaseInfo(index);
  }

  removeTab(index : number) {
    this.caseIdService.removeCaseIdInfo(index);
  }

  removeAllTabs(){
    this.caseIdService.clear();
  }
}
