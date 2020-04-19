
/** Needed Libs */
import { AuthService } from './shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { ApiService } from './shared/services/api/api.service';
import { Patient } from './models/patient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  arrayForAnyResponse: any = [];
  postPatientData: Patient;

  constructor(public auth: AuthService, public api: ApiService, public router: Router) {

  }

  postPatient() {
    this.api
      .postPatient(this.postPatientData)
      .subscribe(response => {
        return this.arrayForAnyResponse.push(response);
      });
  }


  updatePatient(id: any) {
    this.api
      .updatePatient(id, this.postPatientData)
      .subscribe(response => {
        return this.arrayForAnyResponse.push(response);
      });
  }
}
