import { TestBed, inject } from '@angular/core/testing';

import { CadastroGuardService } from './cadastro-guard.service';

describe('CadastroGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroGuardService]
    });
  });

  it('should be created', inject([CadastroGuardService], (service: CadastroGuardService) => {
    expect(service).toBeTruthy();
  }));
});
