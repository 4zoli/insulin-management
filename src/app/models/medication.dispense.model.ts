export interface MedicationDispense {
  resource: Resource;
}
export interface Resource {
  resourceType: string;
  id: string;
  extension: Extension[];
  text: Text;
  status: string;
  medicationCodeableConcept: RouteOrMedicationCodeableConceptOrType;
  subject: Subject;
  performer?: (PerformerEntity)[] | null;
  authorizingPrescription?: (ActorOrOnBehalfOfOrAuthorizingPrescriptionEntity)[] | null;
  type: RouteOrMedicationCodeableConceptOrType;
  quantity: Quantity;
  daysSupply: DoseQuantityOrDaysSupply;
  whenPrepared: string;
  dosageInstruction?: (DosageInstructionEntity)[] | null;
  meta: Meta;
}
interface Extension {
  url: string;
  value: string;
}
export interface Text {
  status: string;
  div: string;
}
export interface RouteOrMedicationCodeableConceptOrType {
  coding?: (CodingEntity)[] | null;
}
export interface CodingEntity {
  system: string;
  code: string;
  display: string;
}
export interface Subject {
  reference: string;
  display: string;
}
export interface PerformerEntity {
  actor: ActorOrOnBehalfOfOrAuthorizingPrescriptionEntity;
  onBehalfOf: ActorOrOnBehalfOfOrAuthorizingPrescriptionEntity;
}
export interface ActorOrOnBehalfOfOrAuthorizingPrescriptionEntity {
  reference: string;
}
export interface Quantity {
  value: number;
  system: string;
  code: string;
}
export interface DoseQuantityOrDaysSupply {
  value: number;
  unit: string;
  system: string;
  code: string;
}
export interface DosageInstructionEntity {
  sequence: number;
  text: string;
  timing: Timing;
  route: RouteOrMedicationCodeableConceptOrType;
  doseQuantity: DoseQuantityOrDaysSupply;
}
export interface Timing {
  repeat: Repeat;
}
export interface Repeat {
  frequency: number;
  period: number;
  periodUnit: string;
}
export interface Meta {
  versionId: string;
  lastUpdated: string;
}
