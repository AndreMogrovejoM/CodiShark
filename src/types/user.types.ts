export type Rol = 1 | 10;

export interface User {
  dni: string;
  cod_verifier?: number;
  emision_date?: string;
  first_name?: string;
  second_name?: string;
  last_name?: string;
  mother_last_name?: string;
  phone?: string;
  email?: string;
  id?: number;
  capital_debt?: number;
  interests?: 2390;
  bills?: number;
  date_last_contact?: string;
  total_debt?: number;
  discount?: number;
  period?: 202209;
  product?: string;
  date_punishment?: string;
  currency?: string;
  user_origin?: null;
  email_verified_at?: null;
  phone_verified_at?: null;
  rol?: Rol;
  status?: number;
  created_at?: string;
  updated_at?: string;
}

export interface TemporalAdminUser extends User {
  token?: string;
}

export interface LoginResponse {
  user: User;
  expires_in: number;
  token_type: string;
  access_token: string;
}