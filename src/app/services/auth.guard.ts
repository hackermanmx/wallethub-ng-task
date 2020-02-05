import {
    CanActivate, ActivatedRouteSnapshot,
    RouterStateSnapshot, Router, Route
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

// Demonstrates the usages of route guards
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService, private _router: Router) { }

  canActivate(): boolean {
    if (!this.service.isLoggedin) {
      this._router.navigate(['/not-found']);
      return false;
    }

    return true;
  }
}
