import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyLibComponent } from './academy-lib.component';

describe('AcademyLibComponent', () => {
  let component: AcademyLibComponent;
  let fixture: ComponentFixture<AcademyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademyLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
