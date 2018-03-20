import { Component, OnInit } from '@angular/core';
import {SIDEBARROUTES} from '../my-root/sidebar-routes.config';

// my-account的
@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit {
  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;
  constructor() {
    this.menuItems = SIDEBARROUTES;
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(0,0,0,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  }

  ngOnInit() {
    // this.color = this.settingsService.getSidebarFilter();
    // this.settingsService.sidebarFilterUpdate.subscribe((filter: string) => {
    //   this.color = filter;
    //   if (filter === '#fff') {
    //     this.activeFontColor = 'rgba(0,0,0,.6)';
    //   }else {
    //     this.activeFontColor = 'rgba(255,255,255,.8)';
    //   }
    // });
    // this.settingsService.sidebarColorUpdate.subscribe((color: string) => {
    //   if (color === '#fff') {
    //     this.normalFontColor = 'rgba(0,0,0,.6)';
    //     this.dividerBgColor = 'rgba(0,0,0,.1)';
    //   }else {
    //     this.normalFontColor = 'rgba(255,255,255,.8)';
    //     this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
    //   }
    // });
  }

}
