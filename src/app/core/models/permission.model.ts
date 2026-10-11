export type PermissionAction =
  | 'read'
  | 'create'
  | 'update'
  | 'delete'
  | 'approve'
  | 'export'
  | 'manage';

export interface Permission {
  id: string;

  code: string;

  name: string;
  description?: string;

  appCode: string;
  action: PermissionAction;
}