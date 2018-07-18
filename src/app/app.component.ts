import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
  	private router:Router
  ) {
  	if (environment.production) {
  		this.router.events.subscribe(event => {
	      if (event instanceof NavigationEnd) {
	      	console.log(event);
	        (<any>window).ga('set', 'page', event.urlAfterRedirects);
	        (<any>window).ga('send', 'pageview');
	      }
	    });
  	}
  }
}
