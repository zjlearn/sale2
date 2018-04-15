import {Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Result} from '../../shared/models/Result';

@Component({
  selector: 'app-my-loan',
  templateUrl: './my-loan.component.html',
  styleUrls: ['./my-loan.component.css']
})
export class MyLoanComponent implements OnInit {

  merchantID: string;
  operationType = 'user.register';
  request: string;
  sign: string;

  constructor(private http: HttpClient,
              private _formBuilder: FormBuilder,
              private elRef: ElementRef) {
  }

  ngOnInit() {

  }

  public regProject() {
    this.http.post<Result>('http://localhost:4200/xhr/ips/regProject/sign', {}).subscribe(result => {
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
