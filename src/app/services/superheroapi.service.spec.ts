import { TestBed } from '@angular/core/testing';

import { SuperheroapiService } from './superheroapi.service';

describe('SuperheroapiService', () => {
  let service: SuperheroapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
