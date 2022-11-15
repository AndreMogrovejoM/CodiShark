import dayjs from "dayjs";
import getI18n from "i18n/i18n.helpers";
import { TableColumn } from "react-data-table-component";
import { User } from "types/user.types";

import { Row, RowButton } from "../PaymentTable/PaymentTable.helpers";

const t = getI18n().global.table.TablePaymentUser.TableHeader2;

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
    name: t.capitalDebt,
    selector: row => row.capital_debt ?? "",
    wrap: true,
    sortable: true,
    cell: row => <Row content={row.capital_debt ?? ""} />
  },
  {
    name: t.interests,
    selector: row => row.interests ?? 0,
    wrap: true,
    sortable: true,
    cell: row => <Row content={row.interests ?? 0} />
  },
  {
    name: t.bills,
    selector: row => row.bills ?? "",
    cell: row => <Row content={row.bills ?? ""} />
  },
  {
    name: t.punishmentDate,
    button: true,
    cell: row => (
      <Row
        content={dayjs(row.date_punishment).format("YY-MM-DD HH:mm a") ?? ""}
      />
    )
  },
  {
    name: t.action,
    button: true,
    cell: row => <RowButton row={row.id} />
  }
];
