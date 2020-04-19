export interface Practitioner {
  resource: Resource;
}
export interface Resource {
  resourceType: string;
  id: string;
  identifier?: (IdentifierEntity)[] | null;
  active: boolean;
  name?: (NameEntity)[] | null;
  address?: (AddressEntity)[] | null;
  gender: string;
  meta: Meta;
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
