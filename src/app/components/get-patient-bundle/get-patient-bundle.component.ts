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
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.getPatientBundle();
  }

  getPatientBundle() {
    // @ts-ignore
    this.appcomponent.api.getPatientBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.patientArray = response.body.entry;

        console.log('Páciensek száma: ' + this.patientArray.length);
        console.log(this.patientArray);
      });
  }
}
