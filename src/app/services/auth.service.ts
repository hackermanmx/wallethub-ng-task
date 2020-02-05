import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = false;

  constructor(private router: Router) {}

  login() {
    this.isLoggedin = true;
  }

  logout() {
    this.isLoggedin = false;

    this.router.navigate(['/']).then(() => {
      this.router.navigate(['/home']).then();
    });
  }
}
