import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCakesComponent } from './add-cakes/add-cakes.component';
import { AuthGuard } from './auth.guard';
import { CakesComponent } from './cakes/cakes.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UpdateCakesComponent } from './update-cakes/update-cakes.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'list-users',component: ListUsersComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'view-user',component: ViewUserComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'cakes',component: CakesComponent},
  {path:'add-cakes',component: AddCakesComponent},
  {path:'update-cakes/:id',component:UpdateCakesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
