import { Injectable } from '@angular/core';
import {User} from '../models/User';

@Injectable()
export class UserService {
  public isLogin: boolean;
  public userInfo: User;
  constructor() { }

}
