import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { API_BASE_URL } from '../api/api-config';

import { LoginRequest } from './login-request.model';
import { RegisterRequest } from './register-request.model';
import { ForgotPasswordRequest } from './forgot-password-request.model';
import { ResetPasswordRequest } from './reset-password-request.model';
import { AuthResponse } from './auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = `${API_BASE_URL}/auth`;

  constructor(
    private readonly http: HttpClient
  ) {}

  login(request: LoginRequest): Promise<AuthResponse> {
    return firstValueFrom(
      this.http.post<AuthResponse>(
        `${this.apiUrl}/login`,
        request
      )
    );
  }

  register(request: RegisterRequest): Promise<AuthResponse> {
    return firstValueFrom(
      this.http.post<AuthResponse>(
        `${this.apiUrl}/register`,
        request
      )
    );
  }

  forgotPassword(request: ForgotPasswordRequest): Promise<void> {
    return firstValueFrom(
      this.http.post<void>(
        `${this.apiUrl}/forgot-password`,
        request
      )
    );
  }

  resetPassword(request: ResetPasswordRequest): Promise<void> {
    return firstValueFrom(
      this.http.post<void>(
        `${this.apiUrl}/reset-password`,
        request
      )
    );
  }
}