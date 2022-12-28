// Interfaces and types from component PaymentTable

import { Dispatch, SetStateAction } from "react";
import { PaginationComponentProps } from "react-data-table-component";
import { TableColumn } from "react-data-table-component";
import { LegendType } from "types/legend.types";
import { User } from "types/user.types";

export interface NumbersComponentProps {
  key: number;
  value: number;
  className: string;
  onClick: () => void;
}

export interface RowProps {
  content: string;
  bold?: boolean;
}

export interface PaginationCustomProps extends PaginationComponentProps {
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  t: LegendType;
}

// Component Props
export interface AdminClientTableProps {
  data: User[];
  columns: TableColumn<User>[];
  onRowClicked: (row: User) => void;
  progressPending: boolean;
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

// Styled Component Props
export interface AdminClientTableStyledProps {}
