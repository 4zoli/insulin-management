import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFromDatabaseComponent } from './delete-from-database.component';

describe('DeleteFromDatabaseComponent', () => {
  let component: DeleteFromDatabaseComponent;
  let fixture: ComponentFixture<DeleteFromDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFromDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFromDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
