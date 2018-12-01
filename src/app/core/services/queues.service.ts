import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Queues } from '../models/queues';

@Injectable({
  providedIn: 'root'
})
export class QueuesService {

  constructor(private http: HttpClient) { }
  private _url1: string = "./queuesList";
  private _url2: string = "./allQueuesList";

  async getMyQueuesList(): Promise<Queues[]> {
    return await this.http.get<Queues[]>(this._url1).toPromise();
  }
  async getAllQueuesList(): Promise<Queues[]> {
    return await this.http.get<Queues[]>(this._url1).toPromise();
  }

  getCasesInQueue(){
    
  }
}
