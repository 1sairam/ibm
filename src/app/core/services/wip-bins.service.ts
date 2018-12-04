import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { WipBins } from '../models/wip-bins';
import { WipbinsCaseList } from '../models/wipbins-case-list';

@Injectable({
  providedIn: 'root'
})
export class WipBinsService {

  constructor(private http: HttpClient) { }

  private _url1: string = "./wipBinsList";
  private _url2: string = "./casesInWipBin/";
  //private _url1: string = "app/core/mocks/wipbins.json";

  async getWipBinsList(): Promise<WipBins[]> {
    return await this.http.get<WipBins[]>(this._url1).toPromise();
  }
  
 getCasesInWipBin(elmObjid):Observable<WipbinsCaseList[]>{
    this._url2 += elmObjid;
    return this.http.get<WipbinsCaseList[]>(this._url2);
  }
}
