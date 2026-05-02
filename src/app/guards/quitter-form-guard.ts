import { CanDeactivateFn } from '@angular/router';

export const quitterFormGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  if (!component['isSubmitted']) {
    if (confirm("Vous n'avez pas soumis le formulaire... Voulez vous quitter quand même ?"))
      return true;
    return false;
  }
  return true;
};
