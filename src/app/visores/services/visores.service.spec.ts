import { TestBed } from '@angular/core/testing';

import { VisoresService } from './visores.service';

describe('VisoresService', () => {
  let service: VisoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
