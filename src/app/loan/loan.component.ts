import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanInfoForm: FormGroup;

  sign: string;
  request: string;
  operationType: string;
  merchantID: string;


  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.loanInfoForm = this._formBuilder.group({
      loanAmount: ['', Validators.required],
      expectRate: ['', Validators.required],
      loanType: ['', Validators.required],
      duration: ['', Validators.required],
      realName: [''],
      verifyCode: ['', Validators.required],
      position: ['', Validators.required],
      area: ['', Validators.required],
      carModel: ['', Validators.required],
    });
  }


  loan() {
    console.log('loan scueess!');
    console.log(this.loanInfoForm.value);
  }
}
