import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { OrganizationContextService } from './organization-context.service';

export const organizationGuard: CanActivateFn = () => {
  const organizationContext = inject(OrganizationContextService);
  const router = inject(Router);

  if (organizationContext.hasActiveOrganization()) {
    return true;
  }

  return router.createUrlTree(['/onboarding']);
};