import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';
import {MedicationDispense} from '../../models/medication.dispense.model';

@Component({
  selector: 'app-get-medication-dispense-bundle',
  templateUrl: './get-medication-dispense-bundle.component.html',
  styleUrls: ['./get-medication-dispense-bundle.component.css']
})
export class GetMedicationDispenseBundleComponent implements OnInit {
  medicationDispenseArray: MedicationDispense[] = [];
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.getMedicationDispenseBundle();
  }
  getMedicationDispenseBundle() {
    this.appcomponent.api.getMedicationDispenseBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );

        // @ts-ignore
        this.medicationDispenseArray = response.body.entry;

        console.log('Recept kiváltások száma: ' + this.medicationDispenseArray.length);
        console.log(this.medicationDispenseArray);
      });
  }
}
