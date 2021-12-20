import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UpadateUserComponent } from './upadate-user/upadate-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'users',component:UserListComponent},
  {path:'createuser',component:CreateUserComponent},
  {path:'updateUser/:userId',component:UpadateUserComponent},
  {path:'userDetails/:userId',component:SearchUserComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
