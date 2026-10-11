import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.services';
import { AuthStateService } from '../../../core/auth/auth-state.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: '../auth-page.scss'
})
export class Register {

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly authService: AuthService,
    private readonly authStateService: AuthStateService,
    private readonly router: Router
  ) {}

  async onSubmit(): Promise<void> {
    this.errorMessage.set('');

    if (
      !this.firstName ||
      !this.lastName ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      this.errorMessage.set('Completa todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage.set('Las contraseñas no coinciden.');
      return;
    }

    this.isLoading.set(true);

    try {
      const response = await this.authService.register({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      });

      this.authStateService.setSession({
  user: response.user,
  accessToken: response.accessToken,
  expiresAt: new Date(response.expiresAt)
});

      await this.router.navigate(['/onboarding']);
    } catch {
      this.errorMessage.set('No fue posible crear la cuenta.');
    } finally {
      this.isLoading.set(false);
    }
  }
}