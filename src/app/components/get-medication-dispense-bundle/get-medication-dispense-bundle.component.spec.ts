import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMedicationDispenseBundleComponent } from './get-medication-dispense-bundle.component';

describe('GetMedicationDispenseBundleComponent', () => {
  let component: GetMedicationDispenseBundleComponent;
  let fixture: ComponentFixture<GetMedicationDispenseBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMedicationDispenseBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMedicationDispenseBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
