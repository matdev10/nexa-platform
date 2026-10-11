import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { WorkspaceContextService } from './workspace-context.service';

export const workspaceGuard: CanActivateFn = () => {
  const workspaceContext = inject(WorkspaceContextService);
  const router = inject(Router);

  if (workspaceContext.hasActiveWorkspace()) {
    return true;
  }

  return router.createUrlTree(['/workspaces']);
};