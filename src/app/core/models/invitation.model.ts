export type InvitationStatus =
  | 'pending'
  | 'accepted'
  | 'expired'
  | 'cancelled';

export interface Invitation {
  id: string;

  organizationId: string;
  workspaceId?: string;

  email: string;
  roleId: string;

  status: InvitationStatus;

  expiresAt: Date;
  acceptedAt?: Date;

  createdByUserId: string;

  createdAt: Date;
  updatedAt: Date;
}