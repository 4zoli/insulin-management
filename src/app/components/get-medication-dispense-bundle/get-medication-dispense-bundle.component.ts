/* tslint:disable:max-line-length */
import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../../app.component';
import {MedicationDispense} from '../../models/medication.dispense.model';
import {PostMedicationAdministrationComponent} from '../post-medication-administration/post-medication-administration.component';
import {PostPutMedicationDispenseComponent} from '../post-medication-dispense/post-put-medication-dispense.component';

@Component({
  selector: 'app-get-medication-dispense-bundle',
  templateUrl: './get-medication-dispense-bundle.component.html',
  styleUrls: ['./get-medication-dispense-bundle.component.css']
})
export class GetMedicationDispenseBundleComponent implements OnInit {
  medicationDispenseModel = this.postPutMedicationDispense.dispenseModel;
  medicationAdministrationModel = this.postMedicationAdministration.administrationModel;
  medicationDispenseArray: MedicationDispense[] = [];
  public total: number;
  constructor(
    public appcomponent: AppComponent,
    public postPutMedicationDispense: PostPutMedicationDispenseComponent,
    public postMedicationAdministration: PostMedicationAdministrationComponent
  ) { }

  ngOnInit(): void {
    this.reloadDispenses();
  }

  getMedicationDispenseBundle(queryParams: any) {
    this.appcomponent.api.getMedicationDispenseBundle(queryParams)
      .subscribe(response => {
        console.log(response);
        const keys = response.headers.keys();
        keys.map(key =>
          `${key}: ${response.headers.get(key)}`
        );
        // @ts-ignore
        this.medicationDispenseArray = response.body.entry;
        // @ts-ignore
        this.total = response.body.total;
        // @ts-ignore
        response.body.total > 0 ?
          this.appcomponent.snackBar.successMesage('Kiváltott receptek száma:  ' + this.medicationDispenseArray.length) :
          this.appcomponent.snackBar.successMesage('Jelengleg nem találhatóak kiváltott receptek !');
        console.log(this.medicationDispenseArray);
      });
  }

  deleteMedicationDispense(id: any) {
    this.appcomponent.api
      .deleteMedicationDispense(id)
      .subscribe(response => {
        return this.appcomponent.arrayForAnyResponse.push(response);
      });
    this.reloadDispenses();
  }

  reloadDispenses() {
    this.medicationDispenseArray.length = 0;
    // tslint:disable-next-line:triple-equals
    this.appcomponent.userLevel == 1 ?
      this.getMedicationDispenseBundle('') :
      this.getMedicationDispenseBundle('?patient=' + this.appcomponent.userEmail);
  }
  makePrescriptionAdministration(medicationDispense: MedicationDispense) {
    this.medicationDispenseModel.extension[0].value = (+medicationDispense.resource.extension[0].value - 20).toString();
    this.medicationDispenseModel.id = medicationDispense.resource.id;
    this.medicationDispenseModel.status = medicationDispense.resource.extension[0].value > '20' ? 'in-progress' : 'completed';
    this.medicationDispenseModel.medicationCodeableConcept.coding[0].display = medicationDispense.resource.medicationCodeableConcept.coding[0].display;
    this.medicationDispenseModel.subject.reference = medicationDispense.resource.subject.reference;
    this.medicationDispenseModel.subject.display = medicationDispense.resource.subject.display;
    this.medicationDispenseModel.performer[0].actor.reference = medicationDispense.resource.performer[0].actor.reference;
    this.medicationDispenseModel.performer[0].onBehalfOf.reference = medicationDispense.resource.performer[0].onBehalfOf.reference;
    this.medicationDispenseModel.authorizingPrescription[0].reference = medicationDispense.resource.authorizingPrescription[0].reference;
    this.medicationDispenseModel.quantity.value = medicationDispense.resource.quantity.value;
    this.medicationDispenseModel.quantity.code = medicationDispense.resource.quantity.code;
    this.medicationDispenseModel.daysSupply.value = medicationDispense.resource.daysSupply.value;
    this.medicationDispenseModel.daysSupply.unit = medicationDispense.resource.daysSupply.unit;
    this.medicationDispenseModel.whenPrepared = medicationDispense.resource.whenPrepared;
    this.medicationDispenseModel.dosageInstruction[0].sequence = medicationDispense.resource.dosageInstruction[0].sequence;
    this.medicationDispenseModel.dosageInstruction[0].text = medicationDispense.resource.dosageInstruction[0].text;
    this.medicationDispenseModel.dosageInstruction[0].timing.repeat.frequency = medicationDispense.resource.dosageInstruction[0].timing.repeat.frequency;
    this.medicationDispenseModel.dosageInstruction[0].timing.repeat.period = medicationDispense.resource.dosageInstruction[0].timing.repeat.period;
    this.medicationDispenseModel.dosageInstruction[0].timing.repeat.periodUnit = medicationDispense.resource.dosageInstruction[0].timing.repeat.periodUnit;
    this.medicationDispenseModel.dosageInstruction[0].doseQuantity.value = medicationDispense.resource.dosageInstruction[0].doseQuantity.value;
    this.medicationDispenseModel.dosageInstruction[0].doseQuantity.unit = medicationDispense.resource.dosageInstruction[0].doseQuantity.unit;
    this.medicationDispenseModel.dosageInstruction[0].doseQuantity.code = medicationDispense.resource.dosageInstruction[0].doseQuantity.code;
    this.medicationDispenseModel.meta.lastUpdated = new Date().toString();
    // @ts-ignore
    this.postPutMedicationDispense.updateMedicationDispense(medicationDispense.resource.id, this.medicationDispenseModel);
    // Responzivitás miatt
    this.medicationDispenseArray[0].resource.extension[0].value = (+medicationDispense.resource.extension[0].value - 20).toString();

    this.medicationAdministrationModel.medicationCodeableConcept.coding[0].display = medicationDispense.resource.medicationCodeableConcept.coding[0].display
    this.medicationAdministrationModel.subject.reference = medicationDispense.resource.subject.reference;
    this.medicationAdministrationModel.subject.display = medicationDispense.resource.subject.display;

    // @ts-ignore
    this.medicationAdministrationModel.effectivePeriod.start = medicationDispense.resource.meta.lastUpdated;
    this.medicationAdministrationModel.effectivePeriod.end = new Date().toISOString();

    this.medicationAdministrationModel.performer[0].actor.reference = medicationDispense.resource.performer[0].actor.reference;
    this.medicationAdministrationModel.prescription.reference = medicationDispense.resource.authorizingPrescription[0].reference;
    this.medicationAdministrationModel.dosage.text = medicationDispense.resource.dosageInstruction[0].text;
    this.medicationAdministrationModel.dosage.dose.unit = '20';
    this.medicationAdministrationModel.dosage.dose.unit = 'U';
    // @ts-ignore
    this.postMedicationAdministration.postMedicationAdministration(this.medicationAdministrationModel);
  }
}
