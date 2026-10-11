export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
  expiresAt: string;
}