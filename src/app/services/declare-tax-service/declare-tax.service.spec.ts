import { TestBed } from '@angular/core/testing';

import { DeclareTaxService } from './declare-tax.service';

describe('DeclareTaxService', () => {
  let service: DeclareTaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclareTaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
