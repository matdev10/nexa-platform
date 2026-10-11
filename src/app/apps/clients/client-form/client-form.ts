import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ClientStatus } from '../../../core/models/client.model';
import { ClientService } from '../../../core/clients/client.service';
import { WorkspaceContextService } from '../../../core/workspaces/workspace-context.service';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './client-form.html',
  styleUrl: './client-form.scss',
})
export class ClientForm implements OnInit {
  clientId: string | null = null;

  name = '';
  company = '';
  email = '';
  phone = '';
  status: ClientStatus = 'active';

  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly clientService: ClientService,
    private readonly workspaceContext: WorkspaceContextService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  get isEditing(): boolean {
    return this.clientId !== null;
  }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id || id === 'new') {
      return;
    }

    this.clientId = id;
    this.isLoading.set(true);

    try {
      const client = await this.clientService.getById(id);
      const workspaceId = this.workspaceContext.activeWorkspaceId();

      if (client.workspaceId !== workspaceId) {
        this.errorMessage.set('Este cliente no pertenece al Workspace activo.');
        this.clientId = null;
        return;
      }

      this.name = client.name;
      this.company = client.company ?? '';
      this.email = client.email ?? '';
      this.phone = client.phone ?? '';
      this.status = client.status;
    } catch {
      this.errorMessage.set('No fue posible cargar el cliente.');
    } finally {
      this.isLoading.set(false);
    }
  }

  async onSubmit(): Promise<void> {
    this.errorMessage.set('');

    if (!this.name.trim()) {
      this.errorMessage.set('Ingresa el nombre del cliente.');
      return;
    }

    const workspaceId = this.workspaceContext.activeWorkspaceId();

    if (!workspaceId) {
      await this.router.navigate(['/workspaces']);
      return;
    }

    const fields = {
      name: this.name.trim(),
      company: this.company.trim() || undefined,
      email: this.email.trim() || undefined,
      phone: this.phone.trim() || undefined,
    };

    this.isSaving.set(true);

    try {
      if (this.clientId) {
        await this.clientService.update(this.clientId, fields);
        await this.clientService.changeStatus(this.clientId, this.status);
      } else {
        await this.clientService.create({
          workspaceId,
          ...fields,
        });
      }

      await this.router.navigate(['/clients']);
    } catch {
      this.errorMessage.set(
        this.clientId
          ? 'No fue posible guardar el cliente.'
          : 'No fue posible crear el cliente.',
      );
    } finally {
      this.isSaving.set(false);
    }
  }
}
