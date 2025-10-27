import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedUser = JSON.parse(localStorage.getItem('user') || 'null');
  const router = inject(Router);

  if (loggedUser) {
    return true;
  }

  router.navigate(['/admin'])
  return false;

};
