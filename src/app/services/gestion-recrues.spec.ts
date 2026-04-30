import { TestBed } from '@angular/core/testing';

import { GestionRecrues } from './gestion-recrues';

describe('GestionRecrues', () => {
  let service: GestionRecrues;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionRecrues);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
