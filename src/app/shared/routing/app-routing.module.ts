import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from '../../components/user-profile/user-profile.component';
import {AuthGuard} from '../guard/auth.guard';


const routes: Routes = [
  { path: 'app-user-profile', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

