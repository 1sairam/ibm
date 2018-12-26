import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { YankCase } from '../models/yank-case';

@Injectable({
  providedIn: 'root'
})
export class YankService {
  private _url: string = "./yank/";

  constructor(private http: HttpClient) { }

  async yankCase(caseId):Promise<any>{
    return await this.http.get<any>(this._url+caseId).toPromise();
  }
}





