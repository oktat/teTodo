import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!isLoggedIn()) {
    return false;
  }
  return true;
};

function isLoggedIn() {
  if (localStorage.getItem('token') === null) {
    return false;
  }    
  return true;
}