import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInvestComponent } from './my-invest.component';

describe('MyInvestComponent', () => {
  let component: MyInvestComponent;
  let fixture: ComponentFixture<MyInvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
