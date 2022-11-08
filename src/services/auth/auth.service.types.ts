// Auth service interfaces and types

export type VerifyMethod = "SMS" | "EMAIL";

export interface Auth {}

export interface RegisterAdminConfig {
  email: string;
  password: string;
}

export interface RegisterUserConfig {
  dni: number;
  code: number;
  emissionDate: string;
}
