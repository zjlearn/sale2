import {Injectable} from '@angular/core';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {Result} from '../models/Result';

@Injectable()
export class UserService {
  public isLogin: boolean;
  public userName: string;

  constructor(private http: HttpClient) {
    this.getUser();
    if (this.userName != null) {
      this.isLogin = true;
    }
  }

  getUser() {
    this.http.get<Result>('http://localhost:4200/xhr/user/getUserName').subscribe(
      data => {
        this.userName = data.data;
      }
    );
  }
}
