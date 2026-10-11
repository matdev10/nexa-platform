import {
  Component,
  OnInit,
  signal
} from '@angular/core';

import { Router } from '@angular/router';

import { Workspace } from '../../core/models/workspace.model';

import { WorkspaceService } from '../../core/workspaces/workspace.service';
import { WorkspaceContextService } from '../../core/workspaces/workspace-context.service';

import { OrganizationContextService } from '../../core/organizations/organization-context.service';

@Component({
  selector: 'app-workspaces',
  standalone: true,
  templateUrl: './workspaces.html',
  styleUrl: './workspaces.scss'
})
export class Workspaces implements OnInit {

  readonly workspaces =
    signal<Workspace[]>([]);

  readonly isLoading =
    signal(true);

  readonly errorMessage =
    signal('');

  constructor(
    private readonly workspaceService: WorkspaceService,
    private readonly workspaceContext: WorkspaceContextService,
    private readonly organizationContext: OrganizationContextService,
    private readonly router: Router
  ) {}

  async ngOnInit(): Promise<void> {

    const organizationId =
      this.organizationContext.activeOrganizationId();

    if (!organizationId) {
      await this.router.navigate(['/organizations']);
      return;
    }

    try {

      const workspaces =
        await this.workspaceService.getByOrganization(
          organizationId
        );

      this.workspaces.set(workspaces);

    } catch {

      this.errorMessage.set(
        'No fue posible cargar los Workspaces.'
      );

    } finally {

      this.isLoading.set(false);

    }
  }

  async selectWorkspace(
    workspace: Workspace
  ): Promise<void> {

    this.workspaceContext.setActiveWorkspace(
      workspace
    );

    await this.router.navigate(['/dashboard']);
  }

async createWorkspace(): Promise<void> {
  await this.router.navigate(['/workspaces/new']);
}

}