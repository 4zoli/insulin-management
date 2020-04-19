export interface MedicationRequestBundle {
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
  status: string;
  intent: string;
  medicationCodeableConcept: MedicationCodeableConcept;
  subject: AgentOrOnBehalfOfOrSubjectOrContext;
  context: AgentOrOnBehalfOfOrSubjectOrContext;
  authoredOn: string;
  requester: Requester;
  meta: Meta;
}
export interface MedicationCodeableConcept {
  coding?: (CodingEntity)[] | null;
  text: string;
}
export interface CodingEntity {
  system: string;
  code: string;
  display: string;
}
export interface AgentOrOnBehalfOfOrSubjectOrContext {
  reference: string;
}
export interface Requester {
  agent: AgentOrOnBehalfOfOrSubjectOrContext;
  onBehalfOf: AgentOrOnBehalfOfOrSubjectOrContext;
}
export interface Meta {
  lastUpdated: string;
  versionId: string;
}
export interface Search {
  mode: string;
}
