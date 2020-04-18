/* tslint:disable */
export interface MedicationRequest {
  resourceType:              string;
  id:                        string;
  status:                    string;
  intent:                    string;
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

export interface MedicationCodeableConcept {
  coding: Coding[];
  text:   string;
}

export interface Coding {
  system:  string;
  code:    string;
  display: string;
}

export interface Meta {
  lastUpdated: Date;
  versionId:   string;
}

export interface Requester {
  agent:      Context;
  onBehalfOf: Context;
}
