import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const allowModifGuard: CanActivateFn = (route, state) => {
  let authSer = inject(Auth);
  if (authSer.estConnecte()) return true;
  return false;
};
