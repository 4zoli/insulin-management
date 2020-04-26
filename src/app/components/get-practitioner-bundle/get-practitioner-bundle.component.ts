import { Component, OnInit } from '@angular/core';
import { Practitioner } from '../../models/practitioner.model';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-get-practitioner-bundle',
  templateUrl: './get-practitioner-bundle.component.html',
  styleUrls: ['./get-practitioner-bundle.component.css']
})
export class GetPractitionerBundleComponent implements OnInit {
  practitionerArray: Practitioner[] = [];
  constructor(public appcomponent: AppComponent) {
    this.getPractitionerBundle();
  }

  ngOnInit(): void {}

  getPractitionerBundle() {
    // @ts-ignore
    this.appcomponent.api.getPractitionerBundle()
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.practitionerArray = response.body.entry;
        // @ts-ignore
        // tslint:disable-next-line:max-line-length
        response.body.total > 0 ? this.appcomponent.snackBar.successMesage(this.practitionerArray.length + ' regisztrált orvos található az adatbázisban!') : this.appcomponent.snackBar.successMesage('Nincsenek regisztrált orvosok!');
        console.log(this.practitionerArray);
      });
  }

}
