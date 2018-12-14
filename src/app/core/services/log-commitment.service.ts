import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { SelectCommitment } from '../../core/models/SelectCommitment';

@Injectable({
  providedIn: 'root'
})
export class SelectCommitmentService {

  private _url: string = "app/core/mocks/selectCommitment.json";

  constructor(private http: HttpClient) { }
  getSelectCommitmentData(caseInfo): Observable<SelectCommitment[]> {
    console.log(this._url);
    return this.http.get<SelectCommitment[]>(this._url);
  }

  deleteRecord(caseInfo: string): Observable<any> {
    let params = new HttpParams().set('requestforDelete', caseInfo);
    let url = "";
    return this.http.post(url, {}, { params: params });
}

  // getSelectCommitmentData(caseObjId): Observable<SelectCommitment[]> {
  //   console.log(this._url + caseObjId);
  //   return this.http.get<SelectCommitment[]>(this._url + caseObjId);
  // }

  getSelectCommitmentWithFilter(caseObjId, option, subOpt, sortOpt, queryInput) {
    let url = this._url;
    url += caseObjId;
    url += '?option=' + option + '&subOpt=' + subOpt + '&sortOpt=' + sortOpt + '&qryInput=' + queryInput;
    return this.http.get<SelectCommitment[]>(url);
  }

//   deleteRecord(caseObjId: string): Observable<any> {
//     let params = new HttpParams().set('requestforDelete', caseObjId);
//     let url = "";
//     return this.http.post(url, {}, { params: params });
// }
}
