import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-post-medication-administration',
  templateUrl: './post-medication-administration.component.html',
  styleUrls: ['./post-medication-administration.component.css']
})

export class PostMedicationAdministrationComponent implements OnInit {
  constructor(public appcomponent: AppComponent) {
  }
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
      reference: 'Patient/pat1',
      display: 'Horváth Olivér'
    },
    effectivePeriod: {
      start: '2015-01-15T04:30:00+01:00',
      end: '2015-01-15T14:30:00+01:00'
    },
    performer: [
      {
        actor: {
          reference: 'Practitioner/f007',
          display: 'Patrick Pump'
        }
      }
    ],
    prescription: {
      reference: 'MedicationRequest/medrx0320'
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
      type: 'radio',
      templateOptions: {
        label: 'Státusz',
        placeholder: 'Placeholder',
        description: 'Válaszd ki az állapotot:',
        options: [
          // 	in-progress | on-hold | completed | entered-in-error | stopped | unknown
          {value: 'in-progress', label: 'Folyamatban'},
          {value: 'on-hold', label: 'Félbehagyva'},
          {value: 'completed', label: 'Befejezett'},
          {value: 'entered-in-error', label: 'Hiba történt'},
          {value: 'stopped', label: 'Megállított'},
          {value: 'unknown', label: 'Ismeretlen'},
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
        placeholder: 'Adja meg az azonosítóját',
      }
    },
    {
    key: 'subject.display',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Páciens teljes neve',
      placeholder: 'Adja meg a nevét',
      required: true
    }
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

private function;

  onSubmit() {
    this.appcomponent.postMedicationAdministration(this.model);
    console.log(this.appcomponent.spresp);
  }

  ngOnInit(): void {
  }

}
