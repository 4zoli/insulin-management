import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPatientBundleComponent } from './get-patient-bundle.component';

describe('GetPatientBundleComponent', () => {
  let component: GetPatientBundleComponent;
  let fixture: ComponentFixture<GetPatientBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPatientBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPatientBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
