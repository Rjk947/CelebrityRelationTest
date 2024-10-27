import { TestBed } from '@angular/core/testing';

import { CelebrityDataService } from './celebrity-data.service';

describe('CelebrityDataService', () => {
  let service: CelebrityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelebrityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
