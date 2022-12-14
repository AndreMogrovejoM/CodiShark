// Interfaces and types from component OperationDetails

import { Operation } from "services/administrator/administrator.service.types";

// Component Props
export interface OperationDetailsProps {
  data: Operation | undefined;
}

// Styled Component Props
export interface OperationDetailsStyledProps {
  className: string;
}
