export type WorkspaceMemberStatus =
  | 'active'
  | 'inactive'
  | 'removed';

export interface WorkspaceMember {
  id: string;

  workspaceId: string;
  userId: string;

  roleId: string;

  status: WorkspaceMemberStatus;

  joinedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}