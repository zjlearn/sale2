import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Result} from '../../shared/models/Result';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawForm: FormGroup;
  balance: number;
  charges: number;
  merchantID: string;
  operationType = 'user.register';
  request: string;
  sign: string;

  constructor(private http: HttpClient,
              private _formBuilder: FormBuilder,
              private elRef: ElementRef) {
    this.withdrawForm = this._formBuilder.group({
      amount: [''],
    });
    this.balance = 0;
    this.charges = 0;
  }

  ngOnInit() {

  }

  withdraw() {
    this.http.post<Result>('http://localhost:4200/xhr/ips/deposit/sign', this.withdrawForm.value).subscribe(result => {
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
