import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayemployeeComponent } from './displayemployee.component';

describe('DisplayemployeeComponent', () => {
  let component: DisplayemployeeComponent;
  let fixture: ComponentFixture<DisplayemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
