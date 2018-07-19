import { Component, OnInit, EventEmitter} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { GoogleOAuthService } from '../../../service/google-o-auth.service';
import { AnnouncementsService } from "../../../service/announcements.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttonClicked = new EventEmitter<void>();

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public googleOAuthService: GoogleOAuthService,
    public annoService:AnnouncementsService
  ) {
    iconRegistry.addSvgIcon(
      'back-arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/back-arrow.svg'));
    iconRegistry.addSvgIcon(
      'home-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/home.svg'));
    iconRegistry.addSvgIcon(
      'announcement-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/announcement.svg'));
  }

  ngOnInit() {}

  isLoggedIn() {
    return this.googleOAuthService.hasOAuth();
  }

  onClickedCopyToClipboard(){
    this.annoService.setAnnouncementEmitters();
  }
}
