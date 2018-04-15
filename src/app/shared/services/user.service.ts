import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {Result} from '../models/Result';
import {Observable} from 'rxjs/src/Observable';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
    this.getUser();
  }

  /**
   * 获取当前登录的用户信息
   */
  getUser() {
    return this.http.get<Result>('http://localhost:4200/xhr/user/currentUser').map<Result, User>(result => result.data);
  }
}
