import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

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
    this.http.post('http://localhost:4200/xhr/ips/userRegister', this.authForm.value).subscribe(data => {
      this.sign = data['sign'];
      this.request = data['request'];
      this.operationType = data['operationType'];
      this.merchantID = data['merchantID'];
    });
    this.ipsFormSubmit();
  }

  /**
   *该函数用于提交该表单
   */
  ipsFormSubmit() {
    setTimeout(100);
    const test = this.elRef.nativeElement.querySelector('#ipsForm');
    console.log(this.sign);
    console.log(this.request);
    console.log(this.merchantID);
    setTimeout(() => {
      test.submit();
    }, 500);
  }

}
