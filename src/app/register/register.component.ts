import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfoForm: FormGroup;
  authenForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
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
    console.log('register');
  }

  auth() {
    console.log('register');
  }



}
