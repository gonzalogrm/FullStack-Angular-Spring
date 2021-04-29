import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/model/about/about.component';
import { CreateUserComponent } from 'src/model/create-user/create-user.component';
import { UpdateUserComponent } from 'src/model/update-user/update-user.component';
import { UserListComponent } from 'src/model/user-list/user-list.component';

const routes: Routes = [
  {path: 'userlist', component: UserListComponent},
  //Por defecto, redirigimos a la lista de usuarios
  {path: '', redirectTo: 'userlist', pathMatch: 'full'},
  {path: 'createuser', component: CreateUserComponent},
  {path: 'updateuser/:id', component: UpdateUserComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
