import dayjs from "dayjs";
import getI18n from "i18n/i18n.helpers";
import { TableColumn } from "react-data-table-component";
import { User } from "types/user.types";
import { getSubString } from "utils/common.utils";

import { Row, RowButton } from "../ClientTable/PaymentTable.helpers";

const t = getI18n().global.table.TablePaymentUser.TableHeader2;

export const columns: TableColumn<User>[] = [
  {
    name: t.name,
    selector: row => row.first_name ?? "",
    sortable: true,
    ignoreRowClick: true,
    width: "10rem",
    cell: row => (
      <Row
        content={getSubString(`${row?.first_name} ${row?.last_name}`, 8)}
        bold={true}
      />
    )
  },
  {
    name: t.dni,
    selector: row => row.capital_debt ?? "",
    wrap: true,
    sortable: true,
    compact: true,
    ignoreRowClick: true,
    cell: row => <Row content={row?.dni ?? "-"} />
  },
  {
    name: t.email,
    selector: row => row.interests ?? 0,
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    width: "24rem",
    cell: row => <Row content={row?.email ?? "-"} />
  },
  {
    name: t.phone,
    selector: row => row.bills ?? "",
    ignoreRowClick: true,
    compact: true,
    cell: row => <Row content={row?.phone ?? "-"} />
  },
  {
    name: t.punishmentDate,
    button: true,
    ignoreRowClick: true,
    cell: row => (
      <Row
        content={dayjs(row?.date_punishment).format("YY-MM-DD HH:mm a") ?? ""}
      />
    )
  },
  {
    name: t.action,
    center: true,
    cell: () => <RowButton />
  }
];
