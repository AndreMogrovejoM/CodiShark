// Interfaces and types from component PaymentDetails

import { Operation } from "services/administrator/administrator.service.types";

// Component Props
export interface PaymentDetailsProps {
  data: Operation | undefined;
}

// Styled Component Props
export interface PaymentDetailsStyledProps {
  className: string;
}
