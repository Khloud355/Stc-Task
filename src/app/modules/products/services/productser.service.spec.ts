import { TestBed } from '@angular/core/testing';

import { ProductserService } from './products.service';

describe('ProductserService', () => {
  let service: ProductserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
