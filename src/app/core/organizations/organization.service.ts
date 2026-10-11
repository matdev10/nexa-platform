import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { API_BASE_URL } from '../api/api-config';

import { Organization } from '../models/organization.model';
import { CreateOrganizationRequest } from './create-organization-request.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private readonly apiUrl = `${API_BASE_URL}/organizations`;

  constructor(
    private readonly http: HttpClient
  ) {}

  create(
    request: CreateOrganizationRequest
  ): Promise<Organization> {
    return firstValueFrom(
      this.http.post<Organization>(
        this.apiUrl,
        request
      )
    );
  }

  getMine(): Promise<Organization[]> {
    return firstValueFrom(
      this.http.get<Organization[]>(
        this.apiUrl
      )
    );
  }

  getById(id: string): Promise<Organization> {
    return firstValueFrom(
      this.http.get<Organization>(
        `${this.apiUrl}/${id}`
      )
    );
  }
}