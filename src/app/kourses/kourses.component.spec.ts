import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoursesComponent } from './kourses.component';

describe('KoursesComponent', () => {
  let component: KoursesComponent;
  let fixture: ComponentFixture<KoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
