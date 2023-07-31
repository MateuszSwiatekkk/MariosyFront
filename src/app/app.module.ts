import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { UsersListComponent } from './core/users-list/users-list.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { MariosCardComponent } from './shared/marios-card/marios-card.component';
import { MariosListComponent } from './shared/marios-list/marios-list.component';
import { LoginComponent } from './core/login/login.component';
import { AddMariosComponent } from './core/add-marios/add-marios.component';
import { UserRecipientsComponent } from './core/user-recipients/user-recipients.component';
import { FormsModule } from '@angular/forms';

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
    UserRecipientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
