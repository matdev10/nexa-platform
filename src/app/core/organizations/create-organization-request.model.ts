export interface CreateOrganizationRequest {
  name: string;
  legalName?: string;
  taxId?: string;

  country: string;
  currency: string;
  timezone: string;
}