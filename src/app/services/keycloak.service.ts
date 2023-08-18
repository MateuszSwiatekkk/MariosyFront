import { Injectable } from '@angular/core';
import { KeycloakService, KeycloakOptions } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class KeycloakInitService {
  constructor(private keycloak: KeycloakService) {}

  init(): Promise<boolean> {
    const keycloakOptions: KeycloakOptions = {
      config: {
        url: 'http://localhost:8080/',
        realm: 'deloitte',
        clientId: 'marios-security'
      },
      initOptions: {
        onLoad: 'check-sso',
      },
      bearerExcludedUrls: [],
    };

    return this.keycloak.init(keycloakOptions);
  }
}
