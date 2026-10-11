import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { API_BASE_URL } from '../api/api-config';

import { Client, ClientStatus } from '../models/client.model';
import {
  CreateClientRequest,
  UpdateClientRequest
} from './save-client-request.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly apiUrl = `${API_BASE_URL}/customers`;

  constructor(
    private readonly http: HttpClient
  ) {}

  list(workspaceId: string): Promise<Client[]> {
    return firstValueFrom(
      this.http.get<Client[]>(
        `${this.apiUrl}/workspace/${workspaceId}`
      )
    );
  }

  getById(id: string): Promise<Client> {
    return firstValueFrom(
      this.http.get<Client>(
        `${this.apiUrl}/${id}`
      )
    );
  }

  create(request: CreateClientRequest): Promise<Client> {
    return firstValueFrom(
      this.http.post<Client>(
        this.apiUrl,
        request
      )
    );
  }

  update(
    id: string,
    request: UpdateClientRequest
  ): Promise<Client> {
    return firstValueFrom(
      this.http.put<Client>(
        `${this.apiUrl}/${id}`,
        request
      )
    );
  }

  changeStatus(
    id: string,
    status: ClientStatus
  ): Promise<Client> {
    return firstValueFrom(
      this.http.patch<Client>(
        `${this.apiUrl}/${id}/status`,
        { status }
      )
    );
  }
}
