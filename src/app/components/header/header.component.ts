import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {AppComponent} from '../../app.component';

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

  showDeleteFromDatabaseComponent() {
    this.appcomponent.router.navigateByUrl('delete-from-database').then();
    console.log('delete-from-database');
  }


}
