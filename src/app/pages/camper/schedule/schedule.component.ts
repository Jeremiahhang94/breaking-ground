import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ScheduleService } from "../../../service/schedule.service";
import { interval } from "rxjs"
import { ScheduleCountdownComponent } from './schedule-countdown/schedule-countdown.component';
import { ScheduleEntry } from '../../../model/ScheduleEntry.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  schedulelist: ScheduleEntry[];
  displayLoader: boolean;

  header: any;
  dataSource: ScheduleEntry[];
  displayedColumns = ['day', 'time', 'event', 'info'];
  entries: ScheduleEntry[];

  @ViewChild(ScheduleCountdownComponent) countdown;

  constructor(
    public schService:ScheduleService
  ) { }

  ngOnInit(){
    this.displayLoader = false; 
  }


  sortEntries(entries: ScheduleEntry[]) {
    entries.sort((a, b) => {
      if (+a.getDay() < +b.getDay() ||
        +a.getDay() === +b.getDay() && +a.getStartTime() < +b.getStartTime()) {
        return -1;
      } 
      return 1;
    })
    return entries;
  }



}
