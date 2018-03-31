import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ips-form',
  templateUrl: './ips-form.component.html',
  styleUrls: ['./ips-form.component.css']
})
export class IpsFormComponent implements OnInit, AfterViewInit {

  @Input()
  sign: string;
  @Input()
  request: string;
  @Input()
  operationType: string;
  @Input()
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
  }

  /**
   *该函数用于提交该表单
   */
  submit() {
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
  }
}
