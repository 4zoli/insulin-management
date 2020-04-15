/* tslint:disable */
export interface Interface {
  body: PatientBundle;
}

export interface PatientBundle {
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
  resourceType:         string;
  id:                   string;
  text:                 Text;
  extension:            ResourceExtension[];
  identifier:           Identifier[];
  name:                 Name[];
  telecom:              Telecom[];
  gender:               string;
  birthDate:            Date;
  address:              Address[];
  maritalStatus:        MaritalStatus;
  multipleBirthBoolean: boolean;
  communication:        Communication[];
  meta:                 Meta;
}

export interface Address {
  extension:  AddressExtension[];
  line:       string[];
  city:       string;
  state:      string;
  postalCode: string;
  country:    string;
}

export interface AddressExtension {
  url:       string;
  extension: PurpleExtension[];
}

export interface PurpleExtension {
  url:          string;
  valueDecimal: number;
}

export interface Communication {
  language: MaritalStatus;
}

export interface MaritalStatus {
  coding: Coding[];
  text:   string;
}

export interface Coding {
  system:  string;
  code:    string;
  display: string;
}

export interface ResourceExtension {
  url:           string;
  extension?:    FluffyExtension[];
  valueString?:  string;
  valueCode?:    string;
  valueAddress?: ValueAddress;
  valueDecimal?: number;
}

export interface FluffyExtension {
  url:          URL;
  valueCoding?: Coding;
  valueString?: string;
}

export enum URL {
  OmbCategory = "ombCategory",
  Text = "text",
}

export interface ValueAddress {
  city:    string;
  state:   string;
  country: string;
}

export interface Identifier {
  system: string;
  value:  string;
  type?:  MaritalStatus;
}

export interface Meta {
  lastUpdated: Date;
  versionId:   string;
}

export interface Name {
  use:     string;
  family:  string;
  given:   string[];
  prefix?: string[];
}

export interface Telecom {
  system: string;
  value:  string;
  use:    string;
}

export interface Text {
  status: string;
  div:    string;
}

export interface Search {
  mode: string;
}

export interface Link {
  relation: string;
  url:      string;
}
