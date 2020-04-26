import { Component, OnInit } from '@angular/core';
import {GoogleAuthService} from '../../shared/services/google-auth/google-auth.service';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: GoogleAuthService, public appcomponent: AppComponent) {}

  ngOnInit(): void {

  }

  showPostPatientComponent() {
    this.appcomponent.router.navigateByUrl('post-patient').then();
    console.log('post-patient');
  }

  showPostMedicationRequestComponent() {
    this.appcomponent.router.navigateByUrl('post-medication-request').then();
    console.log('post-medication-request');
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
}
