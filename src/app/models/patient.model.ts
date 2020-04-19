export interface Patient {
  resource: Resource;
}
export interface Resource {
  resourceType: string;
  id: string;
  text: Text;
  extension?: (ExtensionEntity)[] | null;
  identifier?: (IdentifierEntity)[] | null;
  name?: (NameEntity)[] | null;
  telecom?: (TelecomEntity)[] | null;
  gender: string;
  birthDate: string;
  address?: (AddressEntity)[] | null;
  maritalStatus: TypeOrLanguageOrMaritalStatus;
  multipleBirthBoolean: boolean;
  communication?: (CommunicationEntity)[] | null;
  meta: Meta;
}
export interface Text {
  status: string;
  div: string;
}
export interface ExtensionEntity {
  url: string;
  extension?: (ExtensionEntity1)[] | null;
  valueString?: string | null;
  valueCode?: string | null;
  valueAddress?: ValueAddress | null;
  valueDecimal?: number | null;
}
export interface ExtensionEntity1 {
  url: string;
  valueCoding?: ValueCodingOrCodingEntity | null;
  valueString?: string | null;
}
export interface ValueCodingOrCodingEntity {
  system: string;
  code: string;
  display: string;
}
export interface ValueAddress {
  city: string;
  state: string;
  country: string;
}
export interface IdentifierEntity {
  system: string;
  value: string;
  type?: TypeOrLanguageOrMaritalStatus1 | null;
}
export interface TypeOrLanguageOrMaritalStatus1 {
  coding?: (ValueCodingOrCodingEntity1)[] | null;
  text: string;
}
export interface ValueCodingOrCodingEntity1 {
  system: string;
  code: string;
  display: string;
}
export interface NameEntity {
  use: string;
  family: string;
  given?: (string)[] | null;
}
export interface TelecomEntity {
  system: string;
  value: string;
  use: string;
}
export interface AddressEntity {
  extension?: (ExtensionEntity2)[] | null;
  line?: (string)[] | null;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
export interface ExtensionEntity2 {
  url: string;
  extension?: (ExtensionEntity3)[] | null;
}
export interface ExtensionEntity3 {
  url: string;
  valueDecimal: number;
}
export interface TypeOrLanguageOrMaritalStatus {
  coding?: (ValueCodingOrCodingEntity1)[] | null;
  text: string;
}
export interface CommunicationEntity {
  language: TypeOrLanguageOrMaritalStatus;
}
export interface Meta {
  versionId: string;
  lastUpdated: string;
}


export interface Resource {
  resourceType: string;
  id: string;
  text: Text;
  extension?: (ExtensionEntity)[] | null;
  identifier?: (IdentifierEntity)[] | null;
  name?: (NameEntity)[] | null;
  telecom?: (TelecomEntity)[] | null;
  gender: string;
  birthDate: string;
  address?: (AddressEntity)[] | null;
  maritalStatus: TypeOrLanguageOrMaritalStatus;
  multipleBirthBoolean: boolean;
  communication?: (CommunicationEntity)[] | null;
  meta: Meta;
}
export interface Text {
  status: string;
  div: string;
}
export interface ExtensionEntity {
  url: string;
  extension?: (ExtensionEntity1)[] | null;
  valueString?: string | null;
  valueCode?: string | null;
  valueAddress?: ValueAddress | null;
  valueDecimal?: number | null;
}
export interface ExtensionEntity1 {
  url: string;
  valueCoding?: ValueCodingOrCodingEntity | null;
  valueString?: string | null;
}
export interface ValueCodingOrCodingEntity {
  system: string;
  code: string;
  display: string;
}
export interface ValueAddress {
  city: string;
  state: string;
  country: string;
}
export interface IdentifierEntity {
  system: string;
  value: string;
  type?: TypeOrLanguageOrMaritalStatus1 | null;
}
export interface TypeOrLanguageOrMaritalStatus1 {
  coding?: (ValueCodingOrCodingEntity1)[] | null;
  text: string;
}
export interface ValueCodingOrCodingEntity1 {
  system: string;
  code: string;
  display: string;
}
export interface NameEntity {
  use: string;
  family: string;
  given?: (string)[] | null;
}
export interface TelecomEntity {
  system: string;
  value: string;
  use: string;
}
export interface AddressEntity {
  extension?: (ExtensionEntity2)[] | null;
  line?: (string)[] | null;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
export interface ExtensionEntity2 {
  url: string;
  extension?: (ExtensionEntity3)[] | null;
}
export interface ExtensionEntity3 {
  url: string;
  valueDecimal: number;
}
export interface TypeOrLanguageOrMaritalStatus {
  coding?: (ValueCodingOrCodingEntity1)[] | null;
  text: string;
}
export interface CommunicationEntity {
  language: TypeOrLanguageOrMaritalStatus;
}
export interface Meta {
  versionId: string;
  lastUpdated: string;
}
