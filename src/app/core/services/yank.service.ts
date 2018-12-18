import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { YankCase } from '../models/yank-case';

@Injectable({
  providedIn: 'root'
})
export class YankService {
  private _url: string = "";

  constructor(private http: HttpClient) { }
  getYankData(objid):Observable<YankCase[]>{
    return this.http.get<YankCase[]>(this._url+objid);
  }
}





