import {Component, OnInit} from '@angular/core';
import {SIDEBARROUTES} from './sidebar-routes.config';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/User';
import {Store} from '@ngrx/store';
import {AppStore} from '../../reducer';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-my-root',
  templateUrl: './my-root.component.html',
  styleUrls: ['./my-root.component.css']
})
export class MyRootComponent implements OnInit {
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
