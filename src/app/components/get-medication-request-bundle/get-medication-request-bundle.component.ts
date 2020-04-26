import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';
import {MedicationRequest} from '../../models/medication.request.model';
import {FormGroup} from '@angular/forms';
import {MedicationDispense} from '../../models/medication.dispense.model';

@Component({
  selector: 'app-get-medication-request-bundle',
  templateUrl: './get-medication-request-bundle.component.html',
  styleUrls: ['./get-medication-request-bundle.component.css']
})

export class GetMedicationRequestBundleComponent implements OnInit {
  medicationRequestArray: MedicationRequest[] = [];
  public updateRequestData: any = {};
  constructor(public appcomponent: AppComponent) { }

  dispenseModel = {
    resourceType: 'MedicationDispense',
    id: '1',
    status: 'completed',
    medicationCodeableConcept: {
      coding: [
        {
          display: 'Lantus 100 unit/ml injectable solution'
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
      value: 10,
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

  requestModel = {
    resourceType: 'MedicationRequest',
    id: '1',
    status: 'active',
    intent: 'order',
    medicationCodeableConcept: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '705129',
          display: 'Készítmény neve'
        }
      ],
    },
    subject: {
      reference: 'Patient/email'
    },
    authoredOn: new Date(),
    requester: {
      agent: {
        reference: 'Practitioner/' + this.appcomponent.userEmail,
      },
      onBehalfOf: {
        reference: ''
      }
    },
    meta: {
      versionId: '1',
      lastUpdated: new Date()
    }
  };

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

  postMedicationDispense(medicationDispenseData: MedicationDispense) {
    this.appcomponent.api
      .postMedicationDispense(medicationDispenseData)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  updateMedicationRequest(id: any, medicationRequest: MedicationRequest) {
    this.appcomponent.api
      .updateMedicationRequest(id, medicationRequest)
      .subscribe(response => {
        console.log('return ');
        console.log(response);
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  makePrescriptionDispense(medicationRequest: MedicationRequest) {
    this.dispenseModel.medicationCodeableConcept.coding[0].display = medicationRequest.resource.medicationCodeableConcept.coding[0].display;
    this.dispenseModel.subject.reference = medicationRequest.resource.subject.reference;
    // tslint:disable-next-line:max-line-length
    this.dispenseModel.subject.display = this.appcomponent.userName.length == 3 ? this.appcomponent.userName[0] + ' ' + this.appcomponent.userName[2] : this.appcomponent.userName[0] + ' ' + this.appcomponent.userName[1];
    this.dispenseModel.performer[0].actor.reference = medicationRequest.resource.requester.agent.reference;
    this.dispenseModel.performer[0].onBehalfOf.reference = medicationRequest.resource.requester.onBehalfOf.reference;
    this.dispenseModel.authorizingPrescription[0].reference = 'MedicationRequest/' + medicationRequest.resource.id;
    this.dispenseModel.whenPrepared = medicationRequest.resource.authoredOn;
    this.dispenseModel.dosageInstruction[0].text = 'Napi háromszor 20 egység.';
    this.dispenseModel.meta.lastUpdated = new Date().toString();
    // @ts-ignore
    this.postMedicationDispense(this.dispenseModel);

    // PUT For update the dispensed prescription.
    // @ts-ignore
    this.requestModel = medicationRequest.resource;
    this.requestModel.meta.lastUpdated = new Date();
    this.requestModel.status = 'completed';
    // @ts-ignore
    this.updateMedicationRequest(medicationRequest.resource.id, this.requestModel);
  }
}
