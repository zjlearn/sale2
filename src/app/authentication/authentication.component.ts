import {Component, OnInit} from '@angular/core';
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

  constructor(private http: HttpClient,
              private _formBuilder: FormBuilder) {
    this.authForm = this._formBuilder.group({
      name: [''],
      idCard: [''],
    });
  }

  ngOnInit() {
  }

  /**
   * 实名认证的过程， 该过程会请求后端， 计算相应的sign, 并进行加密
   */
  auth() {

  }

}
