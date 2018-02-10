import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRootComponent } from './my-root.component';

describe('MyRootComponent', () => {
  let component: MyRootComponent;
  let fixture: ComponentFixture<MyRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
