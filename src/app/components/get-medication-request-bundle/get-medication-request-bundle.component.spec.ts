import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMedicationRequestBundleComponent } from './get-medication-request-bundle.component';

describe('GetMedicationRequestBundleComponent', () => {
  let component: GetMedicationRequestBundleComponent;
  let fixture: ComponentFixture<GetMedicationRequestBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMedicationRequestBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMedicationRequestBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
