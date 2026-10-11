import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AuthStateService } from '../../core/auth/auth-state.service';
import { OrganizationContextService } from '../../core/organizations/organization-context.service';
import { WorkspaceContextService } from '../../core/workspaces/workspace-context.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  readonly currentUser;
  readonly activeOrganization;
  readonly activeWorkspace;

  constructor(
    private readonly authState: AuthStateService,
    private readonly organizationContext: OrganizationContextService,
    private readonly workspaceContext: WorkspaceContextService,
  ) {
    this.currentUser = this.authState.currentUser;

    this.activeOrganization = this.organizationContext.activeOrganization;

    this.activeWorkspace = this.workspaceContext.activeWorkspace;
  }
}
