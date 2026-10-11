export interface Role {
  id: string;

  organizationId: string;

  name: string;
  description?: string;

  isSystemRole: boolean;

  permissionCodes: string[];

  createdAt: Date;
  updatedAt: Date;
}