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

  user: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required],
      verifyCode: ['', Validators.required]
    });
  }

  login() {
    console.log('开始登录！！');
    this.http.get('http://localhost:8080/user/hello').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
    console.log('登录成功！！');
  }

  onSubmit() {
    console.log('Form Submitted!');
  }
}
