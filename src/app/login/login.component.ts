import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/User';
import {Store, select} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {FETCH_FROM_API, USER_LOGIN, UserLoginAction} from '../action';
import {AppStore} from '../reducer';
import {Result} from '../shared/models/Result';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router,
              private userService: UserService, private store: Store<AppStore>) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
      verifyCode: ['', Validators.required]
    });
  }

  // form 表单的方式进行post提交
  login() {
    console.log('开始登录！！');
    const formModel = this.loginForm.value;
    const formData: FormData = new FormData();
    formData.append('mobile', formModel.mobile);
    formData.append('password', formModel.password);
    this.http.post<Result>('http://localhost:4200/xhr/user/login', formData).subscribe(result => {
      // Read the result field from the JSON response.
      console.log(result);
      this.store.dispatch(new UserLoginAction(result.data));
    });


    console.log('登录成功！！');

    // 登录完成之后，跳转到主页
    this.router.navigate(['/home']);
  }

  // 以form表单的方式进行post提交
  register() {
    console.log('开始注册！！');
    const formModel = this.loginForm.value;
    const formData: FormData = new FormData();
    formData.append('mobile', formModel.mobile);
    formData.append('password', formModel.password);
    formData.append('inviteCode', formModel.inviteCode);
    this.http.post('http://localhost:4200/xhr/user/register', formData).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
    console.log('注册成功！！');
    // 注册完成之后 跳转到主页
    this.router.navigate(['/home']);
  }

  getVerifyCode() {
    console.log('获取验证码成功');
  }
}
