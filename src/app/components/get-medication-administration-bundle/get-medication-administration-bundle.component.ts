import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {MedicationAdministration} from '../../models/medication.administration.model';

@Component({
  selector: 'app-get-medication-administration-bundle',
  templateUrl: './get-medication-administration-bundle.component.html',
  styleUrls: ['./get-medication-administration-bundle.component.css']
})
export class GetMedicationAdministrationBundleComponent implements OnInit {
  medicationAdministrationArray: MedicationAdministration[] = [];
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.getMedicationAdministrationBundle();
  }

  getMedicationAdministrationBundle() {
    // @ts-ignore
    this.appcomponent.api.getMedicationAdministrationBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.medicationAdministrationArray = response.body.entry;

        console.log('Recept adminisztrációs tömb elemei: ' + this.medicationAdministrationArray.length);
        console.log(this.medicationAdministrationArray);
      });
  }
}
