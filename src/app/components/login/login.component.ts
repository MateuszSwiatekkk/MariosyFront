import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private keycloak: KeycloakService, private router: Router) {}

  async ngOnInit() {
    if (!await this.keycloak.isLoggedIn()) {
      await this.login();
    } else {
      await this.router.navigate(['/home']);
    }
  }

  async login() {
    try {
      await this.keycloak.login({
        redirectUri: 'http://localhost:4200/home'
      });
    } catch (error) {
      console.error('Login failed', error);
    }
  }
}
