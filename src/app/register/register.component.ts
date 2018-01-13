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

  auth(): Observable<any> {
    this.http.get('http://localhost:4200/xhr/getSign').subscribe(data => {
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

  t() {
    this.request = 'JOlwQRfCkAR0MptjkXsrpn3En+3HzZiIgT79OshEPCqb7/SOo1SXq/Mci0RZJ4c3ttSLM+ghny5EJfY2RnVaoyh3yE5YfNcX90ztglbddDG5h2ogLUHgeuVUm4ZRdRuQpTJmCkd9DCy24Bf++lhwDT5kx2UYs43Z+INmw/Iv4wA/dJVBK0X8b6Gm2PheooZwb29hSiNsaXMywqB+3owoaZnd0Ea846GHmMflEx6uRFYrdXmeEeMdB67/1F/S/osFSULScaKtiQ6USgOPGYsRENk4pKZp/4a7N1Vob5T6dDGliZQkFuxs1QdJxuR8HGqt68eAKC2E/Y4bvg3Jw0fp7DSmu8OFrAnAF17CEyCz2WIjR8bbINOkH7UroNzdxsMzOXAtAnZ2g6vtuuAzrU/3YdXrza6WN8PCvLtMzEhEzNhML97imG+AQfST6BjlARQi1Fj5OSps8Xp9dS11OAYzrqq4+JzH+kpvP9p7ex0CBkBckn08DU04H/jPuua4bA89TYwSKPkaZxyAK4M8YDkldozAuM/86JW9EsbxPc9oZal+WPGf6987k8d+sRaV1qmFc8u6ZU4447ge5sHhCVo1eHYUwJULAYlOXwpnz0A/SH9HqJkkbewmEEbuQ15naYvOf+8HisSw9RKPblM0ps+lIlvU/7LGN/VFw36EbrE1wvgQfe2B2Tlc72kX4Xf0M5mMAH2p84H84sV9CIfqj9NEcGatYeaSKnk5oXbLJAY7AOuvP5bz4eo47JBMa/hx3wE6aYsb9AfEulMKzsmTEE9f47MfxzJ407NnlyVekjp0e05Jf5sUk2Ko+ctHP0KhflklWEpxw1LPmoH3LcOFegf0cXVW4rvbPGjbK/m4WPx/KTOzacVrUurh9JxlEsgobdQ/FErv+Na8eY+AbsoDibpiL+1tCbWLmw0LwS6bkvFB7dHbaynmax7miZ6ibkdupsIrj6RIz0Z9wFnNKgCTYLm1BWUgn8+oaO9B14EyArOmAhhe4+uag12GmJqxhedbeiyA';
    this.sign = '66a6e343600adebf35b2b98e2b0a0fd0d8dbb4106e94770f1a2500b6b3047a03fdfc12573ed735349ceb104323c309bae37625f0ac1584394a86cdb33f408a0b26cfef2f9dc8052f05683bbc74ab5a5644bbb57f74cf93ad7e1ea80b445e81b9214fdb5def4c5d0113790861aefd68aac48abd379bc85f5f5bc57605804b83c7';
    this.merchantID = '1186570022';
    this.operationType = 'user.register';
    const body = new HttpParams()
      .set('sign', this.sign)
      .set('request', this.request)
      .set('merchantID', this.merchantID)
      .set('operationType', this.operationType);
    return this.http.post('http://localhost:4200/p2p-dep/gateway.htm', body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded'), observe: 'response'
    }).subscribe();
  }
}
