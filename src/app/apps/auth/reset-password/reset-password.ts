import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.services';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './reset-password.html',
  styleUrl: '../auth-page.scss'
})
export class ResetPassword implements OnInit {

  token = '';
  password = '';
  confirmPassword = '';

  readonly isLoading = signal(false);
  readonly isUpdated = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') ?? '';

    if (!this.token) {
      this.errorMessage.set('El enlace de recuperación no es válido.');
    }
  }

  async onSubmit(): Promise<void> {
    this.errorMessage.set('');

    if (!this.token) {
      this.errorMessage.set('El enlace de recuperación no es válido.');
      return;
    }

    if (!this.password || !this.confirmPassword) {
      this.errorMessage.set('Completa la nueva contraseña.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage.set('Las contraseñas no coinciden.');
      return;
    }

    this.isLoading.set(true);

    try {
      await this.authService.resetPassword({
        token: this.token,
        password: this.password,
        confirmPassword: this.confirmPassword
      });

      this.isUpdated.set(true);
    } catch {
      this.errorMessage.set('No fue posible actualizar la contraseña.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
