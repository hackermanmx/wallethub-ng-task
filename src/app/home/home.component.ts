import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {timer} from "rxjs/index";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogged = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLogged = this.authService.isLoggedin;
  }

  login() {
    timer(400).subscribe(() => {
      this.authService.login();
      this.isLogged = true;
    });
  }

  logout() {
    this.authService.logout();
  }
}
