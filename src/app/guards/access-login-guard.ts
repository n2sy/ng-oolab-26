import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const accessLoginGuard: CanActivateFn = (route, state) => {
  let authSer = inject(Auth);
  if (authSer.estConnecte()) return false;
  return true;
};
