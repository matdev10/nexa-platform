import { Injectable, computed, signal } from '@angular/core';

import { Workspace } from '../models/workspace.model';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceContextService {

  private readonly storageKey =
    'nexa_active_workspace';

  private readonly activeWorkspaceSignal =
    signal<Workspace | null>(
      this.restoreWorkspace()
    );

  readonly activeWorkspace =
    this.activeWorkspaceSignal.asReadonly();

  readonly activeWorkspaceId = computed(
    () => this.activeWorkspaceSignal()?.id ?? null
  );

  readonly hasActiveWorkspace = computed(
    () => this.activeWorkspaceSignal() !== null
  );

  setActiveWorkspace(
    workspace: Workspace
  ): void {

    this.activeWorkspaceSignal.set(workspace);

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(workspace)
    );
  }

  clearActiveWorkspace(): void {

    this.activeWorkspaceSignal.set(null);

    localStorage.removeItem(
      this.storageKey
    );
  }

  private restoreWorkspace():
    Workspace | null {

    const storedWorkspace =
      localStorage.getItem(this.storageKey);

    if (!storedWorkspace) {
      return null;
    }

    try {
      return JSON.parse(
        storedWorkspace
      ) as Workspace;

    } catch {

      localStorage.removeItem(
        this.storageKey
      );

      return null;
    }
  }
}