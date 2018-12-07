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
  moreInfoDetails : any;

  private _url: string = "./caseInfo/";
  private _caseInfoMocksUrl = "app/core/mocks/case-info.json";

  constructor(private http: HttpClient) { }

  async getLocalCaseInfo(): Promise<CaseInfo> {
    return await this.http.get<CaseInfo>(this._caseInfoMocksUrl).toPromise();
    //this.caseInfo.push(this.case);
    //return this.case;
  }
  async getCaseInfo(caseId): Promise<CaseInfo> {
    return await this.http.get<CaseInfo>(this._url + caseId).toPromise();
    //this.caseInfo.push(this.case);
    //return this.case;
  }

  getSelectedCaseInfo() {
    console.log(this.selectedIndex +":"+this.caseInfo );
    return this.caseInfo[this.selectedIndex];
  }

  //getting the more info values
  getCaseInfoMoreDetails(details){
    this.moreInfoDetails = details;
  }

  createCaseInfo(caseId,caseInfo:CaseInfo){
    console.log("create case Info for " + caseId);
    caseInfo.caseId = caseId;
    this.caseInfo.push(caseInfo);
    this.selectedIndex = this.caseInfo.length-1;//index so we need to decrese
  }

  removeCaseInfo(index){
    console.log("removing sleected index;"+this.selectedIndex);
    console.log("index;"+index);
    this.caseInfo.splice(index, 1);
  }

}
