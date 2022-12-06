import { TableColumn } from "react-data-table-component";
import { ExpandableRowsComponent } from "react-data-table-component/dist/src/DataTable/types";
import { PaginationComponent } from "react-data-table-component/dist/src/DataTable/types";
// Interfaces and types from component Table

type ExpandibleIcon = {
  collapsed: null;
  expanded: null;
};

// Component Props
export interface TableProps {
  columns: TableColumn<any>[];
  data: any[];
  paginationPerPage: number;
  paginationRowsPerPageOptions: number[];
  paginationComponent?: PaginationComponent;
  expandableRows?: boolean;
  expandableRowsComponent?: ExpandableRowsComponent<any>;
  expandOnRowClicked?: boolean;
  // TODO: Pending
  onRowClicked?: (row: any) => void;
  expandableIcon?: ExpandibleIcon;
  progressPending?: boolean;
  progressComponent?: React.ReactNode;
}

// Styled Component Props
export interface TableStyledProps {}
