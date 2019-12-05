import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientacceptComponent } from './patientaccept.component';

describe('PatientacceptComponent', () => {
  let component: PatientacceptComponent;
  let fixture: ComponentFixture<PatientacceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientacceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
