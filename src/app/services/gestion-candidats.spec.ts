import { TestBed } from '@angular/core/testing';

import { GestionCandidats } from './gestion-candidats';

describe('GestionCandidats', () => {
  let service: GestionCandidats;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionCandidats);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
