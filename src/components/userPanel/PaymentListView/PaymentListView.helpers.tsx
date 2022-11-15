import getI18n from "i18n/i18n.helpers";
import { TableColumn } from "react-data-table-component";
import { User } from "types/user.types";

import { Row, RowButton, RowChip } from "../PaymentTable/PaymentTable.helpers";

const t = getI18n().global.table.TablePaymentUser.TableHeader;

export const columns: TableColumn<User>[] = [
  {
    name: t.name,
    selector: row => row.first_name ?? "",
    sortable: true,

    cell: row => (
      <Row content={`${row.first_name} ${row.last_name}`} bold={true} />
    )
  },
  {
    name: t.date,
    selector: row => row.first_name ?? "",
    wrap: true,
    sortable: true,
    cell: row => <Row content={row.first_name ?? ""} />
  },
  {
    name: t.amount,
    selector: row => row.first_name ?? 0,
    wrap: true,
    sortable: true,
    cell: row => <Row content={row.first_name ?? 0} />
  },
  {
    name: t.method,
    selector: row => row.first_name ?? "",
    cell: row => <Row content={row.first_name ?? ""} />
  },
  {
    name: t.state,
    button: true,
    cell: row => (
      <RowChip conditional={row.first_name === "Pagado" ? true : false} />
    )
  },
  {
    name: t.action,
    button: true,
    cell: row => <RowButton row={row.id} />
  }
];
