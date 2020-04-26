import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPutMedicationDispenseComponent } from './post-put-medication-dispense.component';

describe('PostMedicationDispenseComponent', () => {
  let component: PostPutMedicationDispenseComponent;
  let fixture: ComponentFixture<PostPutMedicationDispenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPutMedicationDispenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPutMedicationDispenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
