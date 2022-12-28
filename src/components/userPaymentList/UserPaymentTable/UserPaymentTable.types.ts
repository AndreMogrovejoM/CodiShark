// Interfaces and types from component  UserPaymentTable

import { Dispatch, SetStateAction } from "react";
import { TableColumn } from "react-data-table-component";
import { PaginationComponentProps } from "react-data-table-component/dist/src/DataTable/types";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";
import { OperationUserDebt } from "services/users/users.service.types";
import { LegendType } from "types/legend.types";
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

export interface PaginationCustomProps extends PaginationComponentProps {
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  t: LegendType;
}

// Component Props
export interface UserPaymentTableProps {
  data: OperationUserDebt[];
  columns: TableColumn<OperationUserDebt>[];
  expandableRows: boolean;
  expandableRowsComponent?: ExpandableRowsComponent<OperationUserDebt>;
  expandOnRowClicked: boolean;
  progressPending: boolean;
  totalRows: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

// Styled Component Props
export interface UserPaymentTableStyledProps {}
