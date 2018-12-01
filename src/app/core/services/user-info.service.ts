import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { UserInfo } from '../models/user-info';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class Employee{
    "id" :string;
    "employee_name" :string;
    "employee_salary" :string;
    "employee_age" :string;
    "profile_image":string;
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  private _url: string = "./userInfo";
  
  //async false
  async testSample():Promise<Employee>{
    return await this.http.get<Employee>('http://dummy.restapiexample.com/xyz').toPromise();
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http
                .get<UserInfo>(this._url)
                .pipe(catchError(this.handleError));;
  }

  private handleError(res: HttpErrorResponse) {
    return observableThrowError(res.error || 'Server error');
  }
}
