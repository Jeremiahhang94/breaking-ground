import { Injectable } from '@angular/core';
import { GooglesheetService } from './googlesheet.service';

@Injectable({
  providedIn: 'root'
})
export class CamperInfoService {

	sheetname = "camperInfo";
	range = "A:D"

	public getSheet() {
		return this.googleSheetService.load(this.sheetname, this.range);
	}

  constructor(
  	public googleSheetService:GooglesheetService
  ) { }
}
