// Users service interfaces and types

import { CreatePaymentResponse } from "services/iziPay/iziPay.service.types";

export type PaymentStatus = "Pagado" | "Pendiente" | "Cancelado";

export interface UserDebt {
  id: number;
  user_id: number;
  cu: string;
  cj: string;
  banking_entity?: string;
  product: string;
  situation: string;
  currency: string;
  capital_debt: number;
  interests: number;
  bills: number;
  total_debt: number;
  exchange_type: number;
  amount_cancellation: number;
  amount_dscto_cancellation: number;
  pct_dscto_cancellation: number;
  date_last_contact: string;
  limit_date: string;
  debt_status: PaymentStatus;
  defaultExpanded?: boolean;
}

export interface UserDebtResponse {
  status: number;
  data: UserDebt[];
  total_debts: number;
}

export interface OperationUserDebt {
  id: number;
  user_id: number;
  debt_id: number;
  operation_number?: string;
  operation_date: string;
  operation_time: string;
  amount_paid: number;
  payment_method: string;
  payment_status: PaymentStatus;
  created_at?: string;
  updated_at?: string;
  debt: UserDebt;
}

export interface OperationUserUniqueDebtResponse {
  data: OperationUserDebt;
  skip: number;
  status: number;
  take: number;
  total: number;
  izipay?: CreatePaymentResponse;
}

export interface OperationUserDebtResponse {
  data: OperationUserDebt[];
  skip: number;
  status: number;
  take: number;
  total: number;
  izipay?: CreatePaymentResponse;
}

export interface OperationNumberPayload {
  debtId: number;
  amount: number;
  type?: number;
}
// type: 1 transfer / 2 iziPay
