import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { WipBins } from '../models/wip-bins';

@Injectable({
  providedIn: 'root'
})
export class WipBinsService {

  constructor(private http: HttpClient) { }

  private _url: string = "./wipBinsList";

  async getWipBinsList(): Promise<WipBins[]> {
    return await this.http.get<WipBins[]>(this._url).toPromise();
  }
  
  getCasesInWipBin(){
    
  }
}
