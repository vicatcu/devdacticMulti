import { TestBed } from '@angular/core/testing';

import { OtherLibService } from './other-lib.service';

describe('OtherLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherLibService = TestBed.get(OtherLibService);
    expect(service).toBeTruthy();
  });
});
