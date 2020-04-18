import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMedicationAdministrationComponent } from './post-medication-administration.component';

describe('PostMedicationAdministrationComponent', () => {
  let component: PostMedicationAdministrationComponent;
  let fixture: ComponentFixture<PostMedicationAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMedicationAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMedicationAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
