import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-sidebar',
  templateUrl: './my-sidebar.component.html',
  styleUrls: ['./my-sidebar.component.css']
})
export class MySidebarComponent implements OnInit {
  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;

  constructor() {
    this.menuItems = ROUTES;
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(255,255,255,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  }

  ngOnInit() {

  }
}

export const ROUTES = [
  {path: 'myLoan', title: '通知', icon: 'notifications', children: null},
  {path: 'myInvest', title: '报警', icon: 'warning', children: null},
];
