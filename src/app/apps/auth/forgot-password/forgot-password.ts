import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.services';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './forgot-password.html',
  styleUrl: '../auth-page.scss'
})
export class ForgotPassword {

  email = '';

  readonly isLoading = signal(false);
  readonly isSent = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly authService: AuthService
  ) {}

  async onSubmit(): Promise<void> {
    this.errorMessage.set('');

    if (!this.email.trim()) {
      this.errorMessage.set('Ingresa tu correo electrónico.');
      return;
    }

    this.isLoading.set(true);

    try {
      await this.authService.forgotPassword({
        email: this.email.trim()
      });

      this.isSent.set(true);
    } catch {
      this.errorMessage.set('No fue posible enviar las instrucciones.');
    } finally {
      this.isLoading.set(false);
    }
  }
}
