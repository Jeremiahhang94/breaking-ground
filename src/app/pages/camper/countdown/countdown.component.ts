import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  days = 0;
  hours = '0';
  minutes = '0';
  seconds = '0';
  displayCountdown = true;
  countdownOver = false;
  logoSrc:string;

  constructor() { }

  ngOnInit() {
    var campDay1 = new Date(2018, 6, 20); // 20th July
    this.activateCountdown(campDay1);
    this.logoSrc = environment.logoSrc;
  }

  /**
   * if coundownTo === null then hide the html
   * else show the html
   */
  activateCountdown(countdownTo) {
    if (countdownTo === null) {
      this.displayCountdown = false;
    } else {
      this.displayCountdown = true;
      // Update the count down every 1 second
      var x = setInterval(() => {
        var now = new Date().getTime();
        var distance = countdownTo - now;

        // Time calculations for days, hours, minutes and seconds
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var rawHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.hours = ("0" + rawHours).slice(-2);
        var rawMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.minutes = ("0" + rawMinutes).slice(-2);
        var rawSeconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.seconds = ("0" + rawSeconds).slice(-2);

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          this.countdownOver = true;
        }
      }, 1000);
    }
  }

}
