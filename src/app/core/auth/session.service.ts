import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStateService } from './auth-state.service';

import { Organization } from '../models/organization.model';
import { OrganizationContextService } from '../organizations/organization-context.service';
import { OrganizationService } from '../organizations/organization.service';

import { Workspace } from '../models/workspace.model';
import { WorkspaceContextService } from '../workspaces/workspace-context.service';
import { WorkspaceService } from '../workspaces/workspace.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private readonly authState: AuthStateService,
    private readonly organizationContext: OrganizationContextService,
    private readonly organizationService: OrganizationService,
    private readonly workspaceContext: WorkspaceContextService,
    private readonly workspaceService: WorkspaceService,
    private readonly router: Router
  ) {}

  async enterPlatform(): Promise<void> {
    let organizations: Organization[] = [];

    try {
      organizations = await this.organizationService.getMine();
    } catch {
      await this.router.navigate(['/organizations']);
      return;
    }

    if (organizations.length === 0) {
      this.organizationContext.clearActiveOrganization();
      this.workspaceContext.clearActiveWorkspace();
      await this.router.navigate(['/onboarding']);
      return;
    }

    const storedOrganization = this.organizationContext.activeOrganization();
    const organization =
      organizations.find((item) => item.id === storedOrganization?.id) ??
      (organizations.length === 1 ? organizations[0] : null);

    if (!organization) {
      this.organizationContext.clearActiveOrganization();
      this.workspaceContext.clearActiveWorkspace();
      await this.router.navigate(['/organizations']);
      return;
    }

    this.organizationContext.setActiveOrganization(organization);

    let workspaces: Workspace[] = [];

    try {
      workspaces = await this.workspaceService.getByOrganization(organization.id);
    } catch {
      this.workspaceContext.clearActiveWorkspace();
      await this.router.navigate(['/workspaces']);
      return;
    }

    const storedWorkspace = this.workspaceContext.activeWorkspace();
    const workspace =
      workspaces.find(
        (item) =>
          item.id === storedWorkspace?.id &&
          item.organizationId === organization.id
      ) ?? (workspaces.length === 1 ? workspaces[0] : null);

    if (!workspace) {
      this.workspaceContext.clearActiveWorkspace();
      await this.router.navigate(['/workspaces']);
      return;
    }

    this.workspaceContext.setActiveWorkspace(workspace);
    await this.router.navigate(['/dashboard']);
  }

  async logout(): Promise<void> {
    this.workspaceContext.clearActiveWorkspace();
    this.organizationContext.clearActiveOrganization();
    this.authState.clearSession();

    await this.router.navigate(['/login']);
  }
}
