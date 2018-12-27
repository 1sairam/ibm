import { Injectable } from '@angular/core';
import { ServiceInfo } from './../models/service-info';
import { Observable, of} from 'rxjs';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { CaseInfo } from '../models/case-info';



@Injectable({
  providedIn: 'root'
})
export class ServiceInfoService {

  private _url1: string='app/core/mocks/service-info.json';
  private _url2: string='./serviceInfo/';

  constructor(private http: HttpClient) { }
  getServiceInfoData(caseId):Observable<ServiceInfo[]>{
    console.log('welcome');
    let url = this._url2;
    url += caseId;
    return this.http.get<ServiceInfo[]>(url);
  }
}

