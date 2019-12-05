import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPendingComponent } from './patient-pending.component';

describe('PatientPendingComponent', () => {
  let component: PatientPendingComponent;
  let fixture: ComponentFixture<PatientPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
