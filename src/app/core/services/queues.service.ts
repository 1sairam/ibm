import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Queues } from '../models/queues';
import { QueuesCaseList } from '../models/queues-case-list';

@Injectable({
  providedIn: 'root'
})
export class QueuesService {

  constructor(private http: HttpClient) { }
  private _url1: string = "./myQueuesList/";
  private _url2: string = "./allQueuesList";
  private _url3: string = "./casesInQueue/";
  //private _url1: string = "app/core/mocks/queues.json";

  async getMyQueuesList(): Promise<Queues[]> {
    return await this.http.get<Queues[]>(this._url1).toPromise();
  }
  async getAllQueuesList(): Promise<Queues[]> {
    return await this.http.get<Queues[]>(this._url2).toPromise();
  }

  getCasesInQueue(elmObjid):Observable<QueuesCaseList[]>{
    let url = this._url3;
    url += elmObjid;
    return this.http.get<QueuesCaseList[]>(url);
  }
}
