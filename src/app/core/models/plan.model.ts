export type BillingCycle =
  | 'monthly'
  | 'yearly';

export type PlanStatus =
  | 'active'
  | 'inactive';

export interface Plan {
  id: string;

  code: string;
  name: string;
  description?: string;

  price: number;
  currency: string;

  billingCycle: BillingCycle;

  maxUsers: number;
  maxWorkspaces: number;

  includedAppCodes: string[];

  status: PlanStatus;

  createdAt: Date;
  updatedAt: Date;
}