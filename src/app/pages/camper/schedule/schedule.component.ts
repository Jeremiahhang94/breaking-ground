import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ScheduleService } from "../../../service/schedule.service";
import { ScheduleEntry } from '../../../model/ScheduleEntry.model';
import { CAMP_DAYS } from '../../../utils/campInfo.util';
import * as _ from 'lodash';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedulelist: ScheduleEntry[];
  displayLoader: boolean;
  campIsOver = false;

  @Output() countdownTo = new EventEmitter<ScheduleEntry> ();

  constructor(
    public scheduleService:ScheduleService
  ) { }

  ngOnInit(){
    this.displayLoader = false; 

    const today = new Date().getDate();
    this.loadSchedule(today);
  }

  private loadSchedule(today) {
    if (today <= CAMP_DAYS[1]) {
      this.fetch(1);
    } else if (today == CAMP_DAYS[2]) {
      this.fetch(2);
    } else if (today == CAMP_DAYS[3]) {
      this.fetch(3);
    } else {
      this.campIsOver = true;
    }
  }

  private fetch(day) {
    const now = new Date();
    this.scheduleService.getSheet(day).subscribe(res => {
      this.schedulelist = _(res.values)
                            .drop()
                            .map(data => ScheduleEntry.FromSheet(day, data))
                            .dropWhile(entry => entry.isPast(now))
                            .slice(0, 3)
                            .toArray().value();

      if (this.schedulelist && this.schedulelist[0].shouldCountdownTo()) {
        this.countdownTo.emit(this.schedulelist[0]);
      }
    })
  }



}
