import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { quitterFormGuard } from './quitter-form-guard';

describe('quitterFormGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => quitterFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
