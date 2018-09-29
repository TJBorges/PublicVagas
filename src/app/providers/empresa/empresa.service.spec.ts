import { TestBed, inject } from '@angular/core/testing';

import { EmpresaService } from './empresa.service';

describe('EmpresaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpresaService]
    });
  });

  it('should be created', inject([EmpresaService], (service: EmpresaService) => {
    expect(service).toBeTruthy();
  }));
});
