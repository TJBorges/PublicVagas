import { TestBed, inject } from '@angular/core/testing';

import { VagaService } from './vaga.service';

describe('VagaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VagaService]
    });
  });

  it('should be created', inject([VagaService], (service: VagaService) => {
    expect(service).toBeTruthy();
  }));
});
