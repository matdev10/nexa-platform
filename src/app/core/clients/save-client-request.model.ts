export interface CreateClientRequest {
  workspaceId: string;

  name: string;
  email?: string;
  phone?: string;
  company?: string;
}

export interface UpdateClientRequest {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
}
