export type ClientStatus = 'active' | 'inactive';

export interface Client {
  id: string;
  workspaceId: string;

  name: string;
  email?: string | null;
  phone?: string | null;
  company?: string | null;

  status: ClientStatus;

  createdAt: string;
  updatedAt: string;
}
