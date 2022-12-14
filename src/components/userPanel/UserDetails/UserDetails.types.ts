import { User } from "types/user.types";
// Interfaces and types from component UserDetails

// Component Props
export interface UserDetailsProps {
  data: User | undefined;
}

// Styled Component Props
export interface UserDetailsStyledProps {
  className: string;
}
