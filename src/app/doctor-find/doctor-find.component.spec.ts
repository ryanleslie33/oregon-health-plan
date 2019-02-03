import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFindComponent } from './doctor-find.component';

describe('DoctorFindComponent', () => {
  let component: DoctorFindComponent;
  let fixture: ComponentFixture<DoctorFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
