import { Injectable } from '@angular/core';
import { ActivityLog } from './../models/activity-log';
import { Observable, of} from 'rxjs';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  private _url: string = "./activityLog/";
  //private _url: string = "app/core/mocks/activityLog.json";
  
  constructor(private http: HttpClient) { }

  getActivityLogData(caseObjId): Observable<ActivityLog[]>{
    console.log(this._url + caseObjId);
    return this.http.get<ActivityLog[]>(this._url + caseObjId);
  }

  getActivityLogWithFilter(caseObjId,option,subOpt,sortOpt,queryInput){
    let url = this._url;
    url += caseObjId;
    url += '?option='+option+'&subOpt='+subOpt+'&sortOpt='+sortOpt+'&qryInput='+queryInput;
    return this.http.get<ActivityLog[]>(url);
  }
}
