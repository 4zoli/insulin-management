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
    console.log('user level' + this.appcomponent.userLevel);
    this.reloadRequests();
    }

  getMedicationRequestBundle(queryParams: any) {
    // this.medicationRequestsArray.length = 0;
    this.appcomponent.api.getMedicationRequestBundle(queryParams)
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.medicationRequestArray = response.body.entry;

        // console.log('Receptek száma: ' + this.medicationRequestArray.length);
        // console.log(this.medicationRequestArray);
      });
  }

  deleteMedicationRequest(id: any) {
    this.appcomponent.api
      .deleteMedicationRequest(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
    this.medicationRequestArray.length = 0;
    this.reloadRequests();
  }

  reloadRequests() {
    // tslint:disable-next-line:triple-equals
    this.appcomponent.userLevel == 1 ?
      this.getMedicationRequestBundle('') :
      this.getMedicationRequestBundle('?patient=' + this.appcomponent.userEmail);
  }
}
