import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { AppComponent} from '../../app.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(public auth: AuthService, public appcomponent: AppComponent) {
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
