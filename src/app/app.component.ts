import {AuthService} from './shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api/api.service';
import { PatientBundle} from './models/patient.bundle.model';
import {MedicationRequestBundle} from './models/medication.request.bundle.model';
import {MedicationDispenseBundle} from './models/medication.dispense.bundle.model';
import {Patient} from './models/patient.model';
import {MedicationAdministration} from './models/medication.administration.model';
import {MedicationAdministrationBundle} from './models/medication.administration.bundle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  patientBundleArray: PatientBundle[] = [];
  medicationRequestBundleArray: MedicationRequestBundle[] = [];
  medicationDispenseBundleArray: MedicationDispenseBundle[] = [];
  medicationAdministrationBundleArray: MedicationAdministrationBundle[] = [];
  spresp: any = [];
  postPatientData: Patient;
  postMedicationAdministrationdata: MedicationAdministration;

  constructor(public auth: AuthService, private  api: ApiService) {
  }

  getPatientBundle() {
    this.patientBundleArray.length = 0;
    // @ts-ignore
    this.api.getPatientBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.patientBundleArray.push(response.body);

        console.log('Páciens tömb elemei: ' + this.patientBundleArray.length);
        console.log(this.patientBundleArray);
      });
  }

  getMedicationRequestBundle() {
    this.medicationRequestBundleArray.length = 0;
    // @ts-ignore
    this.api.getMedicationRequestBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.medicationRequestBundleArray.push(response.body);

        console.log('Recept tömb elemei: ' + this.medicationRequestBundleArray.length);
        console.log(this.medicationRequestBundleArray);
      });
  }

  getMedicationDispenseBundle() {
    this.medicationDispenseBundleArray.length = 0;
    // @ts-ignore
    this.api.getMedicationDispenseBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.medicationDispenseBundleArray.push(response.body);

        console.log('Recept kiváltások tömb elemei: ' + this.medicationDispenseBundleArray.length);
        console.log(this.medicationDispenseBundleArray);
      });
  }

  getMedicationAdministrationBundle() {
    this.medicationAdministrationBundleArray.length = 0;
    // @ts-ignore
    this.api.getMedicationAdministrationBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.medicationAdministrationBundleArray.push(response.body);

        console.log('Recept adminisztrációs tömb elemei: ' + this.medicationAdministrationBundleArray.length);
        console.log(this.medicationAdministrationBundleArray);
      });
  }

  postPatient() {
    this.api
      .postPatient(this.postPatientData)
      .subscribe(response => {
        return this.spresp.push(response);
      });
  }

  postMedicationAdministration(postMedicationAdministrationdata: MedicationAdministration) {
    this.api
      .postMedicationAdministration(postMedicationAdministrationdata)
      .subscribe(response => {
        return this.spresp.push(response);
      });
  }

  updatePatient(id: any) {
    this.api
      .updatePatient(id, this.postPatientData)
      .subscribe(response => {
        return this.spresp.push(response);
      });
  }

  deletePatient(id: any) {
    this.api
      .deletePatient(id)
      .subscribe(response => {
        return this.spresp.push(response);
      });
  }

  deleteMedicationAdministration(id: any) {
    this.api
      .deleteMedicationAdministration(id)
      .subscribe(response => {
        return this.spresp.push(response);
      });
  }

  deleteMedicationRequest(id: any) {
    this.api
      .deleteMedicationRequest(id)
      .subscribe(response => {
        return this.spresp.push(response);
      });
  }

  deleteMedicationDispense(id: any) {
    this.api
      .deleteMedicationDispense(id)
      .subscribe(response => {
        return this.spresp.push(response);
      });
  }
}
