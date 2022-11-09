// Auth service interfaces and types

export type VerifyMethod = {
  type: "SMS" | "EMAIL";
  dni?: string;
};

export type Login = {
  password?: string;
  dni?: string;
};

export interface Auth {}

export interface RegisterUserConfig {
  dni: string;
  cod_verifier: number;
  emision_date: string;
}
