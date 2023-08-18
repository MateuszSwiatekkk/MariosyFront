import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private keyCloakService :KeycloakService) {
}
  logout() {
    this.keyCloakService.logout("http://localhost:4200/")
  }
}
