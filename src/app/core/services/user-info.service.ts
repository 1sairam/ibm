import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UserInfo } from '../models/user-info';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  private _url: string = "./userInfo";

  getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>(this._url);
  }
}
