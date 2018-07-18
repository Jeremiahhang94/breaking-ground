import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleOAuthService } from '../../../service/google-o-auth.service';
import { CountdownComponent } from '../countdown/countdown.component';
import { ScheduleEntry } from '../../../model/ScheduleEntry.model';
import { environment } from '../../../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logoSrc: string = environment.logoSrc;

  constructor(
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    public googleOAuthService:GoogleOAuthService) { 
    iconRegistry.addSvgIcon(
      'google-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/google-logo.svg'));
  }

  @ViewChild('countdownTimer') countdownTimer: CountdownComponent;

  ngOnInit() {
  }

  isLoggedIn() {
    return this.googleOAuthService.hasOAuth();
  }

  getLoginUrl() {
    return this.googleOAuthService.getAuthUrl();
  }

  countdownTo($event: ScheduleEntry) {
    this.countdownTimer.countdownTo($event);
  }

}
