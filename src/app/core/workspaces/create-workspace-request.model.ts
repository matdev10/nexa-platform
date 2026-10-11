export interface CreateWorkspaceRequest {
  organizationId: string;

  name: string;
  description?: string;

  color?: string;
  icon?: string;
}