import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AppComponent} from '../../app.component';
import {MedicationAdministration} from '../../models/medication.administration.model';

@Component({
  selector: 'app-post-medication-administration',
  templateUrl: './post-medication-administration.component.html',
  styleUrls: ['./post-medication-administration.component.css']
})

export class PostMedicationAdministrationComponent {
  constructor(public appcomponent: AppComponent) {}

  form = new FormGroup({});
  administrationModel = {
    resourceType: 'MedicationAdministration',
    status: 'completed',
    medicationCodeableConcept: {
      coding: [
        {
          display: 'Lantus 100 unit/ml injectable solution'
        }
      ]
    },
    subject: {
      reference: 'Patient/' + this.appcomponent.userEmail,
      // tslint:disable-next-line:max-line-length
      display: this.appcomponent.userName.length === 2 ? this.appcomponent.userName[1] + ' ' + this.appcomponent.userName[0] : this.appcomponent.userName[2] + ' ' + this.appcomponent.userName[0]
    },
    effectivePeriod: {
      start: new Date().toISOString(),
      end: new Date().toISOString()
    },
    performer: [
      {
        actor: {
          reference: 'Practitioner/1'
        }
      }
    ],
    prescription: {
      reference: 'MedicationRequest/1'
    },
    dosage: {
      text: '20 Unit SC before breakfast',
      dose: {
        value: 20,
        unit: 'U',
      }
    },
    meta: {
      lastUpdated: new Date(),
      versionId: '1'
    }

  };

  postMedicationAdministration(medicationAdministrationdata: MedicationAdministration) {
    this.appcomponent.api
      .postMedicationAdministration(medicationAdministrationdata)
      .subscribe(response => {
        this.appcomponent.snackBar.successMesage('Sikeres adminisztrálás!')
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }
}
