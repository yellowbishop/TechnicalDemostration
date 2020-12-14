import { TestBed } from '@angular/core/testing';

import { FramworksService } from './frameworks.service';

describe('FramworksService', () => {
  let service: FramworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FramworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
