import { TestBed } from '@angular/core/testing';

import { IndoorproductsService } from './indoorproducts.service';

describe('IndoorproductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndoorproductsService = TestBed.get(IndoorproductsService);
    expect(service).toBeTruthy();
  });
});
