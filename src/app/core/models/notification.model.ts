export type NotificationType =
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export interface Notification {
  id: string;

  userId: string;

  organizationId?: string;
  workspaceId?: string;

  title: string;
  message: string;

  type: NotificationType;

  readAt?: Date;

  createdAt: Date;
}