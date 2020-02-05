import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {AuthService} from './services/auth.service';
import {fadeAnimation} from './common/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // Has page transition animations.
    // Here please make 2 examples,
    // one with angular- animations
    fadeAnimation
  ]
})
export class AppComponent implements OnChanges {
  isLogged = false;

  constructor(private authService: AuthService) {
    this.isLogged = authService.isLoggedin;
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }

  logout() {
    this.authService.logout();
  }

  setLogIn(isLogged) {
    this.isLogged = isLogged;
  }
}
