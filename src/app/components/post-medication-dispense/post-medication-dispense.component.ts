import { Component, OnInit } from '@angular/core';
import { MedicationDispense } from '../../models/medication.dispense.model';
import {AppComponent} from '../../app.component';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-post-medication-dispense',
  templateUrl: './post-medication-dispense.component.html',
  styleUrls: ['./post-medication-dispense.component.css']
})
export class PostMedicationDispenseComponent implements OnInit {
  constructor(public appcomponent: AppComponent) {
  }

  form = new FormGroup({});
  model = {
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

  fields: FormlyFieldConfig[] = [
    {
      key: 'status',
      type: 'radio',
      templateOptions: {
        label: 'Státusz',
        placeholder: 'Placeholder',
        description: 'Válaszd ki az állapotot:',
        options: [
          // 	in-progress | on-hold | completed | entered-in-error | stopped | unknown
          {value: 'preparation', label: 'Fizetésre vár'},
          {value: 'in-progress', label: 'Folyamatban'},
          {value: 'on-hold', label: 'Megszakadt'},
          {value: 'completed', label: 'Befejezve'},
          {value: 'entered-in-error', label: 'Hiba történt'},
          {value: 'stopped', label: 'Megállítva'},
        ],
      },
    },
    {
      key: 'medicationCodeableConcept.coding[0].display',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Készítmény',
        placeholder: 'Készítmény megnevezése',
      }
    },
    {
      key: 'subject.reference',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Páciens azonosítója',
        placeholder: 'Patient/1',
      }
    },
    {
      key: 'subject.display',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Páciens teljes neve',
        placeholder: 'Vezetéknév Keresztnév',
        required: true
      }
    },
    {
      key: 'performer[0].actor.reference',
      type: 'input',
      templateOptions: {
        label: 'Gyógyszert felíró azonosítója',
        placeholder: 'Practitioner/1',
      }
    },
    {
      key: 'performer[0].actor.display',
      type: 'input',
      templateOptions: {
        label: 'Gyógyszert felíró neve',
        placeholder: 'Vezetéknév Keresztnév',
      }
    },
    {
      key: 'authorizingPrescription',
      type: 'input',
      templateOptions: {
        label: 'Recept azonosítója',
        placeholder: 'MedicationRequest/1',
      }
    },
    {
      key: 'quantity.value',
      type: 'input',
      templateOptions: {
        label: 'Mennyiség értéke',
        placeholder: 'Például: 10',
      }
    },
    {
      key: 'quantity.code',
      type: 'input',
      templateOptions: {
        label: 'Mennyiség mértékegysége',
        placeholder: 'Például: \"ml\"',
      }
    },
    {
      key: 'daysSupply.value',
      type: 'input',
      templateOptions: {
        label: 'Időzített mennyiség idejének értéke',
        placeholder: 'Például: \"30\"',
      }
    },
    {
      key: 'daysSupply.unit',
      type: 'input',
      templateOptions: {
        label: 'Day/Month/Year',
        placeholder: 'Például: \"30\"',
      }
    },
    {
      key: 'daysSupply.code',
      type: 'input',
      templateOptions: {
        label: 'Day/Month/Year',
        placeholder: 'd/m/y',
      }
    },
    {
      key: 'whenPrepared',
      type: 'input',
      templateOptions: {
        label: 'Készítmény gyártásának ideje',
        placeholder: '2020-04-19T07:13:00+05:00',
      }
    },
    {
      key: 'dosageInstruction[0].text',
      type: 'input',
      templateOptions: {
        label: 'Szedés gyakoriságának leírása ',
        placeholder: '20 Units SC three times daily',
      }
    },
    {
      key: 'dosageInstruction[0].timing.repeat.frequency',
      type: 'input',
      templateOptions: {
        label: 'Hányszor',
        placeholder: '3',
      }
    },
    {
      key: 'dosageInstruction[0].timing.repeat.period',
      type: 'input',
      templateOptions: {
        label: 'Időköz',
        placeholder: '1',
      }
    },
    {
      key: 'dosageInstruction[0].timing.repeat.periodUnit',
      type: 'input',
      templateOptions: {
        label: 'Nap/Hónap',
        placeholder: 'd',
      }
    },
    {
      key: 'dosageInstruction[0].dosageQuantity.value',
      type: 'input',
      templateOptions: {
        label: 'Mennyiség értéke',
        placeholder: '20',
      }
    },
    {
      key: 'dosageInstruction[0].dosageQuantity.unit',
      type: 'input',
      templateOptions: {
        label: 'Mennyiség mértékegysége',
        placeholder: 'U',
      }
    },
    {
      key: 'dosageInstruction[0].dosageQuantity.code',
      type: 'input',
      templateOptions: {
        label: 'Mennyiség kódja',
        placeholder: 'U',
      }
    },
    {
      key: 'meta.lastUpdated',
      type: 'input',
      templateOptions: {
        label: 'Utoljára frissítve',
        placeholder: '2020-04-15T21:50:48Z',
      }
    },

  ];

  postMedicationDispense(medicationDispenseData: MedicationDispense) {
    this.appcomponent.api
      .postMedicationDispense(medicationDispenseData)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  onSubmit() {
    // @ts-ignore
    this.postMedicationDispense(this.model);
    console.log(this.appcomponent.arrayForAnyResponse);
  }

  ngOnInit(): void {
  }

}
