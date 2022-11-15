import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Table from "components/globals/Table/Table";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { TableColumn } from "react-data-table-component";
import { Operation } from "services/administrator/administrator.service.types";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import PaginationCustom from "../PaginationCustom/PaginationCustom";
import Styles from "./PaymentTable.styles";
import { RowChipProps } from "./PaymentTable.types";
import { PaginationInterface } from "./PaymentTable.types";
import { PaymentTableProps as Props } from "./PaymentTable.types";

const PaginationCustomHandler = (props: PaginationInterface) => {
  return <PaginationCustom {...props} />;
};

const PaymentTable: React.FC<Props> = props => {
  const { data } = props;

  const t = useI18n().global.table.TablePaymentUser.TableHeader;

  const columns: TableColumn<Operation>[] = [
    {
      name: t.name,
      selector: row => row.user.first_name ?? "",
      sortable: true,

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
      cell: row => <Row content={row.operation_date ?? ""} />
    },
    {
      name: t.amount,
      selector: row => row.amount_paid ?? 0,
      wrap: true,
      sortable: true,
      cell: row => <Row content={row.amount_paid ?? 0} />
    },
    {
      name: t.method,
      selector: row => row.payment_method ?? "",
      cell: row => <Row content={row.payment_method ?? ""} />
    },
    {
      name: t.state,
      button: true,
      cell: row => (
        <RowChip conditional={row.payment_status === "Pagado" ? true : false} />
      )
    },
    {
      name: t.action,
      button: true,
      cell: row => <RowButton row={row.id} />
    }
  ];

  const Row = (props: any) => {
    const { content, bold = false } = props;

    const styleClass = (value: boolean) =>
      `PaymentTable__container--field ${
        value ? "PaymentTable__container--field-bold" : ""
      }`;

    return <Styles className={styleClass(bold)}>{content}</Styles>;
  };

  const RowChip = (props: RowChipProps) => {
    const { conditional } = props;

    const t = useI18n().global.table.TablePaymentUser.TableRows;

    const styleClass = (value: boolean) =>
      `PaymentTable__container--chip ${
        value
          ? "PaymentTable__container--chip-green"
          : "PaymentTable__container--chip-yellow"
      }`;

    return (
      <Styles className={styleClass(conditional)}>
        <p className="PaymentTable__text--chip">
          {conditional ? t.pay : t.pending}
        </p>
      </Styles>
    );
  };

  const RowButton = (row: any) => {
    return (
      <Styles
        className="PaymentTable__container--button"
        onClick={() => console.log(row)}
      >
        <ChevronRightIcon className="PaymentTable__container--button-icon" />
      </Styles>
    );
  };

  return (
    <Styles className={`PaymentTable`}>
      <Table
        columns={columns}
        data={data}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        //@ts-ignore
        paginationComponent={PaginationCustomHandler}
      />
    </Styles>
  );
};

PaymentTable.defaultProps = {};

export default PaymentTable;