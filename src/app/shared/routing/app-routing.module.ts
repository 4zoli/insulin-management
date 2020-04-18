import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from '../../components/user-profile/user-profile.component';
import {AuthGuard} from '../guard/auth.guard';
// tslint:disable-next-line:max-line-length
import {PostMedicationAdministrationComponent} from '../../components/post-medication-administration/post-medication-administration.component';
import {LoginComponent} from '../../components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent,  canActivate: [AuthGuard] },
  { path: 'post-medication-administration', component: PostMedicationAdministrationComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

