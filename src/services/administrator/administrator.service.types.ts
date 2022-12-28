// Administrator service interfaces and types
import { PaymentStatus } from "types/payment.types";
import { User } from "types/user.types";

export interface Administrator {}

export interface FirstPanelAdministrator {
  status: number;
  connections: number;
  payments: number;
  calls: number;
  monthIni: string;
  monthEnd: string;
}

export interface SecondPanelAdministrator extends FirstPanelAdministrator {
  charges: number;
}

export interface SecondPanelPayload {
  dateIni: string;
  dateEnd: string;
}

export interface UsersListResponse {
  status: number;
  totalUsers: number;
  skip: number;
  take: number;
  data: User[];
}

export interface Operation {
  id: number;
  user_id: number;
  operation_date: string;
  operation_time: string;
  amount_paid: number;
  payment_method: string;
  payment_status: PaymentStatus;
  created_at: string;
  updated_at: string;
  user: User;
}

export interface OperationListResponse {
  status: number;
  totalOperations: number;
  skip: number;
  take: number;
  data: Operation[];
}

export interface GraphicsResponse {
  status: number;
  months: Record<string, number>[];
}

export interface SecondFaResponse {
  secretCode: string;
  google2FaUrl: string;
}
