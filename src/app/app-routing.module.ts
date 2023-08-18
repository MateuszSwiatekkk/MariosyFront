import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AddMariosComponent } from "./components/add-marios/add-marios.component";
import { SentMariosComponent } from "./components/sent-marios/sent-marios.component";
import { ReceivedMariosComponent } from "./components/received-marios/received-marios.component";

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'users', component : UsersListComponent },
  { path:'login', component: LoginComponent },
  { path:'createMarios', component: AddMariosComponent },
  { path:'sentMarios', component: SentMariosComponent },
  { path:'receivedMarios', component: ReceivedMariosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
