import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMedicationAdministrationBundleComponent } from './get-medication-administration-bundle.component';

describe('GetMedicationAdministrationBundleComponent', () => {
  let component: GetMedicationAdministrationBundleComponent;
  let fixture: ComponentFixture<GetMedicationAdministrationBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMedicationAdministrationBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMedicationAdministrationBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
