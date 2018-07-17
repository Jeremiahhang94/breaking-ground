import { Injectable } from '@angular/core';
import { GooglesheetService } from './googlesheet.service';
import { Observable } from 'rxjs/Rx';
import { ExtractTopK } from '../utils/entries.util';
import { ScheduleEntry } from '../model/ScheduleEntry.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  sheetname = "day";
  range = "A:E"

  public getSheet(day: number) {
    return this.googleSheetService.load(`${this.sheetname}${day}`, this.range);
  }

  constructor(
    public googleSheetService:GooglesheetService
  ) { }
}
