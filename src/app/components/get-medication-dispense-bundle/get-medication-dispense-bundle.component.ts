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
  private total: number;
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.reloadDispenses();
  }

  getMedicationDispenseBundle(queryParams: any) {
    this.appcomponent.api.getMedicationDispenseBundle(queryParams)
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );

        // @ts-ignore
        this.medicationDispenseArray = response.body.entry;
        // @ts-ignore
        this.total = response.body.total;
        console.log('Recept kiváltások száma: ' + this.medicationDispenseArray.length);
        console.log(this.medicationDispenseArray);
      });
  }

  deleteMedicationDispense(id: any) {
    this.appcomponent.api
      .deleteMedicationDispense(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
    this.medicationDispenseArray.length = 0;
    this.reloadDispenses();
  }

  reloadDispenses() {
    // tslint:disable-next-line:triple-equals
    this.appcomponent.userLevel == 1 ?
      this.getMedicationDispenseBundle('') :
      this.getMedicationDispenseBundle('?patient=' + this.appcomponent.userEmail);
  }
}
