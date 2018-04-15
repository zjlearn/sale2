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

  constructor(private _formBuilder: FormBuilder, private http: HttpClient) {
  }

  ngOnInit() {
    this.loanInfoForm = this._formBuilder.group({
      loanAmount: ['', Validators.required],
      loanRemark: ['', Validators.required],
      duration: ['', Validators.required],
      userName: [''],
      mobile: ['', Validators.required],
      district: ['', Validators.required]
    });
  }


  loan() {
    this.http.post('http://localhost:4200/xhr/loanBill/add', this.loanInfoForm.value).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      console.log('loan scueess!');
    });
  }
}
