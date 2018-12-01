import { Injectable } from '@angular/core';
import { BrassResponse } from './../models/brass';
import { Observable, of} from 'rxjs';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrassService {

  private _url: string = "http://zlp41146.vci.att.com:31327/bbw/ordermgmtservice/v1/log/getActivityLog/";    

  constructor(private http: HttpClient) { }

  getBrassResponseData(caseId): Observable<BrassResponse[]>{
    console.log(this._url + caseId);
    return this.http.get<BrassResponse[]>(this._url + caseId);
  }

}
