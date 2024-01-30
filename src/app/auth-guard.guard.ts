import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/authentication/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const routes: Router = inject(Router);
  const auth: AuthService = inject(AuthService);

  if(auth.isAuthenticated()){
    return true;
  }
  else{
    routes.navigate(['']);
    return false;
  }
};
