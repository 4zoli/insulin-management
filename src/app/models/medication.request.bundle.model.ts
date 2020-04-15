/* tslint:disable */
export interface Interface {
  body: MedicationRequestBundle;
}

export interface MedicationRequestBundle {
  resourceType: string;
  id:           string;
  type:         string;
  total:        number;
  link:         Link[];
  entry:        Entry[];
}

export interface Entry {
  fullUrl:  string;
  resource: Resource;
  search:   Search;
}

export interface Resource {
  resourceType:              ResourceType;
  id:                        string;
  status:                    Status;
  intent:                    Intent;
  medicationCodeableConcept: MedicationCodeableConcept;
  subject:                   Context;
  context:                   Context;
  authoredOn:                Date;
  requester:                 Requester;
  meta:                      Meta;
}

export interface Context {
  reference: string;
}

export enum Intent {
  Order = "order",
}

export interface MedicationCodeableConcept {
  coding: Coding[];
  text:   Text;
}

export interface Coding {
  system:  string;
  code:    string;
  display: Text;
}

export enum Text {
  Amlodipine5MGOralTablet = "Amlodipine 5 MG Oral Tablet",
  Clopidogrel75MGOralTablet = "Clopidogrel 75 MG Oral Tablet",
  Nitroglycerin04MGACTUATMucosalSpray = "Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray",
  Simvastatin20MGOralTablet = "Simvastatin 20 MG Oral Tablet",
}

export interface Meta {
  lastUpdated: Date;
  versionId:   string;
}

export interface Requester {
  agent:      Context;
  onBehalfOf: Context;
}

export enum ResourceType {
  MedicationRequest = "MedicationRequest",
}

export enum Status {
  Active = "active",
  Stopped = "stopped",
}

export interface Search {
  mode: Mode;
}

export enum Mode {
  Match = "match",
}

export interface Link {
  relation: string;
  url:      string;
}
