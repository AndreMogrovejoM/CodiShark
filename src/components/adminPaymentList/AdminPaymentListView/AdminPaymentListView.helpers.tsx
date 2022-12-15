import { RowButton } from "components/adminClientList/ClientTable/PaymentTable.helpers";
import { RowChip } from "components/adminClientList/ClientTable/PaymentTable.helpers";
import { Row } from "components/adminClientList/ClientTable/PaymentTable.helpers";
import getI18n from "i18n/i18n.helpers";
import { TableColumn } from "react-data-table-component";
import { Operation } from "services/administrator/administrator.service.types";

const t = getI18n().global.table.TablePaymentUser.TableHeader;

export const columns: TableColumn<Operation>[] = [
  {
    name: t.name,
    selector: row => row.user.first_name ?? "",
    sortable: true,
    ignoreRowClick: true,
    cell: row => (
      <Row
        content={`${row.user.first_name} ${row.user.last_name}`}
        bold={true}
      />
    )
  },
  {
    name: t.date,
    selector: row => row.operation_date ?? "",
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    cell: row => <Row content={row.operation_date ?? ""} />
  },
  {
    name: t.amount,
    selector: row => row.amount_paid ?? 0,
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    cell: row => <Row content={row.amount_paid ?? 0} />
  },
  {
    name: t.method,
    selector: row => row.payment_method ?? "",
    ignoreRowClick: true,
    cell: row => <Row content={row.payment_method ?? ""} />
  },
  {
    name: t.state,
    button: true,
    ignoreRowClick: true,
    cell: row => (
      <RowChip conditional={row.payment_status === "Pagado" ? true : false} />
    )
  },
  {
    name: t.action,
    center: true,
    cell: row => <RowButton row={row.id} />
  }
];
