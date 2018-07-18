import { Component, OnInit } from '@angular/core';
import { CamperInfoService } from "../../../service/camper-info.service";
import { CamperEntry } from "../../../model/CamperEntry.model";
import * as _ from 'lodash';

@Component({
  selector: 'app-camper-info',
  templateUrl: './camper-info.component.html',
  styleUrls: ['./camper-info.component.scss']
})
export class CamperInfoComponent implements OnInit {

	data:any;
  displayLoader:boolean;
  choices: CamperEntry[] = []
  searchedName: string;
  selected: CamperEntry;

  constructor(
  	public camperInfoService:CamperInfoService
  ) { }

  ngOnInit() {
    this.displayLoader = true;
  	this.camperInfoService.getSheet().subscribe(response => {
      this.data = _(response.values)
                  .drop()
                  .map(row => CamperEntry.FromSheet(row))
                  .toArray().value();
    });
    window.scrollTo(0, 0);
  }

  searchName($event) {
    if (this.searchedName) {
      const searchTerm = _.toLower(_.trim(this.searchedName));
      const startwith = _.filter(this.data, entry => _.startsWith(_.toLower(entry.getName()), searchTerm));
      const contains = _.filter(this.data, entry => _.toLower(entry.getName()).includes(searchTerm));
      this.choices = _.uniq(_.concat(startwith, contains));
    }
  }

  setSelected(entry) {
    this.selected = entry;
  }

}
