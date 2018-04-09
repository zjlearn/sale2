import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {Result} from '../models/Result';

@Injectable()
export class UserService {
  public user: User;

  constructor(private http: HttpClient) {
    this.getUser();
  }

  /**
   * 获取当前登录的用户信息
   */
  getUser() {
    this.http.get<Result>('http://localhost:4200/xhr/user/currentUser').subscribe(
      data => {
        this.user = data.data;
      }
    );
    console.log('get user' + this.user);
  }
}
