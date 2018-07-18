import { Component, OnInit } from '@angular/core';
import { GoogleOAuthService } from '../../../service/google-o-auth.service';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public googleOAuthService:GoogleOAuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
  	return this.googleOAuthService.hasOAuth();
  }

  getLoginUrl() {
  	return this.googleOAuthService.getAuthUrl();
  }

}
