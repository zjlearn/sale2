import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Result} from '../../shared/models/Result';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  depositForm: FormGroup;
  balance: number;
  merchantID: string;
  operationType = 'user.register';
  request: string;
  sign: string;

  constructor(private http: HttpClient,
              private _formBuilder: FormBuilder,
              private elRef: ElementRef) {
    this.depositForm = this._formBuilder.group({
      amount: [''],
    });
    this.balance = 0;
  }

  ngOnInit() {

  }

  deposit() {
    this.http.post<Result>('http://localhost:4200/xhr/ips/deposit/sign', this.depositForm.value).subscribe(result => {
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
