import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-get-medication-administration-bundle',
  templateUrl: './get-medication-administration-bundle.component.html',
  styleUrls: ['./get-medication-administration-bundle.component.css']
})
export class GetMedicationAdministrationBundleComponent implements OnInit {
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

}
