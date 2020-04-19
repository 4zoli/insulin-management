import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPractitionerBundleComponent } from './get-practitioner-bundle.component';

describe('GetPractitionerBundleComponent', () => {
  let component: GetPractitionerBundleComponent;
  let fixture: ComponentFixture<GetPractitionerBundleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPractitionerBundleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPractitionerBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
