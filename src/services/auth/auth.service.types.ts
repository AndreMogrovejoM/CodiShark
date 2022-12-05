// Auth service interfaces and types

import { User } from "types/user.types";

export type SignInMethod = "SMS" | "EMAIL";

export interface VerifyMethod {
  type: SignInMethod;
  dni?: string;
}

export interface Login {
  password?: string;
  dni?: string;
}

export interface SignInAdministratorResponse {
  status: number;
  message: string;
  data: User;
}

export interface RegisterUserConfig {
  dni: string;
  cod_verifier: number;
  emision_date: string;
}
