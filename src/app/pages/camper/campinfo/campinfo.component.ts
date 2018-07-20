import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-camp-info',
  templateUrl: './campinfo.component.html',
  styleUrls: ['./campinfo.component.scss']
})

export class CampInfoComponent implements OnInit {

  htmlcode: any;
  public edited;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'lost-items',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/lost-items.svg'));
    iconRegistry.addSvgIcon(
      'plaster',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/plaster.svg'));
    iconRegistry.addSvgIcon(
      'telephone',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/telephone.svg'));
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  iconHolder(x:number) {
  
    if (this.tiles[x].icon == 'lost-items') {
      return this.edited = true;
    }
    else if (this.tiles[x].icon == 'plaster') {
      return this.edited = true;
    }
    else if (this.tiles[x].icon == 'telephone') {
      return this.edited = true;
    }
    else {
      return this.edited = false;
    }
  }

  tiles: any = [
    { cols: 1, rows: 1},
    { title: 'LOST & FOUND', text: 'Lost something? Head on over to XYZ right now to claim your items', cols: 2, rows: 4, color: '#da3c45' },
    { icon: 'lost-items', cols: 1, rows: 2, color: '#3454d1' },
    { cols: 1, rows: 1},

    { title: 'FIRST AID', text: 'Medics for each campus: <b>NUS</b> (Celine),<br/><b>SIM</b> (Nigel & Qian Wen),<br/><b>SMU</b> (Joreene, Shana),<br/><b>NYC</b> (Joshua),<br/><b>NS</b> (Rui Qiang)<br/>Can\'t reach them? Call Qian Wen at <b>8163 1596</b>.', cols: 2, rows: 4, color: '#da3c45' },
    { cols: 1, rows: 1, color: '#' },
    { icon: 'plaster', cols: 1, rows: 2, color: '#3454d1' },
    { cols: 1, rows: 1 },

    { cols: 1, rows: 1},
    { title: 'ADMINISTRATIVE', text: 'Look for <b>Jesus</b> or call <b>Anthea</b> for assistance', cols: 2, rows: 4, color: '#da3c45' },
    { icon: 'telephone', cols: 1, rows: 2, color: '#3454d1' },
    { cols: 1, rows: 1},
  ];
}

