export type SubscriptionStatus =
  | 'trial'
  | 'active'
  | 'past_due'
  | 'cancelled'
  | 'expired';

export interface Subscription {
  id: string;

  organizationId: string;
  planId: string;

  status: SubscriptionStatus;

  startedAt: Date;

  trialEndsAt?: Date;
  currentPeriodStartsAt: Date;
  currentPeriodEndsAt: Date;

  cancelledAt?: Date;

  createdAt: Date;
  updatedAt: Date;
}