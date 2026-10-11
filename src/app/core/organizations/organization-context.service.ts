import { Injectable, computed, signal } from '@angular/core';

import { Organization } from '../models/organization.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationContextService {

  private readonly storageKey =
    'nexa_active_organization';

  private readonly activeOrganizationSignal =
    signal<Organization | null>(
      this.restoreOrganization()
    );

  readonly activeOrganization =
    this.activeOrganizationSignal.asReadonly();

  readonly activeOrganizationId = computed(
    () => this.activeOrganizationSignal()?.id ?? null
  );

  readonly hasActiveOrganization = computed(
    () => this.activeOrganizationSignal() !== null
  );

  setActiveOrganization(
    organization: Organization
  ): void {

    this.activeOrganizationSignal.set(
      organization
    );

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(organization)
    );
  }

  clearActiveOrganization(): void {

    this.activeOrganizationSignal.set(null);

    localStorage.removeItem(
      this.storageKey
    );
  }

  private restoreOrganization():
    Organization | null {

    const storedOrganization =
      localStorage.getItem(this.storageKey);

    if (!storedOrganization) {
      return null;
    }

    try {
      return JSON.parse(
        storedOrganization
      ) as Organization;

    } catch {

      localStorage.removeItem(
        this.storageKey
      );

      return null;
    }
  }
}