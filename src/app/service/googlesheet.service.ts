import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { GoogleOAuthService } from './google-o-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {

  SHEET_ID = environment.sheetId;
  API_KEY = environment.apiKey;

  public load(sheetname: string, range: string):Observable<any> {
    if (this.cached(sheetname, range)) {
      return this.loadCache(sheetname, range);
    } else {
      return this.loadApi(sheetname, range).pipe(map(res => this.cache(sheetname, range, res)))
    }
  }

  private cacheKey(sheetname: string, range: string) {
    return `sheetcache-${sheetname}-${range}`;
  }

  private cached(sheetname: string, range: string) {
    const json = localStorage.getItem(this.cacheKey(sheetname, range));
    return json !== null && this.cacheNotExpired(json);
  }

  private cacheNotExpired(json): boolean {
    const data = JSON.parse(json);
    return data.fetchDate && +new Date() - +new Date(data.fetchDate) < 100000
  }

  private cache(sheetname: string, range: string, data: any) {
    data.fetchDate = new Date();
    localStorage.setItem(this.cacheKey(sheetname, range), JSON.stringify(data));
    return data;
  }

  private loadCache(sheetname: string, range: string): Observable<any> {
    return Observable.create(observer => {
      const data = JSON.parse(localStorage.getItem(this.cacheKey(sheetname, range)));
      console.log();
      observer.next(data);
      observer.complete();
    });
  }

  private loadApi(sheetname: string, range: string):Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.SHEET_ID}/values/${sheetname}!${range}?key=${this.API_KEY}`;
    console.log(url);
    return this.http.get(url, { headers });
  }

  public append(sheetname: string, values: any, access_token: String) {
    const requestBody = { "values": values };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });
    const url = "https://sheets.googleapis.com/v4/spreadsheets/"
              + this.SHEET_ID 
              + "/values/" 
              + sheetname 
              + ":append"
              + "?valueInputOption=USER_ENTERED"
    console.log(url, requestBody, headers);
    return this.http.post(url, requestBody, { headers });

  }

  constructor(
  	public http:HttpClient,
    public googleOAuthService:GoogleOAuthService
  ) { }

}
