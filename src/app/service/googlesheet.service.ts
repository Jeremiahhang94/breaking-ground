import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { GoogleOAuthService } from './google-o-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {

  SHEET_ID = environment.sheetId;

  public load(sheetname: string, range: string):Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.googleOAuthService.getAccessToken()}`
    });
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.SHEET_ID}/values/${sheetname}!${range}`;

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
