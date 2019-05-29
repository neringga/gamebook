import { TestBed } from '@angular/core/testing';

import { ActiveAdService } from './active-ad.service';

describe('ActiveAdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveAdService = TestBed.get(ActiveAdService);
    expect(service).toBeTruthy();
  });
});
