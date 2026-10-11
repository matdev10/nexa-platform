export type WorkspaceAppStatus =
  | 'enabled'
  | 'disabled';

export interface WorkspaceApp {
  id: string;

  workspaceId: string;
  appId: string;

  status: WorkspaceAppStatus;

  installedByUserId: string;

  installedAt: Date;
  updatedAt: Date;
}