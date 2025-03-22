import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const _auth=inject(AuthService)
  const _router=inject(Router)
   if(_auth.isLoggedIn() == true){
      return true;
  }else{
  _router.navigate(['/login'])
  return false
  }
};
