import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { AppComponent} from '../../app.component';
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  patientIdForField: string;
  medicationAdministrationIdForField: string;
  medicationRequestIdForField: string;
  medicationDispenseIdForField: string;

  constructor(public auth: AuthService, public appcomponent: AppComponent, private router: Router) {}

  showMedicationAdministrationComponent() {
    this.router.navigateByUrl('post-medication-administration');
    console.log('HELO');
  }

  ngOnInit(): void {}

  isBundleArraysEmpty(): boolean {
    return (
      this.appcomponent.medicationAdministrationBundleArray.length == 0
      && this.appcomponent.medicationDispenseBundleArray.length == 0
      && this.appcomponent.medicationRequestBundleArray.length == 0
      && this.appcomponent.patientBundleArray.length == 0
    );
  }

}
