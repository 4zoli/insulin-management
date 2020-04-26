import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {MedicationAdministration} from '../../models/medication.administration.model';

@Component({
  selector: 'app-get-medication-administration-bundle',
  templateUrl: './get-medication-administration-bundle.component.html',
  styleUrls: ['./get-medication-administration-bundle.component.css']
})
export class GetMedicationAdministrationBundleComponent implements OnInit {
  queryParams: string;
  medicationAdministrationArray: MedicationAdministration[] = [];
  private total: number;
  constructor(public appcomponent: AppComponent) {
    console.log(this.appcomponent.userLevel == 1 ? 'Admin' : 'Felhasznalo');
    this.appcomponent.userLevel == 1 ? this.queryParams = '' : this.queryParams = '?patient=' + this.appcomponent.userEmail;
  }

  ngOnInit(): void {
    this.getMedicationAdministrationBundle(this.queryParams);
  }

  getMedicationAdministrationBundle(queryParams: any) {
    this.appcomponent.api.getMedicationAdministrationBundle(queryParams)
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.total = response.body.total;
        // @ts-ignore
        this.medicationAdministrationArray = response.body.entry;

        console.log('Recept adminisztrációs tömb elemei: ' + this.medicationAdministrationArray.length);
        console.log(this.medicationAdministrationArray);
      });
  }

  deleteMedicationAdministration(id: any) {
    this.appcomponent.api
      .deleteMedicationAdministration(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
    this.medicationAdministrationArray.length = 0;
    this.getMedicationAdministrationBundle(this.queryParams);
  }
}
