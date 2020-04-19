export interface PractitionerBundle {
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
  extension?: (ExtensionEntity)[] | null;
  identifier?: (IdentifierEntity)[] | null;
  active: boolean;
  name?: (NameEntity)[] | null;
  address?: (AddressEntity)[] | null;
  gender: string;
  meta: Meta;
}
export interface ExtensionEntity {
  url: string;
  valueInteger: number;
}
export interface IdentifierEntity {
  system: string;
  value: string;
}
export interface NameEntity {
  family: string;
  given?: (string)[] | null;
  prefix?: (string)[] | null;
}
export interface AddressEntity {
  line?: (string)[] | null;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
export interface Meta {
  lastUpdated: string;
  versionId: string;
}
export interface Search {
  mode: string;
}
