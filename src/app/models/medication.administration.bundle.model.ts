export interface MedicationAdministrationBundle {
  resourceType: string;
  id: string;
  type: string;
  total: number;
  link?: (LinkEntity)[] | null;
  entry?: (EntryEntity)[] | null;
}
export interface LinkEntity {
  relation: string;
  url: string;
}
export interface EntryEntity {
  fullUrl: string;
  resource: Resource;
  search: Search;
}
export interface Resource {
  resourceType: string;
  status: string;
  medicationCodeableConcept: MedicationCodeableConcept;
  subject: ActorOrSubject;
  effectivePeriod: EffectivePeriod;
  performer?: (PerformerEntity)[] | null;
  prescription: Prescription;
  dosage: Dosage;
  meta: Meta;
  id: string;
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
  versionId: string;
  lastUpdated: string;
}
export interface Search {
  mode: string;
}
