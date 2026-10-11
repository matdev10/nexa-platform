export interface AuditLog {
  id: string;

  organizationId: string;
  workspaceId?: string;

  userId?: string;

  action: string;

  entityType: string;
  entityId?: string;

  metadata?: Record<string, unknown>;

  createdAt: Date;
}