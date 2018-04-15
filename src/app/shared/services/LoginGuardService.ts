import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {User} from '../models/User';
import {Store} from '@ngrx/store';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AppStore} from '../../reducer';

@Injectable()
export class LoginGuardService implements CanActivate, OnInit {

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
    console.log('login guard is ' + user);
    if (!user) {
      return true;
    }
    this.route.navigate(['/home']);
    return false;
  }
}
