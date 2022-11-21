import getI18n from "i18n/i18n.helpers";
import { TableColumn } from "react-data-table-component";

import { Row, RowButton } from "../PaymentTable/PaymentTable.helpers";

const t = getI18n().global.table.TablePaymentAdmin.TableHeader;

// TODO: Pending to response data from backend
export const columns: TableColumn<any>[] = [
  {
    name: t.concept,
    selector: row => row.concept ?? "",
    wrap: true,
    sortable: true,
    cell: row => <Row content={`${row.concept}`} bold={true} />
  },
  {
    name: t.originalAmount,
    selector: row => row.amount ?? "",
    wrap: true,
    sortable: true,
    cell: row => <Row content={`S/ ${row.amount ?? ""}`} />
  },
  {
    name: t.amountPaid,
    selector: row => row.amountPay ?? 0,
    wrap: true,
    sortable: true,
    center: true,
    cell: row => <Row content={`S/ ${row.amountPay ?? 0}`} bold={true} />
  },
  {
    name: t.paymentDate,
    selector: row => row.datePay ?? "",
    wrap: true,
    sortable: true,
    center: true,
    cell: row => <Row content={row.datePay ?? ""} />
  },
  {
    name: t.actions,
    selector: row => row.year ?? 0,
    wrap: true,
    sortable: true,
    center: true,
    cell: () => <RowButton />
  },
  {
    name: "",
    center: true,
    cell: () => <RowButton data-tag="allowRowEvents" icon={true} />
  }
];

export const data = [
  {
    id: 1,
    concept: "Prestamos Banco Interbank",
    amount: "8,200.00",
    amountPay: "1,750.00",
    datePay: "20/09/2022"
  },
  {
    id: 2,
    concept: "Prestamos Banco BCP",
    amount: "15,500.00",
    amountPay: "2,300.00",
    datePay: "32/09/2022"
  },
  {
    id: 3,
    concept: "Prestamos Banco Interbank",
    amount: "20,000.00",
    amountPay: "950.00",
    datePay: "12/10/2022"
  },
  {
    id: 4,
    concept: "Prestamos Banco Interbank",
    amount: "8,200.00",
    amountPay: "1,750.00",
    datePay: "20/09/2022"
  },
  {
    id: 5,
    concept: "Prestamos Banco BCP",
    amount: "15,500.00",
    amountPay: "2,300.00",
    datePay: "32/09/2022"
  },
  {
    id: 6,
    concept: "Prestamos Banco Interbank",
    amount: "20,000.00",
    amountPay: "950.00",
    datePay: "12/10/2022"
  },
  {
    id: 7,
    concept: "Prestamos Banco Interbank",
    amount: "8,200.00",
    amountPay: "1,750.00",
    datePay: "20/09/2022"
  },
  {
    id: 8,
    concept: "Prestamos Banco BCP",
    amount: "15,500.00",
    amountPay: "2,300.00",
    datePay: "32/09/2022"
  },
  {
    id: 9,
    concept: "Prestamos Banco Interbank",
    amount: "20,000.00",
    amountPay: "950.00",
    datePay: "12/10/2022"
  }
];
