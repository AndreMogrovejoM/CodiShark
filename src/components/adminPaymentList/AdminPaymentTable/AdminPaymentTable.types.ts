import { Dispatch, SetStateAction } from "react";
import { TableColumn } from "react-data-table-component";
import { PaginationComponentProps } from "react-data-table-component";
import { Operation } from "services/administrator/administrator.service.types";
import { LegendType } from "types/legend.types";
import { PaymentStatus } from "types/payment.types";

export interface RowProps {
  content: string;
  bold: boolean;
}

export interface RowChipProps {
  content: PaymentStatus;
}

export interface PaginationInterface extends PaginationComponentProps {
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  t: LegendType;
}

// Component Props
export interface AdminPaymentTableProps {
  data: Operation[];
  onRowClicked: (row: Operation) => void;
  columns: TableColumn<Operation>[];
  progressPending?: boolean;
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

// Styled Component Props
export interface AdminPaymentTableStyledProps {}
