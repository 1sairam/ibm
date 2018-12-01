import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Queues } from '../models/queues';

@Injectable({
  providedIn: 'root'
})
export class QueuesService {

  constructor(private http: HttpClient) { }
  private _url: string = "./queuesList";

  getQueuesList(): Observable<Queues[]> {
    return this.http.get<Queues[]>(this._url);
  }

  getCasesInQueue(){
    
  }
}
