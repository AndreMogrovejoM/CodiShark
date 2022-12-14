import getI18n from "i18n/i18n.helpers";
import { TableColumn } from "react-data-table-component";
import { OperationUserDebt } from "services/users/users.service.types";
import { disabledButton } from "utils/validations.utils";

import ButtonRowsComponent from "../ButtonRowsComponent/ButtonRowsComponent";
import { Row, RowChip } from "../UserPaymentTable/UserPaymentTable.helpers";

const t = getI18n().global.table.TablePaymentUser.TableHeader;

export const columns: TableColumn<OperationUserDebt>[] = [
  {
    name: t.concept,
    selector: row => row?.debt?.product ?? "",
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    cell: row => <Row content={`${row?.debt?.product ?? "-"}`} bold={true} />
  },
  {
    name: t.originalAmount,
    selector: row => row?.debt?.capital_debt ?? "",
    wrap: true,
    sortable: true,
    ignoreRowClick: true,
    cell: row => <Row content={`S/ ${row?.debt?.capital_debt ?? ""}`} />
  },
  {
    name: t.amountPaid,
    selector: row => row?.amount_paid ?? 0,
    wrap: true,
    sortable: true,
    center: true,
    ignoreRowClick: true,
    cell: row => <Row content={`S/ ${row?.amount_paid ?? 0}`} bold={true} />
  },
  {
    name: t.paymentDate,
    selector: row => row?.operation_date ?? "",
    wrap: true,
    sortable: true,
    center: true,
    ignoreRowClick: true,
    cell: row => <Row content={`${row?.operation_date}` ?? ""} />
  },
  {
    name: t.state,
    button: true,
    ignoreRowClick: true,
    cell: row => <RowChip content={row?.payment_status} />
  },
  {
    name: t.actions,
    center: true,
    button: true,
    minWidth: "150px",
    cell: row => (
      <ButtonRowsComponent
        disabled={disabledButton(row?.payment_status)}
        data={row}
      />
    )
  },
  {
    name: "",
    center: true,
    button: true,
    minWidth: "150px",
    cell: () => <ButtonRowsComponent data-tag="allowRowEvents" icon={true} />
  }
];
