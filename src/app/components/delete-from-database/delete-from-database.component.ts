import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-delete-from-database',
  templateUrl: './delete-from-database.component.html',
  styleUrls: ['./delete-from-database.component.css']
})
export class DeleteFromDatabaseComponent implements OnInit {
  patientIdForField: string;
  medicationRequestIdForField: string;
  medicationDispenseIdForField: string;
  medicationAdministrationIdForField: string;
  constructor(public appcomponent: AppComponent) { }

  ngOnInit(): void {
  }

  deletePatient(id: any) {
    this.appcomponent.api
      .deletePatient(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  deleteMedicationRequest(id: any) {
    this.appcomponent.api
      .deleteMedicationRequest(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  deleteMedicationDispense(id: any) {
    this.appcomponent.api
      .deleteMedicationDispense(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

  deleteMedicationAdministration(id: any) {
    this.appcomponent.api
      .deleteMedicationAdministration(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
  }

}
