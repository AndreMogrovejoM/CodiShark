import { TableColumn } from "react-data-table-component";
import { Operation } from "services/administrator/administrator.service.types";
import { PaymentStatus } from "types/payment.types";

export interface NumbersComponentProps {
  key: number;
  value: number;
  className: string;
  onClick: () => void;
}

export interface RowProps {
  content: string;
  bold: boolean;
}

export interface RowChipProps {
  content: PaymentStatus;
}

export interface PaginationInterface {
  rowsPerPage: number;
  rowCount: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (numRows: number, currentPage: number) => void;
}

// Component Props
export interface PaymentTableProps {
  data: Operation[];
  onRowClicked: (row: Operation) => void;
  columns: TableColumn<Operation>[];
  progressPending?: boolean;
}

// Styled Component Props
export interface PaymentTableStyledProps {}
