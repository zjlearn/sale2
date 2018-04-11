import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Result} from '../../shared/models/Result';

/**
 * 负责实名制认证的功能
 */
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  authForm: FormGroup;
  merchantID: string;
  operationType = 'user.register';
  request: string;
  sign: string;

  constructor(private http: HttpClient,
              private _formBuilder: FormBuilder,
              private elRef: ElementRef) {
    this.authForm = this._formBuilder.group({
      name: [''],
      idCard: [''],
    });
  }

  ngOnInit() {

  }

  /**
   * 实名认证的过程， 该过程会请求后端auth服务， 返回相应的sign request等信息，
   */
  auth() {
    this.http.post<Result>('http://localhost:4200/xhr/ips/userRegister/sign', this.authForm.value).subscribe(result => {
      this.sign = result.data['sign'];
      this.request = result.data['request'];
      this.operationType = result.data['operationType'];
      this.merchantID = result.data['merchantID'];
    });
    this.ipsFormSubmit();
  }

  /**
   *该函数用于提交该表单
   */
  ipsFormSubmit() {
    setTimeout(5000);
    const test = this.elRef.nativeElement.querySelector('#ipsForm');
    console.log(this.sign);
    console.log(this.request);
    console.log(this.merchantID);
    setTimeout(() => {
      test.submit();
    }, 1000);
  }

}
