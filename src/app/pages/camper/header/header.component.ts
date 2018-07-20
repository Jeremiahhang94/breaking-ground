import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { GoogleOAuthService } from '../../../service/google-o-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public googleOAuthService: GoogleOAuthService
  ) {
    iconRegistry.addSvgIcon(
      'back-arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/back-arrow.svg'));
    iconRegistry.addSvgIcon(
      'home-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/home.svg'));
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.googleOAuthService.hasOAuth();
  }

  hardrefresh() {
    return localStorage.clear();
  }

}
