export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
  id: string;

  firstName: string;
  lastName: string;

  email: string;

  avatarUrl?: string;
  language: string;

  status: UserStatus;

  lastLoginAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}