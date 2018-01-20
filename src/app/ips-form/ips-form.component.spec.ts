import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsFormComponent } from './ips-form.component';

describe('IpsFormComponent', () => {
  let component: IpsFormComponent;
  let fixture: ComponentFixture<IpsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
