import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './shared/header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UsersListComponent} from './components/users-list/users-list.component';
import {LoaderComponent} from './shared/loader/loader.component';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {MariosCardComponent} from './shared/marios-card/marios-card.component';
import {MariosListComponent} from './shared/marios-list/marios-list.component';
import {LoginComponent} from './components/login/login.component';
import {AddMariosComponent} from './components/add-marios/add-marios.component';
import {UserRecipientsComponent} from './components/user-recipients/user-recipients.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SentMariosComponent} from './components/sent-marios/sent-marios.component';
import {ReceivedMariosComponent} from './components/received-marios/received-marios.component';
import {BackButtonComponent} from './shared/back-button/back-button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MariosChipsComponent} from './components/marios-chips/marios-chips.component';
import {ModalaComponent} from './shared/modala/modala.component';
import {MatDialogModule} from "@angular/material/dialog";
import {KeycloakService} from 'keycloak-angular';
import {KeycloakInitService} from "./services/keycloak.service";

function initializeKeycloak(
  keycloak: KeycloakService,
  keycloakInitService: KeycloakInitService
): () => Promise<boolean> {
  return (): Promise<boolean> => keycloakInitService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UsersListComponent,
    LoaderComponent,
    MariosCardComponent,
    MariosListComponent,
    LoginComponent,
    AddMariosComponent,
    UserRecipientsComponent,
    SentMariosComponent,
    ReceivedMariosComponent,
    BackButtonComponent,
    MariosChipsComponent,
    ModalaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatLegacyChipsModule,
    MatDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService, KeycloakInitService],
  },
    KeycloakService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
