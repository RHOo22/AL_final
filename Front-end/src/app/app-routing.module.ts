import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { AssociationsListComponent } from './associations-list/associations-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'users', component: UsersListComponent, canActivate: [authGuard] },
  { path: 'user/:id', component: UserDetailsComponent }, 
  { path: 'associations', component: AssociationsListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
