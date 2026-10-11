import { AuthUser } from './auth-response.model';

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
  expiresAt: Date;
}