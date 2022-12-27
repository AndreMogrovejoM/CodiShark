// Interfaces and types from component PaginationCustom

import { Dispatch, SetStateAction } from "react";
import { PaginationComponentProps } from "react-data-table-component";

// Component Props
export interface PaginationCustomProps extends PaginationComponentProps {
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
}

// Styled Component Props
export interface PaginationCustomStyledProps {
  className: string;
}
