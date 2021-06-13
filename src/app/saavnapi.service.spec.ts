import { TestBed } from '@angular/core/testing';

import { SaavnapiService } from './saavnapi.service';

describe('SaavnapiService', () => {
  let service: SaavnapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaavnapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
