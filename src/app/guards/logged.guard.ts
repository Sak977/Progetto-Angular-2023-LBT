import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if (!authService.isUserLogged) {
    router.navigate(['/login']);
    snackBar.open("Per visualizzare il carrello è necessario l'accesso", 'OK');
    return false;
  }
  return true;
};
