// Auth service interfaces and types

export type SignInMethod = "SMS" | "EMAIL";

export interface VerifyMethod {
  type: SignInMethod;
  dni?: string;
}

export interface Login {
  password?: string;
  dni?: string;
}

export interface Auth {}

export interface RegisterUserConfig {
  dni: string;
  cod_verifier: number;
  emision_date: string;
}
