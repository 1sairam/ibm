import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { CaseInfo } from '../models/case-info';

@Injectable({
  providedIn: 'root'
})
export class CaseInfoService {

  caseInfo:CaseInfo[] = [];
  case : CaseInfo;

  private _url: string = "/ui/bbw/getCaseInfo";
  
  constructor(private http: HttpClient) { }

  getCaseInfo(caseId):CaseInfo{
    this.http.get<CaseInfo>(this._url + caseId).subscribe(data => this.case = data );
    this.caseInfo.push(this.case);
    return this.case;
  }

}
