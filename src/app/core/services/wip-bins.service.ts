import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { WipBins } from '../models/wip-bins';

@Injectable({
  providedIn: 'root'
})
export class WipBinsService {

  constructor(private http: HttpClient) { }

  private _url: string = "./wipBinsList/";

  getWipBinsList(objId): WipBins[] {
    let wipBinsData: WipBins[];
    this.http.get<WipBins[]>(this._url + objId).subscribe(data => wipBinsData = data);
    return wipBinsData;
  }
}
