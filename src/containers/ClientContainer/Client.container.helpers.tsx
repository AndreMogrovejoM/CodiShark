import { RowMiddle } from "components/clientHome/DebtTable/DebtTable.helpers";
import { DividerRow } from "components/clientHome/DebtTable/DebtTable.helpers";
import { ButtonExpander } from "components/clientHome/DebtTable/DebtTable.helpers";
import { Row } from "components/clientHome/DebtTable/DebtTable.helpers";
import CONSTANTS from "config/constants";
import dayjs from "dayjs";
import { TableColumn } from "react-data-table-component";
import { UserDebt } from "services/users/users.service.types";

const { BREAKPOINTS } = CONSTANTS;

export const columns: TableColumn<UserDebt>[] = [
  {
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    minWidth: "16rem",
    maxWidth: "16rem",
    cell: row => <Row content={row?.capital_debt} />
  },
  {
    center: true,
    maxWidth: "0.01rem",
    minWidth: "0.01rem",
    hide: BREAKPOINTS.desktop,
    cell: () => <DividerRow />
  },
  {
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    minWidth: "16rem",
    maxWidth: "24rem",
    cell: row => (
      <RowMiddle
        price={row?.amount_cancellation}
        discount={row?.pct_dscto_cancellation}
      />
    )
  },
  {
    center: true,
    minWidth: "0.01rem",
    maxWidth: "0.01rem",
    hide: BREAKPOINTS.desktop,
    cell: () => <DividerRow />
  },
  {
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    minWidth: "16rem",
    maxWidth: "16rem",
    cell: row => (
      <Row
        content={dayjs(row?.date_last_contact).format("DD / MM / YYYY")}
        isDate={true}
      />
    )
  },
  {
    right: true,
    ignoreRowClick: true,
    cell: row => <ButtonExpander expand={row?.defaultExpanded ?? false} />
  }
];
