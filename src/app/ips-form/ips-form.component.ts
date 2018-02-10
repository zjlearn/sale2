import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ips-form',
  templateUrl: './ips-form.component.html',
  styleUrls: ['./ips-form.component.css']
})
export class IpsFormComponent implements OnInit, AfterViewInit {

  sign: string;
  request: string;
  operationType: string;
  merchantID: string;

  ipsForm: FormGroup;

  constructor(private elRef: ElementRef, private http: HttpClient,
              private _formBuilder: FormBuilder) {
    this.ipsForm = this._formBuilder.group({
      sign: [''],
      request: [''],
      operationType: [''],
      merchantID: ['']
    });
    this.http.get('http://localhost:4200/xhr/ips/getSign').subscribe(data => {
      this.sign = data['sign'];
      this.request = data['request'];
      this.operationType = data['operationType'];
      this.merchantID = data['merchantID'];
    });
    // this.http.get('http://localhost:4200/xhr/ips/getSign').subscribe(data => {
    //   this.ipsForm.get('sign').setValue(data['sign']);
    //   this.ipsForm.get('request').setValue(data['request']);
    //   this.ipsForm.get('operationType').setValue(data['operationType']);
    //   this.ipsForm.get('merchantID').setValue(data['merchantID']);
    // });
  }

  ngOnInit() {
    console.log('get sign');
  }


  ngAfterViewInit(): void {
    setTimeout(100);
    const test = this.elRef.nativeElement.querySelector('#ipsForm');
    console.log(test);
    console.log('haha ipsForm');
    console.log(this.sign);
    console.log(this.request);
    console.log(this.merchantID);
    setTimeout(() => {
      test.submit();
    }, 500);
    // test.submit();
  }
}
