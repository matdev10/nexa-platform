import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Client } from '../../core/models/client.model';
import { ClientService } from '../../core/clients/client.service';

import { OrganizationContextService } from '../../core/organizations/organization-context.service';
import { WorkspaceContextService } from '../../core/workspaces/workspace-context.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  readonly clients = signal<Client[]>([]);
  readonly visibleClients = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const activeClients = this.clients().filter((client) => client.status === 'active');

    if (!term) {
      return activeClients;
    }

    return activeClients.filter((client) =>
      [client.name, client.email, client.phone, client.company]
        .filter((value): value is string => Boolean(value))
        .some((value) => value.toLowerCase().includes(term)),
    );
  });

  readonly isLoading = signal(true);
  readonly errorMessage = signal('');
  readonly searchTerm = signal('');

  search = '';

  private requestId = 0;

  constructor(
    private readonly clientService: ClientService,
    private readonly organizationContext: OrganizationContextService,
    private readonly workspaceContext: WorkspaceContextService,
    private readonly router: Router,
  ) {
    effect(() => {
      const organizationId = this.organizationContext.activeOrganizationId();
      const workspaceId = this.workspaceContext.activeWorkspaceId();

      this.search = '';
      this.searchTerm.set('');

      if (!organizationId || !workspaceId) {
        this.clients.set([]);
        this.isLoading.set(false);
        return;
      }

      void this.loadClients(workspaceId);
    });
  }

  onSearch(): void {
    this.searchTerm.set(this.search.trim());
  }

  async createClient(): Promise<void> {
    await this.router.navigate(['/clients/new']);
  }

  async deactivate(client: Client, event: Event): Promise<void> {
    event.preventDefault();
    event.stopPropagation();

    const confirmed = globalThis.confirm(`¿Desactivar a ${client.name}?`);

    if (!confirmed) {
      return;
    }

    this.errorMessage.set('');

    try {
      const updated = await this.clientService.changeStatus(client.id, 'inactive');
      this.clients.update((items) =>
        items.map((item) => (item.id === updated.id ? updated : item)),
      );
    } catch {
      this.errorMessage.set('No fue posible desactivar el cliente.');
    }
  }

  details(client: Client): string {
    return [client.company, client.email, client.phone]
      .filter((value): value is string => Boolean(value))
      .join(' · ');
  }

  private async loadClients(workspaceId: string): Promise<void> {
    const requestId = ++this.requestId;

    this.isLoading.set(true);
    this.errorMessage.set('');
    this.clients.set([]);

    try {
      const clients = await this.clientService.list(workspaceId);

      if (requestId !== this.requestId) {
        return;
      }

      this.clients.set(clients);
    } catch {
      if (requestId !== this.requestId) {
        return;
      }

      this.errorMessage.set('No fue posible cargar los clientes.');
    } finally {
      if (requestId === this.requestId) {
        this.isLoading.set(false);
      }
    }
  }
}
