import { TestBed } from '@angular/core/testing';

import { AcademyLibService } from './academy-lib.service';

describe('AcademyLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcademyLibService = TestBed.get(AcademyLibService);
    expect(service).toBeTruthy();
  });
});
