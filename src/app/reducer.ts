import {User} from './shared/models/User';
import {Action} from '@ngrx/store';
import {FETCH_FROM_API, USER_LOGIN, USER_LOGOUT, userActions, UserLoginAction} from './action';

// 用户登录登出的reducer
export function userReducer(state: User = null, action: userActions): User {
  switch (action.type) {
    case USER_LOGIN:
      console.log('reducer 登录用户的状态');
      return action.payload;
    case  USER_LOGOUT:
      console.log('reducer logout 登录用户的状态');
      return null;
    case  FETCH_FROM_API:
      console.log('reducer fetchfrom API  登录用户的状态');
      return action.payload;
    default:
      console.log('reducer default 登录用户的状态');
      return state;
  }
}

export interface AppStore {
  userReducer: User;
}
