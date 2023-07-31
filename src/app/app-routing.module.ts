import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { UsersListComponent } from "./core/users-list/users-list.component";
import { LoginComponent } from "./core/login/login.component";
import { AddMariosComponent } from "./core/add-marios/add-marios.component";
import { SentMariosComponent } from "./core/sent-marios/sent-marios.component";
import { ReceivedMariosComponent } from "./core/received-marios/received-marios.component";

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'users', component : UsersListComponent },
  { path:'login', component: LoginComponent },
  { path:'createMarios', component: AddMariosComponent },
  { path:'sentMarios', component: SentMariosComponent },
  { path:'receivedMarios', component: ReceivedMariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
