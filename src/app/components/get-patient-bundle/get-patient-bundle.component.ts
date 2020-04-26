import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';
import { Patient} from '../../models/patient.model';

@Component({
  selector: 'app-get-patient-bundle',
  templateUrl: './get-patient-bundle.component.html',
  styleUrls: ['./get-patient-bundle.component.css']
})
export class GetPatientBundleComponent implements OnInit {
  patientArray: Patient[] = [];
  constructor(public appcomponent: AppComponent) {
    this.getPatientBundle('');
  }

  ngOnInit(): void {}

  getPatientBundle(queryParams) {
    // @ts-ignore
    this.appcomponent.api.getPatientBundle(queryParams)
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        if (response.body.entry !== undefined) {
          // @ts-ignore
          this.patientArray = response.body.entry;
        }
        // @ts-ignore
        // tslint:disable-next-line:max-line-length
        response.body.total > 0 ? this.appcomponent.snackBar.successMesage(this.patientArray.length + ' regisztrált felhasználó található az adatbázisban!') : this.appcomponent.snackBar.successMesage('Nincsenek regisztrált felhasználók!');
        console.log(this.patientArray);
      });
  }

  deletePatient(id: any) {
    this.appcomponent.api
      .deletePatient(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
    this.patientArray.length = 0;
    this.getPatientBundle('');
  }
}
