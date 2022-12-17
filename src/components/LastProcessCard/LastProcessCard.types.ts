// Interfaces and types from component LastProcessCard
import { PaymentStatus } from "types/payment.types";

// Component Props
export interface LastProcessCardProps {
  title: string;
  status: PaymentStatus;
}

// Styled Component Props
export interface LastProcessCardStyledProps {
  className: string;
}
