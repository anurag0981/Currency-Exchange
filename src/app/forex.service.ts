import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForexService {
  private forexUrl = 'assets/api/forex.json';
  private inrUrl = 'assets/api/INR.json';
  // private inrUrl = 'https://free.currconv.com/api/v7/convert?q="+this.fromCurrency+"_"+this.toCurrency+"&compact=ultra&apiKey=c1d561913d5081f7d0e6';
  private usdUrl = 'assets/api/USD.json';
  private eurUrl = 'assets/api/EUR.json';
  private gbpUrl = 'assets/api/GBP.json';
  private jpyUrl = 'assets/api/JPY.json';
  //let Url="https://free.currconv.com/api/v7/convert?q="+this.fromCurrency+"_"+this.toCurrency+"&compact=ultra&apiKey=c1d561913d5081f7d0e6"


  constructor(private http: HttpClient) {

  }
  getForexData(): Observable<any[]> {
    return this.http.get<any[]>(this.forexUrl)
  }
  getInrJson(): Observable<any[]> {
    return this.http.get<any[]>(this.inrUrl)
  }
  getUsdJson(): Observable<any[]> {
    return this.http.get<any[]>(this.usdUrl)
  }
  getGbpJson(): Observable<any[]> {
    return this.http.get<any[]>(this.gbpUrl)
  }
  getEurJson(): Observable<any[]> {
    return this.http.get<any[]>(this.eurUrl)
  }
  getJpyJson(): Observable<any[]> {
    return this.http.get<any[]>(this.jpyUrl)
  }

  getLiveExchange(from, to): Observable<any[]> {
    let liveApiUrl = "https://free.currconv.com/api/v7/convert?q=" + from + "_" + to + "&compact=ultra&apiKey=c1d561913d5081f7d0e6";
    return this.http.get<any[]>(liveApiUrl)
  }

}
