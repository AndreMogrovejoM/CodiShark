// Interfaces and types from component InformationClient

import { UserDebt } from "services/users/users.service.types";

// Component Props
export interface InformationClientProps {
  userDebt?: UserDebt;
  hiddenMobile?: boolean;
}

// Styled Component Props
export interface InformationClientStyledProps {
  className: string;
  hiddenMobile?: boolean;
}
