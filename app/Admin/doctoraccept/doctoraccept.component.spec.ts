import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoracceptComponent } from './doctoraccept.component';

describe('DoctoracceptComponent', () => {
  let component: DoctoracceptComponent;
  let fixture: ComponentFixture<DoctoracceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoracceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoracceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
