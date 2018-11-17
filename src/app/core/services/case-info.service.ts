import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { CaseInfo } from '../models/case-info';

@Injectable({
  providedIn: 'root'
})
export class CaseInfoService {

  caseInfo:CaseInfo[] = [];
  case : CaseInfo;

  private _url: string = "http://zlp41146.vci.att.com:31327/bbw/ordermgmtservice/v1/log/getActivityLog/";
  
  constructor(private http: HttpClient) { }

  getCaseInfo(caseId):CaseInfo{
    this.http.get<CaseInfo>(this._url + caseId).subscribe(data => this.case = data );
    this.caseInfo.push(this.case);
    return this.case;
  }

}
