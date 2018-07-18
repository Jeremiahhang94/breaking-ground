import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { GoogleOAuthService } from '../../../service/google-o-auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
  	public googleOAuthService: GoogleOAuthService
  ) {
    iconRegistry.addSvgIcon(
      'forward-arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/forward-arrow.svg'));
  }

  ngOnInit() {
  }

  isLoggedIn() {
  	return this.googleOAuthService.hasOAuth();
  }

}


