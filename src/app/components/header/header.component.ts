import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {AppComponent} from '../../app.component';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

  showPostMedicationAdministrationComponent() {
    this.appcomponent.router.navigateByUrl('post-medication-administration').then();
    console.log('post-medication-administration');
  }

  showPostMedicationDispenseComponent() {
    this.appcomponent.router.navigateByUrl('post-medication-dispense').then();
    console.log('post-medication-dispense');
  }

  showGetMedicationRequestBundleComponent() {
    this.appcomponent.router.navigateByUrl('get-medication-request-bundle').then();
    console.log('get-medication-request-bundle');
  }

  showGetMedicationDispenseBundleComponent() {
    this.appcomponent.router.navigateByUrl('get-medication-dispense-bundle').then();
    console.log('get-medication-dispense-bundle');
  }

  showGetMedicationAdministrationBundleComponent() {
    this.appcomponent.router.navigateByUrl('get-medication-administration-bundle').then();
    console.log('get-medication-administration-bundle');
  }

  showGetPatientComponent() {
    this.appcomponent.router.navigateByUrl('get-patient-bundle').then();
    console.log('get-patient');
  }

  showGetPractitionerComponent() {
    this.appcomponent.router.navigateByUrl('get-practitioner-bundle').then();
    console.log('get-practitioner');
  }

  showDeleteFromDatabaseComponent() {
    this.appcomponent.router.navigateByUrl('delete-from-database').then();
    console.log('delete-from-database');
  }


}
