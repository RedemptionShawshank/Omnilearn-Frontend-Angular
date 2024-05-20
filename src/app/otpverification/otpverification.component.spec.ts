import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPverificationComponent } from './otpverification.component';

describe('OTPverificationComponent', () => {
  let component: OTPverificationComponent;
  let fixture: ComponentFixture<OTPverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OTPverificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OTPverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
