import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AppComponent} from '../../app.component';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {Patient} from '../../models/patient.model';

@Component({
  selector: 'app-post-patient',
  templateUrl: './post-patient.component.html',
  styleUrls: ['./post-patient.component.css']
})
export class PostPatientComponent implements OnInit {
  constructor(public appcomponent: AppComponent) {
  }
  form = new FormGroup({});
  model = {
    resourceType: 'Patient',
    id: '1',
    identifier: [{
      value: this.appcomponent.userEmail,
    }],
    name: [
    {
      use: 'official',
      family: this.appcomponent.userName.length === 3 ? this.appcomponent.userName[2] : this.appcomponent.userName[1],
      given: [
        this.appcomponent.userName[0],
      ]
    }
  ],
  telecom: [
    {
      system: 'email',
      value: this.appcomponent.userEmail,
      use: 'home'
    },
    {
      system: 'phone',
      value: '06203322123',
      use: 'mobile'
    }
  ],
  gender: 'male',
  birthDate: '1991-10-03',
  address: [
    {
      line: [
        ''
      ],
      city: '',
      state: '',
      postalCode: '',
      country: ''
    }
  ],
  maritalStatus: {
    coding: [
      {
        system: 'http://hl7.org/fhir/v3/MaritalStatus',
        code: 'Kapcsolati státusz kód'
      }
    ],
    text: 'Kapcsolati státusz'
  },
  communication: [
    {
      language: {
        coding: [
          {
            system: 'urn:ietf:bcp:47',
            display: 'English'
          }
        ]
      }
    }
  ],
  meta: {
    versionId: '1',
    lastUpdated: new Date()
  }
}

fields: FormlyFieldConfig[] = [
  {
    key: 'name[0].family',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Vezetéknév',
      disabled: true
    },
  },
  {
    key: 'name[0].given[0]',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Keresztnév',
      disabled: true
    },
  },
  {
    key: 'telecom[1].value',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Mobil telefonszám',
    },
  },
  {
    key: 'gender',
    type: 'radio',
    templateOptions: {
      label: 'Az ön neme',
      placeholder: 'Nem',
      options: [
        {value: 'male', label: 'Férfi'},
        {value: 'female', label: 'Nő'},
      ],
    },
  },
  {
    key: 'communication[0].language.coding[0].display',
    type: 'select',
    templateOptions: {
      label: 'Nyelv',
      options: [
        {value: 'Magyar', label: 'Magyar'},
        {value: 'Angol', label: 'Angol'},
      ],
      required: true
    },
  },
    {
      key: 'birthDate',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Születési idő',
        placeholder: 'Adja meg a születési idejét',
        required: true
      },
      validators: {
        validation: ['date'],
      },
    },
    {
    key: 'address[0].country',
    type: 'select',
    templateOptions: {
      label: 'Ország',
      placeholder: 'HU',
      options: [
        {value: 'HU', label: 'Magyarország'},
        {value: 'US', label: 'Egyesült államok'},
        {value: 'UK', label: 'Egyesült királyság'},
      ],
      required: true
    },
  },
  {
    key: 'address[0].state',
    type: 'select',
    templateOptions: {
      label: 'Megye',
      options: [
        {value: 'Baranya', label: 'Baranya'},
        {value: 'Bács-Kiskun', label: 'Bács-Kiskun'},
        {value: 'Békés', label: 'Békés'},
        {value: 'Borsod-Abaúj-Zemplén', label: 'Borsod-Abaúj-Zemplén'},
        {value: 'Fejér', label: 'Fejér'},
        {value: 'Csongrád', label: 'Csongrád'},
        {value: 'Győr-Moson-Sopron', label: 'Győr-Moson-Sopron'},
        {value: 'Hajdú-Bihar', label: 'Hajdú-Bihar'},
        {value: 'Heves', label: 'Heves'},
        {value: 'Jász-Nagykun-Szolnok', label: 'Jász-Nagykun-Szolnok'},
        {value: 'Komárom-Esztergom', label: 'Komárom-Esztergom'},
        {value: 'Nógrád', label: 'Nógrád'},
        {value: 'Pest', label: 'Pest'},
        {value: 'Somogy', label: 'Somogy'},
        {value: 'Szabolcs-Szatmár-Bereg', label: 'Szabolcs-Szatmár-Bereg'},
        {value: 'Tolna', label: 'Tolna'},
        {value: 'Vas', label: 'Vas'},
        {value: 'Veszprém', label: 'Veszprém'},
        {value: 'Zala', label: 'Zala'},
      ],
      required: true
    },
  },
  {
    key: 'address[0].postalCode',
    type: 'input',
    templateOptions: {
      label: 'Irányítószám',
      placeholder: '6723',
      required: true
    },
  },
  {
    key: 'address[0].city',
    type: 'input',
    templateOptions: {
      label: 'Város',
      placeholder: 'Szeged',
      required: true
    },
  },
  {
    key: 'address[0].line[0]',
    type: 'input',
    templateOptions: {
      label: 'Utca, házszám',
      required: true
    },
  },
  {
    key: 'telecom[0].value',
    type: 'input',
    templateOptions: {
      label: 'Email cím',
      required: true
    },
  },
  {
    key: 'maritalStatus.coding[0].code',
    type: 'select',
    templateOptions: {
      label: 'Kapcsolati státusza',
      options: [
        /*
        A	Annulled	Marriage contract has been declared null and to not have existed
        D	Divorced	Marriage contract has been declared dissolved and inactive
        I	Interlocutory	Subject to an Interlocutory Decree.
        L	Legally Separated	Legally Separated
        M	Married	A current marriage contract is active
        P	Polygamous	More than 1 current spouse
        S	Never Married	No marriage contract has ever been entered
        T	Domestic partner	Person declares that a domestic partner relationship exists.
        U	unmarried	Currently not in a marriage contract.
        W	Widowed	The spouse has died
        */
        {value: 'M', label: 'Házas'},
        {value: 'D', label: 'Elvált'},
        {value: 'W', label: 'Özvegy'},
        {value: 'U', label: 'Kapcsolatban'},
        {value: 'L', label: 'Egyedülálló'},
      ],
    },
  },
  ];

postPatient(patientdata: Patient) {
    this.appcomponent.api
      .postPatient(patientdata)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

onSubmit() {
    // @ts-ignore
    this.postPatient(this.model);
    console.log(this.appcomponent.arrayForAnyResponse);
    this.appcomponent.router.navigateByUrl('/app-root', { skipLocationChange: true }).then(() => {
      this.appcomponent.router.navigate(['post-medication-administration']);
  });
}
ngOnInit() {

}
}
