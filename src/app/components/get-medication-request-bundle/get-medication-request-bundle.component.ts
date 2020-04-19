import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';
import {MedicationRequest} from '../../models/medication.request.model';

@Component({
  selector: 'app-get-medication-request-bundle',
  templateUrl: './get-medication-request-bundle.component.html',
  styleUrls: ['./get-medication-request-bundle.component.css']
})
export class GetMedicationRequestBundleComponent implements OnInit {
  medicationRequestArray: MedicationRequest[] = [];
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.getMedicationRequestBundle();
  }

  getMedicationRequestBundle() {
    // this.medicationRequestsArray.length = 0;
    this.appcomponent.api.getMedicationRequestBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );

        // @ts-ignore
        this.medicationRequestArray = response.body.entry;

        console.log('Receptek száma: ' + this.medicationRequestArray.length);
        console.log(this.medicationRequestArray);
      });
  }
}



