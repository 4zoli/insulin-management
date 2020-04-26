import { Component } from '@angular/core';
import { MedicationDispense } from '../../models/medication.dispense.model';
import {AppComponent} from '../../app.component';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-post-medication-dispense',
  templateUrl: './post-put-medication-dispense.component.html',
  styleUrls: ['./post-put-medication-dispense.component.css']
})
export class PostPutMedicationDispenseComponent {
  // tslint:disable-next-line:max-line-length
  constructor(public appcomponent: AppComponent) {
  }

  form = new FormGroup({});

  dispenseModel = {
    resourceType: 'MedicationDispense',
    extension: [
      {
        url: 'www.Szakdolgozat.egyszerusitese.celjabol.keszitett.hatralevo.mennyiseg.szamlalo',
        value: '1800'
      }
    ],
    id: '1',
    status: 'in-progress',
    medicationCodeableConcept: {
      coding: [
        {
          display: 'Lantus 100 egység/ml injekció'
        }
      ]
    },
    subject: {
      reference: 'Patient/1',
      display: 'Vezetéknév Keresztnév'
    },
    performer: [
      {
        actor: {
          reference: 'Practitioner/1',
        },
        onBehalfOf: {
          reference: 'Organization/1'
        }
      }
    ],
    authorizingPrescription: [
      {
        reference: 'MedicationRequest/1'
      }
    ],
    quantity: {
      value: 18,
      code: 'ml'
    },
    daysSupply: {
      value: 30,
      unit: 'Day',
      code: 'd'
    },
    whenPrepared: '2020-04-19T07:13:00+05:00',
    dosageInstruction: [
      {
        sequence: 1,
        text: '20 Units SC three times daily',
        timing: {
          repeat: {
            frequency: 3,
            period: 1,
            periodUnit: 'd'
          }
        },
        doseQuantity: {
          value: 20,
          unit: 'U',
          code: 'U'
        }
      }
    ],
    meta: {
      versionId: '1',
      lastUpdated: '2020-04-15T21:50:48Z'
    }
  };

  postMedicationDispense(medicationDispenseData: MedicationDispense) {
    this.appcomponent.api
      .postMedicationDispense(medicationDispenseData)
      .subscribe(response => {
        this.appcomponent.snackBar.successMesage('Sikeres kiváltás!');
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  updateMedicationDispense(id: any, medicationDispense: MedicationDispense) {
    this.appcomponent.api
      .updateMedicationDispense(id, medicationDispense)
      .subscribe(response => {
        console.log(response);
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

}
