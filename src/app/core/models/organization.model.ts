export type OrganizationStatus = 'active' | 'inactive' | 'suspended';

export interface Organization {
  id: string;

  name: string;
  slug: string;

  legalName?: string;
  taxId?: string;

  country: string;
  currency: string;
  timezone: string;

  logoUrl?: string;
  primaryColor?: string;

  status: OrganizationStatus;

  createdAt: Date;
  updatedAt: Date;
}