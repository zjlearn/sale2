import { Component, OnInit } from '@angular/core';
import {SIDEBARROUTES} from './sidebar-routes.config';

@Component({
  selector: 'app-my-root',
  templateUrl: './my-root.component.html',
  styleUrls: ['./my-root.component.css']
})
export class MyRootComponent implements OnInit {
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
  }

}
