import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMedicationDispenseComponent } from './post-medication-dispense.component';

describe('PostMedicationDispenseComponent', () => {
  let component: PostMedicationDispenseComponent;
  let fixture: ComponentFixture<PostMedicationDispenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMedicationDispenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMedicationDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
