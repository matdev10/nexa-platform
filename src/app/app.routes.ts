import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';
import { organizationGuard } from './core/organizations/organization.guard';
import { workspaceGuard } from './core/workspaces/workspace.guard';

import { AppLayout } from './shared/app-layout/app-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () => import('./apps/auth/login/login').then((m) => m.Login),
  },

  {
    path: 'register',
    loadComponent: () => import('./apps/auth/register/register').then((m) => m.Register),
  },

  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./apps/auth/forgot-password/forgot-password').then((m) => m.ForgotPassword),
  },

  {
    path: 'reset-password',
    loadComponent: () =>
      import('./apps/auth/reset-password/reset-password').then((m) => m.ResetPassword),
  },

  {
    path: 'onboarding',
    loadComponent: () => import('./apps/onboarding/onboarding').then((m) => m.Onboarding),
    canActivate: [authGuard],
  },

  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],

    children: [
      {
        path: 'organizations/new',
        loadComponent: () =>
          import('./apps/organizations/create-organization/create-organization').then(
            (m) => m.CreateOrganization,
          ),
      },

      {
        path: 'organizations',
        loadComponent: () =>
          import('./apps/organizations/organizations').then((m) => m.Organizations),
      },

      {
        path: 'workspaces/new',
        loadComponent: () =>
          import('./apps/workspaces/create-workspace/create-workspace').then(
            (m) => m.CreateWorkspace,
          ),
        canActivate: [organizationGuard],
      },

      {
        path: 'workspaces',
        loadComponent: () => import('./apps/workspaces/workspaces').then((m) => m.Workspaces),
        canActivate: [organizationGuard],
      },

      {
        path: 'dashboard',
        loadComponent: () => import('./apps/dashboard/dashboard').then((m) => m.Dashboard),
        canActivate: [organizationGuard, workspaceGuard],
      },

      {
        path: 'clients/new',
        loadComponent: () =>
          import('./apps/clients/client-form/client-form').then((m) => m.ClientForm),
        canActivate: [organizationGuard, workspaceGuard],
      },

      {
        path: 'clients/:id',
        loadComponent: () =>
          import('./apps/clients/client-form/client-form').then((m) => m.ClientForm),
        canActivate: [organizationGuard, workspaceGuard],
      },

      {
        path: 'clients',
        loadComponent: () => import('./apps/clients/clients').then((m) => m.Clients),
        canActivate: [organizationGuard, workspaceGuard],
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];
