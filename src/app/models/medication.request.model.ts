export interface MedicationRequest {
  resource: Resource;
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
