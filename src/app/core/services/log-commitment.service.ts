import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { SelectCommitment } from '../../core/models/SelectCommitment';

@Injectable({
  providedIn: 'root'
})
export class SelectCommitmentService {

  private _url1: string = "app/core/mocks/selectCommitment.json";
  private _url2: string = "./commitLog/";
  private _url = this._url2;

  constructor(private http: HttpClient) { }

  getSelectCommitmentData(objid): Observable<SelectCommitment[]> {
    console.log(this._url);
    return this.http.get<SelectCommitment[]>(this._url + objid);
  }

  getSelectCommitmentWithFilter(caseObjId, option, subOpt, sortOpt, queryInput) {
    let url = this._url;
    url += caseObjId;
    url += '?option=' + option + '&subOpt=' + subOpt + '&sortOpt=' + sortOpt + '&qryInput=' + queryInput;
    return this.http.get<SelectCommitment[]>(url);
  }
  
  deleteRecord(caseInfo: string): Observable<any> {
    let params = new HttpParams().set('requestforDelete', caseInfo);
    let url = "";
    return this.http.post(url, {}, { params: params });
  }

  

}
