// IziPay service interfaces and types

import { User } from "types/user.types";

export type CurrencyCode = "PEN" | "USD";

export type Status = "SUCCESS" | "FAIL" | "ERROR";

export interface CreateIziPayPaymentPayload {
  amount: number;
  debtId: number;
  currency: CurrencyCode;
  user: User;
}

export interface ValidateIziPayPaymentPayload {
  debtId: number;
  operationNumber: string;
  amount: number;
}

export interface CreatePaymentResponse {
  webService: string;
  version: string;
  applicationVersion: string;
  status: Status;
  answer: {
    formToken: string;
    _type: string;
  };
  ticket: string;
  serverDate: string;
  applicationProvider: string;
  metadata?: any;
  mode: string;
  serverUrl: string;
  _type: string;
}
