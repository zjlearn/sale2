import {Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';
import {User} from '../models/User';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {AppStore} from '../../reducer';
import {DefaultAction} from '../../action';


@Injectable()
export class AuthGuardService implements CanActivate, OnInit {

  userState$: Observable<User>;

  constructor(private route: Router, private store: Store<AppStore>) {
    this.userState$ = store.select('userReducer');
  }

  ngOnInit(): void {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // 获取用户的信息
    let user = null;
    this.userState$.subscribe(data => user = data);
    console.log(user);
    if (user) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
