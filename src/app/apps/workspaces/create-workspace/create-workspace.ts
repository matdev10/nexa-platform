import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { WorkspaceService } from '../../../core/workspaces/workspace.service';
import { WorkspaceContextService } from '../../../core/workspaces/workspace-context.service';
import { OrganizationContextService } from '../../../core/organizations/organization-context.service';

@Component({
  selector: 'app-create-workspace',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './create-workspace.html',
  styleUrl: './create-workspace.scss'
})
export class CreateWorkspace {

  name = '';
  description = '';

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly workspaceService: WorkspaceService,
    private readonly workspaceContext: WorkspaceContextService,
    private readonly organizationContext: OrganizationContextService,
    private readonly router: Router
  ) {}

  async onSubmit(): Promise<void> {

    this.errorMessage.set('');

    if (!this.name.trim()) {
      this.errorMessage.set(
        'Ingresa el nombre del Workspace.'
      );
      return;
    }

    const organizationId =
      this.organizationContext.activeOrganizationId();

    if (!organizationId) {
      await this.router.navigate(['/organizations']);
      return;
    }

    this.isLoading.set(true);

    try {

      const workspace =
        await this.workspaceService.create({
          organizationId,
          name: this.name.trim(),
          description:
            this.description.trim() || undefined
        });

      this.workspaceContext
        .setActiveWorkspace(workspace);

      await this.router.navigate(['/dashboard']);

    } catch {

      this.errorMessage.set(
        'No fue posible crear el Workspace.'
      );

    } finally {

      this.isLoading.set(false);

    }
  }
}