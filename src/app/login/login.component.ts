import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
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
    this.http.post('http://localhost:4200/xhr/user/login',  formData).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
    console.log('登录成功！！');
  }

  // 以form表单的方式进行post提交
  register() {
    console.log('开始注册！！');
    const formModel = this.loginForm.value;
    const formData: FormData = new FormData();
    formData.append('mobile', formModel.mobile);
    formData.append('password', formModel.password);
    formData.append('inviteCode', formModel.inviteCode);
    this.http.post('http://localhost:4200/xhr/user/register',  formData).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
    console.log('注册成功！！');
  }

  getVerifyCode() {
    console.log('获取验证码成功');
  }
}
