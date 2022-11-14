// Interfaces and types from component LastProcessCard

import { Status } from "services/administrator/administrator.service.types";

// Component Props
export interface LastProcessCardProps {
  title: string;
  status: Status;
}

// Styled Component Props
export interface LastProcessCardStyledProps {
  className: string;
}
