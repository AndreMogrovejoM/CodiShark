// Interfaces and types from component PaymentDetails

import { Operation } from "services/administrator/administrator.service.types";

// Component Props
export interface PaymentDetailsProps {
  data?: Operation;
}

// Styled Component Props
export interface PaymentDetailsStyledProps {
  className: string;
}
