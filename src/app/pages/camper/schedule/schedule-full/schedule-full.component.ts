import { Component, OnInit } from '@angular/core';
import { ScheduleService } from "../../../../service/schedule.service";
import { ScheduleEntry } from '../../../../model/ScheduleEntry.model';
import { CAMP_DAYS } from '../../../../utils/campInfo.util';
import * as _ from 'lodash';

@Component({
  selector: 'app-schedule-full',
  templateUrl: './schedule-full.component.html',
  styleUrls: ['./schedule-full.component.scss']
})
export class ScheduleFullComponent implements OnInit {

  schedulelists: ScheduleEntry[][] = [[],[],[]];

  constructor(
    public scheduleService:ScheduleService
  ) { }

  ngOnInit() {
    this.fetch(1);
    this.fetch(2);
    this.fetch(3);
    window.scrollTo(0, 0);
  }

  private fetch(day:number) {
    const now = new Date();
    this.scheduleService.getSheet(day).subscribe(res => {
      this.updateScheduleList(
        day, 
        _(res.values)
          .drop()
          .map(data => ScheduleEntry.FromSheet(day, data))
          .toArray().value());
    });
  }

  private updateScheduleList(day: number, schedule:ScheduleEntry[]) {
    this.schedulelists[day - 1] = schedule;
  }

}
