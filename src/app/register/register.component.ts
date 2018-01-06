import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfoForm: FormGroup;
  authenForm: FormGroup;

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
      name: [''],
      idCard: ['']
    });
  }

  register() {
    this.http.get('http://localhost:4200/xhr/user/hello').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
    console.log('注册成功！！');
    console.log('register');
  }

  auth() {
    console.log('register');
  }



}
