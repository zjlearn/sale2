import {Action} from '@ngrx/store';
import {User} from './shared/models/User';

export const USER_LOGIN = 'user_login';
export const USER_LOGOUT = 'user_logout';
export const FETCH_FROM_API = 'fetch_from_api';

export class UserLoginAction implements Action {
  readonly type = USER_LOGIN;

  constructor(public payload: User) {
  }
}

export class UserLogOutAction implements Action {
  readonly type = USER_LOGOUT;

  constructor(public payload: User) {
  }
}

export class FetchFromAPI implements Action {
  readonly type = FETCH_FROM_API;

  constructor(public payload: User) {
  }
}

export class DefaultAction implements Action {
  readonly type = '';
}

export type  userActions = UserLoginAction | UserLogOutAction | FetchFromAPI |   DefaultAction;
