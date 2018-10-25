import { Injectable } from '@angular/core';
import { CaseIdInfo } from '../models/case-id-info';

@Injectable({
  providedIn: 'root'
})
export class CaseIdService {

  private retrievedCaseInfo = [];
  private selectedCaseInfo : number;

  constructor() { }

  getretrievedCaseInfo(){
    return this.retrievedCaseInfo;
  }
  
  addCaseIdInfo(caseId : string,name:string) {
    this.retrievedCaseInfo.push(new CaseIdInfo(caseId,name, this.getLength()));
    this.selectedCaseInfo = this.getLength() - 1;
  }

  removeCaseIdInfo(index:number) {
    this.retrievedCaseInfo.splice(index, 1);
  }

  setSelectedCaseInfo(index:number){
    this.selectedCaseInfo = index;
  }
 
  getCaseInfo(index:number):CaseIdInfo{
    return this.retrievedCaseInfo[index];
  }

  getSelectedCaseInfo():CaseIdInfo{
    return this.getCaseInfo(this.selectedCaseInfo);
  }

  getLength():number{
    return this.retrievedCaseInfo.length;
  }

  clear():void{
    this.retrievedCaseInfo = [];
  }
}
