/* tslint:disable */

/** Needed Libs */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from '../../components/user-profile/user-profile.component';
import {AuthGuard} from '../guard/auth.guard';

/** Components - Site */
import {LoginComponent} from '../../components/login/login.component';

/** Components - Functions - POST */
import {PostMedicationAdministrationComponent} from '../../components/post-medication-administration/post-medication-administration.component';
/** Components - Functions - GET */
import {GetMedicationAdministrationBundleComponent} from '../../components/get-medication-administration-bundle/get-medication-administration-bundle.component';
import {GetMedicationDispenseBundleComponent} from '../../components/get-medication-dispense-bundle/get-medication-dispense-bundle.component';
import {GetMedicationRequestBundleComponent} from '../../components/get-medication-request-bundle/get-medication-request-bundle.component';
import {GetPatientBundleComponent} from '../../components/get-patient-bundle/get-patient-bundle.component';
/** Components - Functions - DELETE */
import {DeleteFromDatabaseComponent} from "../../components/delete-from-database/delete-from-database.component";

/** Routes */
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user-profile', component: UserProfileComponent,  canActivate: [AuthGuard] },

  { path: 'post-medication-administration', component: PostMedicationAdministrationComponent, canActivate: [AuthGuard] },

  { path: 'get-medication-request-bundle', component: GetMedicationRequestBundleComponent, canActivate: [AuthGuard] },
  { path: 'get-medication-dispense-bundle', component: GetMedicationDispenseBundleComponent, canActivate: [AuthGuard] },
  { path: 'get-medication-administration-bundle', component: GetMedicationAdministrationBundleComponent, canActivate: [AuthGuard] },
  { path: 'get-patient-bundle', component: GetPatientBundleComponent, canActivate: [AuthGuard] },

  { path: 'delete-from-database', component: DeleteFromDatabaseComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

