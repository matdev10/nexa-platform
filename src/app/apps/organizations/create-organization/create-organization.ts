import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { OrganizationService } from '../../../core/organizations/organization.service';
import { OrganizationContextService } from '../../../core/organizations/organization-context.service';

@Component({
  selector: 'app-create-organization',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './create-organization.html',
  styleUrl: './create-organization.scss'
})
export class CreateOrganization {

  name = '';
  legalName = '';
  taxId = '';

  country = 'CL';
  currency = 'CLP';
  timezone = 'America/Santiago';

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly organizationService: OrganizationService,
    private readonly organizationContext: OrganizationContextService,
    private readonly router: Router
  ) {}

  async onSubmit(): Promise<void> {

    this.errorMessage.set('');

    if (!this.name.trim()) {
      this.errorMessage.set(
        'Ingresa el nombre de la organización.'
      );
      return;
    }

    this.isLoading.set(true);

    try {

      const organization =
        await this.organizationService.create({
          name: this.name.trim(),

          legalName:
            this.legalName.trim() || undefined,

          taxId:
            this.taxId.trim() || undefined,

          country: this.country,
          currency: this.currency,
          timezone: this.timezone
        });

      this.organizationContext
        .setActiveOrganization(organization);

      await this.router.navigate(['/workspaces/new']);

    } catch {

      this.errorMessage.set(
        'No fue posible crear la organización.'
      );

    } finally {

      this.isLoading.set(false);

    }
  }
}