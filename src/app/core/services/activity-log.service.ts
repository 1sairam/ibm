import { Injectable } from '@angular/core';
import { ActivityLog } from './../models/activity-log';
import { Observable, of} from 'rxjs';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  private _url: string = "http://zlp41146.vci.att.com:31327/bbw/ordermgmtservice/v1/log/getActivityLog/";    
  
  constructor(private http: HttpClient) { }

  getActivityLogData(caseId): Observable<ActivityLog[]>{
    return this.http.get<ActivityLog[]>(this._url + caseId);
  }

}
