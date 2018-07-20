import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class GoogleOAuthService {
  endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
  clientId = "947394714759-dfj9erkpjkc7ovptjs177gmlpfb0nb1d.apps.googleusercontent.com";
  redirectUri = environment.redirectUri;
  responseType = "token";
  scopes = Array.prototype.join.call([
    "https://www.googleapis.com/auth/spreadsheets"
  ], " ");
  apiEndPoint: String;

  

  constructor(
    public http:HttpClient,
    public route:ActivatedRoute
  ) { 
    this.apiEndPoint = this.endpoint + "?" + Array.prototype.join.call([
        "scope=" + this.scopes,
        "response_type=" + this.responseType,
        "redirect_uri=" + this.redirectUri,
        "client_id=" + this.clientId
      ], "&");
  }

  extractAccessTokenFromUrl(): Observable<any> {
    return Observable.create(observer => {
      this.route.fragment.subscribe(params => {
        if (params) {
          const accessToken = {};
          _(params).split('&').each(frag => {
            const parts = _.split(frag, '=');
            return accessToken[parts[0]] = parts[1];
          });
          this.saveOAuth(accessToken);
        }
        observer.next(true);
        observer.complete();
      });
    });
  }

  getAuthUrl(): String {
    return this.apiEndPoint;
  }

  getAccessToken(): String {
    return localStorage.getItem("access_token");
  }

  hasOAuth():boolean {
    return true;
    // return localStorage.getItem("access_token") != null && 
    //       localStorage.getItem("expires_in") != null &&
    //       new Date(localStorage.getItem("expires_in")).getTime() - new Date().getTime() > 0;
  }

  validateOAuth(access_token: String): Observable<any> {
    const url = "https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=" + access_token;
    return this.http.get(url)
  }

  isValidAccessToken(params:any): boolean {
    return (params != null &&
            params.access_token != null &&
            params.expires_in != null &&
            params.token_type != null)
  }

  saveOAuth(params:any): void {
    console.log("Saving OAuth");
    const now = new Date();
    now.setSeconds(+now.getSeconds() + +params.expires_in);
    localStorage.setItem("access_token", params.access_token);
    localStorage.setItem("token_type", params.token_type);
    localStorage.setItem("expires_in", now.toString());
  }

}
