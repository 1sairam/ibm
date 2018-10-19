import { TestBed } from '@angular/core/testing';

import { CaseIdService } from './case-id.service';

describe('CaseIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseIdService = TestBed.get(CaseIdService);
    expect(service).toBeTruthy();
  });
});
