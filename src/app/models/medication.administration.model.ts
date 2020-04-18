/* tslint:disable */
export interface MedicationAdministration {
  resourceType: string;
  status: string;
  medicationCodeableConcept: MedicationCodeableConcept;
  subject: ActorOrSubject;
  effectivePeriod: EffectivePeriod;
  performer?: (PerformerEntity)[] | null;
  prescription: Prescription;
  dosage: Dosage;
  meta: Meta;
}
export interface MedicationCodeableConcept {
  coding?: (CodingEntity)[] | null;
}
export interface CodingEntity {
  display: string;
}
export interface ActorOrSubject {
  reference: string;
  display: string;
}
export interface EffectivePeriod {
  start: string;
  end: string;
}
export interface PerformerEntity {
  actor: ActorOrSubject;
}
export interface Prescription {
  reference: string;
}
export interface Dosage {
  text: string;
  dose: Dose;
}
export interface Dose {
  value: number;
  unit: string;
}
export interface Meta {
  lastUpdated: string;
  versionId: string;
}
