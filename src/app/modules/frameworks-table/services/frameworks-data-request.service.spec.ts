import { TestBed } from '@angular/core/testing';

import { FramworksDataRequestService } from './frameworks-data-request.service';

describe('FramworksDataRequestService', () => {
  let service: FramworksDataRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FramworksDataRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
