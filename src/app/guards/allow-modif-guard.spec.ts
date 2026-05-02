import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { allowModifGuard } from './allow-modif-guard';

describe('allowModifGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => allowModifGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
