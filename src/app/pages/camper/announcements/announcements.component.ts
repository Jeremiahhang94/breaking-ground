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
  displayCopy: boolean;
  clipboardMsg;
  
  constructor(
    public annoService:AnnouncementsService
  ) {}

  ngOnInit() {

    this.displayLoader = true;
    this.displayCopy = false;
    this.clipboardMsg = '';
    this.annoService.getSheet().subscribe(res => {
      this.announcementlist = _(res.values).drop().map(anno => AnnouncementEntry.FromSheet(anno))
                                    .toArray().value();
      this.displayLoader = false;
    })

    this.annoService.getAnnouncementEmitters()
      .subscribe(() => {
        this.displayCopy = true;

        for(let i=0; i<this.announcementlist.length; i++){
          this.clipboardMsg += i+1 + '. ';
          this.clipboardMsg += this.announcementlist[i].getDescription();
        }

    });
  }


}