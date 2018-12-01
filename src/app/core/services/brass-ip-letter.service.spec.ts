import { TestBed } from '@angular/core/testing';

import { BrassIpLetterService } from './brass-ip-letter.service';

describe('BrassIpLetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrassIpLetterService = TestBed.get(BrassIpLetterService);
    expect(service).toBeTruthy();
  });
});
