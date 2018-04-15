import {Component} from '@angular/core';
import {UserService} from './shared/services/user.service';
import {FETCH_FROM_API} from './action';
import {Store} from '@ngrx/store';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AppStore} from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private userService: UserService, private store: Store<AppStore>) {
    console.log('构造app主键');
    const userState$ = this.userService.getUser()
      .map(user => {
        this.store.dispatch({type: FETCH_FROM_API, payload: user});
        console.log('构造初始化的user状态');
        return this.store.select('userReducer');
      }).subscribe();
  }
}
