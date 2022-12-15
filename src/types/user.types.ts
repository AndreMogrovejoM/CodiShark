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
  interests?: number;
  bills?: number;
  date_last_contact?: string;
  total_debt?: number;
  discount?: number;
  period?: number;
  product?: string;
  date_punishment?: string;
  currency?: string;
  user_origin?: string;
  email_verified_at?: string;
  phone_verified_at?: string;
  rol?: Rol;
  status?: number;
  created_at?: string;
  updated_at?: string;
  google2fa_enable?: boolean;
  document_type?: string;
  birth_date?: string;
  gender?: string;
  district?: string;
  address?: string;
  phone_address_one?: string;
}

export interface TemporalAdminUser extends User {
  access_token?: string;
  token_type: string;
  expires_in: number;
  user: User;
}

export interface LoginResponse {
  user: User;
  expires_in: number;
  token_type: string;
  access_token: string;
}
