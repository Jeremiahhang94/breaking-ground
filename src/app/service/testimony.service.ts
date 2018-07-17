import { Injectable } from '@angular/core';
import { GooglesheetService } from './googlesheet.service';

@Injectable({
  providedIn: 'root'
})

export class TestimonyService {

	sheetname = "testimony";
	range = "A:E";

	public getSheet() {
		return this.googleSheetService.load(this.sheetname, this.range);
	}

  constructor(
  	public googleSheetService:GooglesheetService
  ) {}
}
