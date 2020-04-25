import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {MedicationRequest} from '../../models/medication.request.model';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-post-medication-request',
  templateUrl: './post-medication-request.component.html',
  styleUrls: ['./post-medication-request.component.css']
})
export class PostMedicationRequestComponent implements OnInit {

  constructor(public appcomponent: AppComponent) { }

  form = new FormGroup({});
  model = {
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

  fields: FormlyFieldConfig[] = [
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        label: 'Státusz',
        placeholder: 'Placeholder',
        options: [
          // active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
          {value: 'active', label: 'Aktív'},
          {value: 'on-hold', label: 'Folyamatban'},
          {value: 'completed', label: 'Teljesített'},
        ],
        required: true
      },
    },
    {
      key: 'intent',
      type: 'select',
      templateOptions: {
        label: 'Rendelkezés: ',
        options: [
          {value: 'proposal', label: 'Javaslat'},
          {value: 'order', label: 'Utasítás'},
          {value: 'instance-order', label: 'Adminisztrálandó utasítás'},
        ],
        required: true
      },
    },
    {
      key: 'medicationCodeableConcept.coding[0].display',
      type: 'select',
      templateOptions: {
        type: 'text',
        label: 'Készítmény',
        options: [
          {value: 'Lantus 100 egység/ml injekció', label: 'Lantus 100 egység/ml injekció'},
          {value: 'Novolog 100 egység/ml injekció', label: 'Novolog 100 egység/ml injekció'}
        ],
        required: true
      }
    },
    {
      key: 'subject.reference',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Páciens azonosítója',
        placeholder: 'Patient/1',
        required: true
      }
    },
    {
      key: 'requester.agent.reference',
      type: 'input',
      templateOptions: {
        label: 'Gyógyszert felíró azonosítója',
        disabled: true,
        required: true
      },
    },
    {
      key: 'requester.onBehalfOf.reference',
      type: 'select',
      templateOptions: {
        label: 'Felíró intézménye',
        options: [
          {value: 'Organization/1', label: 'Dr. Réthy Pál Tagkórház'},
          {value: 'Organization/2', label: 'Pándy Kálmán Tagkórház'},
          {value: 'Organization/3', label: 'MRE Bethesda Gyermekkórház'},
          {value: 'Organization/4', label: 'MH EK Honvédkórház'},
          {value: 'Organization/5', label: 'Szent-Györgyi Albert Klinikai Központ'},
        ],
        required: true
      },
    },
    {
      key: 'authoredOn',
      type: 'input',
      templateOptions: {
        label: 'Felírás dátuma',
        placeholder: '2017-01-27T15:32:06+01:00',
        required: true,
        disabled: true
      }
    },
    {
      key: 'meta.lastUpdated',
      type: 'input',
      templateOptions: {
        label: 'Utolsó módosítás időpontja',
        placeholder: '2020-04-15T21:50:48Z',
        disabled: true,
        required: true
      }
    },

  ];

  postMedicationRequest(medicationRequestData: MedicationRequest) {
    this.appcomponent.api
      .postMedicationRequest(medicationRequestData)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  onSubmit() {
    // @ts-ignore
    this.postMedicationRequest(this.model);
    console.log(this.appcomponent.arrayForAnyResponse);
  }

  ngOnInit(): void {
  }

}
