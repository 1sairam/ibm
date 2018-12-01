import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { CaseInfo } from '../models/case-info';

@Injectable({
  providedIn: 'root'
})
export class CaseInfoService {

  caseInfo: CaseInfo[] = [];
  case: CaseInfo;
  selectedIndex: number;

  private _url: string = "./caseInfo";

  constructor(private http: HttpClient) { }

  getCaseInfo(caseId): CaseInfo {
    this.http.get<CaseInfo>(this._url + caseId).subscribe(data => {this.case = data});
    this.caseInfo.push(this.case);
    return this.case;
  }

  getSelectedCaseInfo() {
    console.log(this.selectedIndex +":"+this.caseInfo );
    return this.caseInfo[this.selectedIndex];
  }

  createCaseInfo(caseId){
    console.log("create case Info for " + caseId);
    this.caseInfo.push(new CaseInfo(caseId,null,null));
    this.selectedIndex = this.caseInfo.length-1;//index so we need to decrese
  }

  removeCaseInfo(index){
    console.log("removing sleected index;"+this.selectedIndex);
    console.log("index;"+index);
    this.caseInfo.splice(index, 1);
  }

}
