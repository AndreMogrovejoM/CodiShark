// Interfaces and types from component PaymentTable

import { TableColumn } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";
import { OperationUserDebt } from "services/users/users.service.types";
import { PaymentStatus } from "types/payment.types";

export interface NumbersComponentProps {
  key: number;
  value: number;
  className: string;
  onClick: () => void;
}

export interface RowChipProps {
  content: PaymentStatus;
}

export interface RowProps {
  content: string;
  bold?: boolean;
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
  data: OperationUserDebt[];
  columns: TableColumn<OperationUserDebt>[];
  expandableRows: boolean;
  expandableRowsComponent?: ExpandableRowsComponent<OperationUserDebt>;
  expandOnRowClicked: boolean;
  progressPending: boolean;
}

// Styled Component Props
export interface PaymentTableStyledProps {}
