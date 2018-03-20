import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwHelpComponent } from './pw-help.component';

describe('PwHelpComponent', () => {
  let component: PwHelpComponent;
  let fixture: ComponentFixture<PwHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
