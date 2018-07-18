import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleOAuthService } from '../../../service/google-o-auth.service';
import { CountdownComponent } from '../countdown/countdown.component';
import { ScheduleEntry } from '../../../model/ScheduleEntry.model';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public googleOAuthService:GoogleOAuthService) { }

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
