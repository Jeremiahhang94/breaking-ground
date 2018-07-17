import { Injectable } from '@angular/core';
import { GooglesheetService } from './googlesheet.service';
import { GoogleOAuthService } from './google-o-auth.service';
import { Observable } from 'rxjs/Rx';
import { AnnouncementEntry } from '../model/AnnouncementEntry.model';
import { ExtractTopK } from '../utils/entries.util';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

	sheetname = "announcements";
	range = "A:A"

	public getSheet() {
		return this.googleSheetService.load(this.sheetname, this.range);
	}

  constructor(
  	public googleSheetService:GooglesheetService,
  	public googleOAuthService:GoogleOAuthService
  ) {}
}
