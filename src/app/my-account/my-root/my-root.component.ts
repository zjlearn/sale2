import {Component, OnInit} from '@angular/core';
import {SIDEBARROUTES} from './sidebar-routes.config';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/User';

@Component({
  selector: 'app-my-root',
  templateUrl: './my-root.component.html',
  styleUrls: ['./my-root.component.css']
})
export class MyRootComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService) {
    this.userService.getUser();
    this.user = this.userService.user;
  }

  ngOnInit() {
  }


}
