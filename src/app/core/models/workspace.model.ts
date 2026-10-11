export type WorkspaceStatus = 'active' | 'inactive' | 'archived';

export interface Workspace {
  id: string;

  organizationId: string;

  name: string;
  slug: string;

  description?: string;

  icon?: string;
  color?: string;

  status: WorkspaceStatus;

  createdAt: Date;
  updatedAt: Date;
}