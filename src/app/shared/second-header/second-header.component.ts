import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.css']
})
export class SecondHeaderComponent implements OnInit {

  constructor(public userService: UserService) {
    this.userService.getUser();
    console.log('构造second header');
  }

  ngOnInit() {
  }

}
