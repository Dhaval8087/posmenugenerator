import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgButtonComponent } from './mg-button.component';

describe('MgButtonComponent', () => {
  let component: MgButtonComponent;
  let fixture: ComponentFixture<MgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
