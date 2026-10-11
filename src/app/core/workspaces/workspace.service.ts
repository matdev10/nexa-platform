import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { API_BASE_URL } from '../api/api-config';

import { Workspace } from '../models/workspace.model';
import { CreateWorkspaceRequest } from './create-workspace-request.model';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  private readonly apiUrl = `${API_BASE_URL}/workspaces`;

  constructor(
    private readonly http: HttpClient
  ) {}

  create(
    request: CreateWorkspaceRequest
  ): Promise<Workspace> {
    return firstValueFrom(
      this.http.post<Workspace>(
        this.apiUrl,
        request
      )
    );
  }

  getByOrganization(
    organizationId: string
  ): Promise<Workspace[]> {
    return firstValueFrom(
      this.http.get<Workspace[]>(
        `${this.apiUrl}/organization/${organizationId}`
      )
    );
  }

  getById(id: string): Promise<Workspace> {
    return firstValueFrom(
      this.http.get<Workspace>(
        `${this.apiUrl}/${id}`
      )
    );
  }
}