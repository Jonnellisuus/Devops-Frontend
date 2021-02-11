import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ForexRates} from "./forex-rates";

@Injectable({
  providedIn: 'root'
})
export class ForexService {
  ratesSource = 'https://api.exchangeratesapi.io/latest';

  constructor(private httpClient: HttpClient) {
  }

  getRatesData(): Observable<any> {
    return this.httpClient.get(this.ratesSource).pipe(map(response => {
      return response as ForexRates;
    }));
  }

  getData(currency: any): Observable<any> {
    const param = new HttpParams().set('base', String(currency));
    return this.httpClient.get(this.ratesSource, {params: param}).pipe(map( response => {
      return response as ForexRates;
    }));
  }
}
