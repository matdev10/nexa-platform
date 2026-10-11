import { Component, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TimeoutError } from 'rxjs';

import { AuthService } from '../../../core/auth/auth.services';
import { AuthStateService } from '../../../core/auth/auth-state.service';
import { SessionService } from '../../../core/auth/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: '../auth-page.scss'
})
export class Login {

  email = '';
  password = '';

  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  constructor(
    private readonly authService: AuthService,
    private readonly authStateService: AuthStateService,
    private readonly sessionService: SessionService
  ) {}

  async onSubmit(): Promise<void> {
    this.errorMessage.set('');

    if (!this.email || !this.password) {
      this.errorMessage.set('Ingresa tu correo y contraseña.');
      return;
    }

    this.isLoading.set(true);

    try {
      const response = await this.authService.login({
        email: this.email,
        password: this.password
      });

      this.authStateService.setSession({
        user: response.user,
        accessToken: response.accessToken,
        expiresAt: new Date(response.expiresAt)
      });

      await this.sessionService.enterPlatform();

    } catch (error) {
      this.errorMessage.set(
        this.isApiUnavailable(error)
          ? 'No se pudo conectar con Nexa. Revisa que la API esté en marcha.'
          : 'Correo o contraseña incorrectos.'
      );
    } finally {
      this.isLoading.set(false);
    }
  }

  private isApiUnavailable(error: unknown): boolean {
    if (error instanceof TimeoutError) {
      return true;
    }

    return error instanceof HttpErrorResponse && error.status === 0;
  }
}