import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {AppComponent} from '../../app.component';
import {MedicationAdministration} from '../../models/medication.administration.model';


@Component({
  selector: 'app-post-medication-administration',
  templateUrl: './post-medication-administration.component.html',
  styleUrls: ['./post-medication-administration.component.css']
})

export class PostMedicationAdministrationComponent implements OnInit {
  constructor(public appcomponent: AppComponent) {}

  form = new FormGroup({});
  model = {
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
      start: '2020-04-19T04:30:00+01:00',
      end: '2015-04-19T14:30:00+01:00'
    },
    performer: [
      {
        actor: {
          reference: 'Practitioner/1',
          display: 'Vezetéknév Keresztnév'
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
      lastUpdated: '2020-04-18T21:17:57Z',
      versionId: '1'
    }

  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'status',
      type: 'select',
      templateOptions: {
        label: 'Státusz',
        options: [
          // 	in-progress | on-hold | completed | entered-in-error | stopped | unknown
          {value: 'in-progress', label: 'Folyamatban'},
          {value: 'on-hold', label: 'Félbehagyva'},
          {value: 'completed', label: 'Befejezett'},
        ],
      },
    },
    {
      key: 'medicationCodeableConcept.coding[0].display',
      type: 'select',
      templateOptions: {
        label: 'Készítmény megnevezése',
        options: [
          {value: 'Lantus 100 unit/ml injectable solution', label: 'Lantus 100 egység/ml injekció'},
          {value: 'Novolog 100 unit/ml injectable solution', label: 'Novolog 100 egység/ml injekció'}
        ],
      },
    },
    {
      key: 'effectivePeriod.start',
      type: 'input',
      templateOptions: {
        label: 'Bevétel kezdete',
        placeholder: '2020-01-15T04:30:00+01:00',
        required: true
      },
    },
    {
      key: 'effectivePeriod.end',
      type: 'input',
      templateOptions: {
        label: 'Bevétel vége',
        placeholder: '2020-01-15T04:30:00+01:00',
        required: true
      },
    },
    {
      key: 'performer[0].actor.reference',
      type: 'input',
      templateOptions: {
        label: 'Gyógyszert felíró azonosítója',
        placeholder: 'Practitioner/2',
      }
    },
    {
      key: 'performer[0].actor.display',
      type: 'input',
      templateOptions: {
        label: 'Gyógyszert felíró neve',
        placeholder: 'Patrick Pump',
      }
    },
    {
      key: 'prescription.reference',
      type: 'input',
      templateOptions: {
        label: 'Recept azonosítója',
        placeholder: 'MedicationRequest/medrx0320',
      }
    },
    {
      key: 'dosage.text',
      type: 'input',
      templateOptions: {
        label: 'Rövid leírás',
        placeholder: 'Például: 20 egység ebéd előtt.',
      }
    },
    {
      key: 'dosage.dose.value',
      type: 'input',
      templateOptions: {
        label: 'Mennyiség',
        placeholder: 'Szám szerinti mennyiség megadása, pl: 20',
      }
    },
    {
      key: 'dosage.dose.unit',
      type: 'input',
      templateOptions: {
        label: 'Egység megnevezése',
        placeholder: 'U - Unit',
      }
    },
  ];

  postMedicationAdministration(medicationAdministrationdata: MedicationAdministration) {
    this.appcomponent.api
      .postMedicationAdministration(medicationAdministrationdata)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  onSubmit() {
    // @ts-ignore
    this.postMedicationAdministration(this.model);
    console.log(this.appcomponent.arrayForAnyResponse);
  }

  ngOnInit() {  }


}
