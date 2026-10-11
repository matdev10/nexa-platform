import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Organization } from '../../core/models/organization.model';

import { OrganizationService } from '../../core/organizations/organization.service';
import { OrganizationContextService } from '../../core/organizations/organization-context.service';

import { WorkspaceContextService } from '../../core/workspaces/workspace-context.service';

@Component({
  selector: 'app-organizations',
  standalone: true,
  templateUrl: './organizations.html',
  styleUrl: './organizations.scss',
})
export class Organizations implements OnInit {
  readonly organizations = signal<Organization[]>([]);

  readonly isLoading = signal(true);

  readonly errorMessage = signal('');

  constructor(
    private readonly organizationService: OrganizationService,

    private readonly organizationContext: OrganizationContextService,

    private readonly workspaceContext: WorkspaceContextService,

    private readonly router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const organizations = await this.organizationService.getMine();

      this.organizations.set(organizations);
    } catch {
      this.errorMessage.set('No fue posible cargar tus organizaciones.');
    } finally {
      this.isLoading.set(false);
    }
  }

  async selectOrganization(organization: Organization): Promise<void> {
    this.organizationContext.setActiveOrganization(organization);

    this.workspaceContext.clearActiveWorkspace();

    await this.router.navigate(['/workspaces']);
  }

  async createOrganization(): Promise<void> {
    await this.router.navigate(['/organizations/new']);
  }
}
