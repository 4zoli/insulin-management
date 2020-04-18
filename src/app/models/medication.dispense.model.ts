/* tslint:disable */
export interface MedicationDispense {
  resourceType:              string;
  id:                        string;
  text:                      Text;
  status:                    string;
  medicationCodeableConcept: MedicationCodeableConcept;
  subject:                   Subject;
  performer:                 Performer[];
  authorizingPrescription:   AuthorizingPrescription[];
  type:                      MedicationCodeableConcept;
  quantity:                  DaysSupply;
  daysSupply:                DaysSupply;
  whenPrepared:              Date;
  dosageInstruction:         DosageInstruction[];
  meta:                      Meta;
}

export interface AuthorizingPrescription {
  reference: string;
}

export interface DaysSupply {
  value:  number;
  unit?:  string;
  system: string;
  code:   string;
}

export interface DosageInstruction {
  sequence:     number;
  text:         string;
  timing:       Timing;
  route:        MedicationCodeableConcept;
  doseQuantity: DaysSupply;
}

export interface MedicationCodeableConcept {
  coding: Coding[];
}

export interface Coding {
  system:  string;
  code:    string;
  display: string;
}

export interface Timing {
  repeat: Repeat;
}

export interface Repeat {
  frequency:  number;
  period:     number;
  periodUnit: string;
}

export interface Meta {
  lastUpdated: Date;
  versionId:   string;
}

export interface Performer {
  actor:      AuthorizingPrescription;
  onBehalfOf: AuthorizingPrescription;
}

export interface Subject {
  reference: string;
  display:   string;
}

export interface Text {
  status: string;
  div:    string;
}
