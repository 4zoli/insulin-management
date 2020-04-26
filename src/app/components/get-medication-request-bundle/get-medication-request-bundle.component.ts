import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';
import {MedicationRequest} from '../../models/medication.request.model';
import {FormGroup} from '@angular/forms';
import {MedicationDispense} from '../../models/medication.dispense.model';
import {PostMedicationDispenseComponent} from '../post-medication-dispense/post-medication-dispense.component';
import {PostMedicationAdministrationComponent} from '../post-medication-administration/post-medication-administration.component';

@Component({
  selector: 'app-get-medication-request-bundle',
  templateUrl: './get-medication-request-bundle.component.html',
  styleUrls: ['./get-medication-request-bundle.component.css']
})

export class GetMedicationRequestBundleComponent implements OnInit {
  dispenseModel: any = this.postDispense.dispenseModel;
  administrationModel: any = this.postAdministration.administrationModel
  medicationRequestArray: MedicationRequest[] = [];
  public updateRequestData: any = {};
  private total: number;

  constructor(
    public appcomponent: AppComponent,
    public postDispense: PostMedicationDispenseComponent,
    public postAdministration: PostMedicationAdministrationComponent
  ) {}



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
    this.medicationRequestArray.length = 0;
    this.appcomponent.api.getMedicationRequestBundle(queryParams)
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.medicationRequestArray = response.body.entry;
        // @ts-ignore
        this.total = response.body.total;
        // @ts-ignore
        // tslint:disable-next-line:max-line-length
        response.body.total > 0 ? this.appcomponent.snackBar.successMesage('Receptek száma:  ' + this.medicationRequestArray.length) : this.appcomponent.snackBar.successMesage('Jelengleg nem találhatóak receptek !');
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

  /*
  postMedicationDispense(medicationDispenseData: MedicationDispense) {
    this.appcomponent.api
      .postMedicationDispense(medicationDispenseData)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }
  */

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
    this.postDispense.postMedicationDispense(this.dispenseModel);

    // PUT For update the dispensed prescription.
    // @ts-ignore
    this.requestModel = medicationRequest.resource;
    this.requestModel.meta.lastUpdated = new Date();
    this.requestModel.status = 'completed';
    // @ts-ignore
    this.updateMedicationRequest(medicationRequest.resource.id, this.requestModel);
  }
}
