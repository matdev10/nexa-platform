export type OrganizationMemberStatus =
  | 'invited'
  | 'active'
  | 'inactive'
  | 'removed';

export interface OrganizationMember {
  id: string;

  organizationId: string;
  userId: string;

  roleId: string;

  status: OrganizationMemberStatus;

  joinedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}