import { Injectable, signal } from '@angular/core';

import { AuthSession } from './auth-session.model';
import { AuthUser } from './auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private readonly storageKey = 'nexa_auth_session';

  private readonly sessionSignal =
    signal<AuthSession | null>(
      this.restoreSession()
    );

  readonly session =
    this.sessionSignal.asReadonly();

  readonly isAuthenticated = () => {
    const session = this.sessionSignal();

    if (!session) {
      return false;
    }

    if (session.expiresAt <= new Date()) {
      this.clearSession();
      return false;
    }

    return true;
  };

  readonly currentUser = (): AuthUser | null =>
    this.sessionSignal()?.user ?? null;

  setSession(session: AuthSession): void {
    this.sessionSignal.set(session);

    localStorage.setItem(
      this.storageKey,
      JSON.stringify(session)
    );
  }

  clearSession(): void {
    this.sessionSignal.set(null);

    localStorage.removeItem(
      this.storageKey
    );
  }

  private restoreSession(): AuthSession | null {

    const storedSession =
      localStorage.getItem(this.storageKey);

    if (!storedSession) {
      return null;
    }

    try {

      const parsedSession =
        JSON.parse(storedSession);

      const session: AuthSession = {
        user: parsedSession.user,
        accessToken: parsedSession.accessToken,
        expiresAt: new Date(parsedSession.expiresAt)
      };

      if (session.expiresAt <= new Date()) {
        localStorage.removeItem(this.storageKey);
        return null;
      }

      return session;

    } catch {

      localStorage.removeItem(this.storageKey);

      return null;
    }
  }
}