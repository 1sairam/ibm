import { Injectable } from '@angular/core';
import { ActivityLog } from './../models/activity-log';
import { Observable, of} from 'rxjs';
import { HttpClient ,HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  private _url: string = "./getActivityLog/";
  
  constructor(private http: HttpClient) { }

  getActivityLogData(caseId): Observable<ActivityLog[]>{
    console.log(this._url + caseId);
    return this.http.get<ActivityLog[]>(this._url + caseId);
  }

}
