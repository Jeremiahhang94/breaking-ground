import { Component, OnInit } from '@angular/core';
import { GoogleOAuthService } from '../../../service/google-o-auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(
  	public googleOAuthService:GoogleOAuthService,
  	public router: Router
  ) { }

  ngOnInit() {
  	this.googleOAuthService.extractAccessTokenFromUrl().subscribe(res => this.redirectToHomePage());
  }

  redirectToHomePage() {
  	this.router.navigate(['/']);
  }

}
