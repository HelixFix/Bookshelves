import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}
  /* A guard that checks if the user is logged in or not. */
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return new Promise((resolve, _reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/auth', 'signin']);
          resolve(false);
        }
      });
    });
  }
}
