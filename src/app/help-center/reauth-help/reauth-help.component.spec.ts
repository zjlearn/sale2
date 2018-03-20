import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReauthHelpComponent } from './reauth-help.component';

describe('ReauthHelpComponent', () => {
  let component: ReauthHelpComponent;
  let fixture: ComponentFixture<ReauthHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReauthHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReauthHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
