import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMedicationRequestComponent } from './post-medication-request.component';

describe('PostMedicationRequestComponent', () => {
  let component: PostMedicationRequestComponent;
  let fixture: ComponentFixture<PostMedicationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostMedicationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostMedicationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
