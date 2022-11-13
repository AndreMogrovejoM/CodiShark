import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Table from "components/globals/Table/Table";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { TableColumn } from "react-data-table-component";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import PaginationCustom from "../PaginationCustom/PaginationCustom";
import Styles from "./PaymentTable.styles";
import { RowChipProps } from "./PaymentTable.types";
import { PaginationInterface } from "./PaymentTable.types";
import { DataRow, PaymentTableProps as Props } from "./PaymentTable.types";

const PaginationCustomHandler = (props: PaginationInterface) => {
  return <PaginationCustom {...props} />;
};

const PaymentTable: React.FC<Props> = props => {
  const { data } = props;

  const t = useI18n().global.table.TablePaymentUser.TableHeader;

  const columns: TableColumn<DataRow>[] = [
    {
      name: t.name,
      selector: row => row.name,
      sortable: true,
      maxWidth: "600px", // when using custom you should use width or maxWidth, otherwise, the table will default to flex grow behavior
      cell: row => <Row content={row.name} bold={true} />
    },
    {
      name: t.date,
      selector: row => row.date,
      wrap: true,
      sortable: true,
      cell: row => <Row content={row.date} />
    },
    {
      name: t.amount,
      selector: row => row.amount,
      wrap: true,
      sortable: true,
      cell: row => <Row content={row.amount} />
    },
    {
      name: t.method,
      selector: row => row.paymentMethod,
      cell: row => <Row content={row.paymentMethod} />
    },
    {
      name: t.state,
      button: true,
      cell: row => <RowChip conditional={row.state} />
    },
    {
      name: t.action,
      button: true,
      cell: row => <RowButton row={row} />
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

  // TODO: Tipear de acuerdo a un elemento de nuestro arreglo por recibir de backend;
  const RowButton = (props: any) => {
    const { row } = props;

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
