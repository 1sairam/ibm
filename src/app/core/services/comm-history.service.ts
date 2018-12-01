import { Injectable } from '@angular/core';
import { CommHistory } from '../models/comm-history';;
import { Observable, of} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommHistoryService {
  private _url: string = "http://localhost.att.com:8080/ui/getCommitLog/";    
  
  constructor(private http: HttpClient) { }

  getCommHistoryData(): Observable<CommHistory[]>{
    return this.http.get<CommHistory[]>(this._url);
  }
}
