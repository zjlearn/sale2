import {Component, ElementRef, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {

  userInfoForm: FormGroup;
  authenForm: FormGroup;

  ipsForm: FormGroup;

  sign: string;
  request: string;
  operationType: string;
  merchantID: string;

  constructor(private _formBuilder: FormBuilder,
              private http: HttpClient,
              private elRef: ElementRef,
              private route: ActivatedRoute,
              private router: Router) {
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
    this.ipsForm = this._formBuilder.group({
      sign: [''],
      request: [''],
      operationType: [''],
      merchantID: ['']
    })
    ;
  }

  // 注册逻辑
  register() {
    this.http.post('http://localhost:4200/xhr/user/register', this.userInfoForm.value).subscribe(data => {
      console.log(data);
    });
    console.log('注册成功！！');
  }

  // 实名认证过程
  auth() {
    // this.http.post('http://localhost:4200/xhr/userRegister/sign', this.authenForm.value).subscribe(data => {
    //   this.sign = data['sign'];
    //   this.request = data['request'];
    //   this.operationType = data['operationType'];
    //   this.merchantID = data['merchantID'];
    // });
    this.http.post('http://localhost:4200/xhr/userRegister/sign', this.authenForm.value).subscribe(data => {
      this.ipsForm.get('sign').setValue( data['sign']);
      this.ipsForm.get('request').setValue(data['request']);
      this.ipsForm.get('operationType').setValue(data['operationType']);
      this.ipsForm.get('merchantID').setValue(data['merchantID']);
    });
    this.router.navigate(['/ipsForm']);
  }

  ipsSubmit(event: any) {
    // 自动提交表单
    console.log(event)
    const test = this.elRef.nativeElement.querySelector('#ipsForm');
    console.log(test.valueOf());
    console.log('haha ipsForm');
    test.submit();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    let notFirstchange = true;
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        console.log(`Initial value of ${propName} set to ${to}`);
        break;
      } else {
        notFirstchange = false;
        const from = JSON.stringify(changedProp.previousValue);
        console.log(`${propName} changed from ${from} to ${to}`);
      }
    }
    if (! notFirstchange) {
      // // 自动提交表单
      const test = this.elRef.nativeElement.querySelector('#ipsForm');
      console.log(test);
      console.log('haha ipsForm');
      test.submit();
    }
  }

}
