import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from "../../../service/announcements.service";
import { AnnouncementEntry } from "../../../model/AnnouncementEntry.model";
import * as _ from 'lodash';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  
  announcementlist: AnnouncementEntry[] = [];
  displayLoader: boolean;
  
  constructor(
    public annoService:AnnouncementsService
  ) {}

  ngOnInit() {

    this.displayLoader = true;
    this.annoService.getSheet().subscribe(res => {
      this.announcementlist = _(res.values).drop().map(anno => AnnouncementEntry.FromSheet(anno))
                                    .toArray().value();
    })
  }


}