import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {IPSMessage} from '../shared/IPSMessage';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfoForm: FormGroup;
  authenForm: FormGroup;

  sign: string;
  request: string;
  operationType: string;
  merchantID: string;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.userInfoForm = this._formBuilder.group({
      mobileNo: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      verifyCode: ['', Validators.required],
      inviteCode: ['']
    });
    this.authenForm = this._formBuilder.group({
      realName: [''],
      idCard: ['']
    });
  }

  // 注册逻辑
  register() {
    this.http.post('http://localhost:4200/xhr/user/register', this.userInfoForm.value).subscribe(data => {
      console.log(data);
    });
    console.log('注册成功！！');
  }

  // 实名认证过程
  auth(): Observable<any> {
    this.http.post('http://localhost:4200/xhr/userRegister/sign', this.authenForm.value).subscribe(data => {
      this.sign = data['sign'];
      this.operationType = data['operationType'];
      this.request = data ['request'];
      this.merchantID = data['merchantID'];
    });
    console.log('获取到object');
    console.log(this.request);
    const body = new HttpParams()
      .set('sign', this.sign)
      .set('request', this.request)
      .set('merchantID', this.merchantID)
      .set('operationType', this.operationType);
    return this.http.post('http://113.207.54.122:8011/p2p-dep/gateway.htm', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
