import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStateService } from '../../../core/auth/auth-state.service';
import { SessionService } from '../../../core/auth/session.service';

import { Organization } from '../../../core/models/organization.model';
import { OrganizationContextService } from '../../../core/organizations/organization-context.service';
import { OrganizationService } from '../../../core/organizations/organization.service';

import { Workspace } from '../../../core/models/workspace.model';
import { WorkspaceContextService } from '../../../core/workspaces/workspace-context.service';
import { WorkspaceService } from '../../../core/workspaces/workspace.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar implements OnInit {
  readonly activeOrganization;
  readonly activeWorkspace;
  readonly currentUser;

  contextMenuOpen = false;
  userMenuOpen = false;

  organizations: Organization[] = [];
  workspaces: Workspace[] = [];

  isLoadingOrganizations = false;
  isLoadingWorkspaces = false;

  constructor(
    private readonly organizationContext: OrganizationContextService,
    private readonly workspaceContext: WorkspaceContextService,
    private readonly workspaceService: WorkspaceService,
    private readonly authState: AuthStateService,
    private readonly sessionService: SessionService,
    private readonly router: Router,
    private readonly organizationService: OrganizationService,
  ) {
    this.activeOrganization = this.organizationContext.activeOrganization;
    this.activeWorkspace = this.workspaceContext.activeWorkspace;
    this.currentUser = this.authState.currentUser;
  }

  async ngOnInit(): Promise<void> {
    await this.loadOrganizations();
    await this.loadWorkspaces();
  }

  toggleContextMenu(event: MouseEvent): void {
    event.stopPropagation();

    this.userMenuOpen = false;
    this.contextMenuOpen = !this.contextMenuOpen;
  }

  toggleUserMenu(event: MouseEvent): void {
    event.stopPropagation();

    this.contextMenuOpen = false;
    this.userMenuOpen = !this.userMenuOpen;
  }

  @HostListener('document:click')
  closeMenus(): void {
    this.contextMenuOpen = false;
    this.userMenuOpen = false;
  }

  async loadOrganizations(): Promise<void> {
    this.isLoadingOrganizations = true;

    try {
      this.organizations = await this.organizationService.getMine();
    } catch {
      this.organizations = [];
    } finally {
      this.isLoadingOrganizations = false;
    }
  }

  async selectOrganization(organization: Organization): Promise<void> {
    this.contextMenuOpen = false;
    this.organizationContext.setActiveOrganization(organization);
    this.workspaceContext.clearActiveWorkspace();

    try {
      this.workspaces = await this.workspaceService.getByOrganization(organization.id);
    } catch {
      this.workspaces = [];
      await this.router.navigate(['/workspaces']);
      return;
    }

    if (this.workspaces.length === 1) {
      this.workspaceContext.setActiveWorkspace(this.workspaces[0]);
      await this.router.navigate(['/dashboard']);
      return;
    }

    await this.router.navigate(['/workspaces']);
  }

  async loadWorkspaces(): Promise<void> {
    const organizationId = this.organizationContext.activeOrganizationId();

    if (!organizationId) {
      this.workspaces = [];
      return;
    }

    this.isLoadingWorkspaces = true;

    try {
      this.workspaces = await this.workspaceService.getByOrganization(organizationId);
    } catch {
      this.workspaces = [];
    } finally {
      this.isLoadingWorkspaces = false;
    }
  }

  selectWorkspace(workspace: Workspace): void {
    this.workspaceContext.setActiveWorkspace(workspace);
    this.contextMenuOpen = false;

    const path = this.router.url.split('?')[0];

    if (path.startsWith('/clients/')) {
      void this.router.navigate(['/clients']);
      return;
    }

    if (
      path === '/workspaces' ||
      path.startsWith('/workspaces/') ||
      path === '/organizations' ||
      path.startsWith('/organizations/')
    ) {
      void this.router.navigate(['/dashboard']);
    }
  }

  async manageOrganizations(): Promise<void> {
    this.contextMenuOpen = false;
    await this.router.navigate(['/organizations']);
  }

  async manageWorkspaces(): Promise<void> {
    this.contextMenuOpen = false;
    await this.router.navigate(['/workspaces']);
  }

  async logout(): Promise<void> {
    this.userMenuOpen = false;
    await this.sessionService.logout();
  }
}
