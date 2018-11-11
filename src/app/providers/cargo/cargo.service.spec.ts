import { TestBed, inject } from '@angular/core/testing';

import { CargoService } from './cargo.service';

describe('CargoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargoService]
    });
  });

  it('should be created', inject([CargoService], (service: CargoService) => {
    expect(service).toBeTruthy();
  }));
});
