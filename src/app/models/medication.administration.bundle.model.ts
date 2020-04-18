/* tslint:disable */
export interface Interface {
  body: MedicationAdministrationBundle;
}

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
  id: string;
  text: Text;
  status: string;
  medicationCodeableConcept: RouteOrMedicationCodeableConcept;
  subject: Subject;
  effectivePeriod: EffectivePeriod;
  performer?: (PerformerEntity)[] | null;
  prescription: Prescription;
  dosage: Dosage;
  meta: Meta;
}
export interface Text {
  status: string;
  div: string;
}
export interface RouteOrMedicationCodeableConcept {
  coding?: (CodingEntity)[] | null;
}
export interface CodingEntity {
  system: string;
  code: string;
  display: string;
}
export interface Subject {
  reference?: string | null;
  display: string;
}
export interface EffectivePeriod {
  start: string;
  end: string;
}
export interface PerformerEntity {
  actor: Actor;
}
export interface Actor {
  reference?: string | null;
  display?: string | null;
  id?: string | null;
}
export interface Prescription {
  reference: string;
}
export interface Dosage {
  text: string;
  route: RouteOrMedicationCodeableConcept;
  dose: Dose;
}
export interface Dose {
  value: number;
  unit: string;
  system: string;
  code: string;
}
export interface Meta {
  lastUpdated: string;
  versionId: string;
}
export interface Search {
  mode: string;
}
