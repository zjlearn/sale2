import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {Store, select} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {AppStore} from '../../reducer';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.css']
})
export class SecondHeaderComponent implements OnInit {
  userState$: Observable<User>;
  private userStateSubscription: Subscription;
  user: User;

  constructor(private store: Store<AppStore>) {
    this.userState$ = store.select('userReducer');
  }

  ngOnInit() {
    this.userStateSubscription = this.userState$.subscribe((state) => {
      this.user = state;
      console.log('second 更新用户登录状态');
    });
  }

}
