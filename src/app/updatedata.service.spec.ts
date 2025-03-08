import { TestBed } from '@angular/core/testing';

import { UpdatedataService } from './updatedata.service';

describe('UpdatedataService', () => {
  let service: UpdatedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
