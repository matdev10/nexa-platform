export type NexaAppStatus =
  | 'active'
  | 'inactive'
  | 'deprecated';

export type NexaAppCategory =
  | 'core'
  | 'business'
  | 'analytics'
  | 'productivity'
  | 'ai'
  | 'integration';

export interface NexaApp {
  id: string;

  code: string;
  name: string;
  description?: string;

  category: NexaAppCategory;

  icon?: string;

  isCore: boolean;
  status: NexaAppStatus;

  createdAt: Date;
  updatedAt: Date;
}