// IziPay service interfaces and types

export type CurrencyCode = "PEN" | "USD";

export type Status = "SUCCESS" | "FAIL" | "ERROR";

export interface ValidateIziPayPaymentPayload {
  debtId: number;
  operationNumber: string;
  amount: number;
  rawClientAnswer: string;
  hash: string;
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
