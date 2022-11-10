import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Table from "components/globals/Table/Table";
import React from "react";
import { TableColumn } from "react-data-table-component";

import Styles from "./PaymentTable.styles";
import { DataRow, PaymentTableProps as Props } from "./PaymentTable.types";

const PaymentTable: React.FC<Props> = props => {
  const { data } = props;

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Nombre",
      selector: row => row.name,
      sortable: true,
      maxWidth: "600px", // when using custom you should use width or maxWidth, otherwise, the table will default to flex grow behavior
      cell: row => <Row content={row.name} bold={true} />
    },
    {
      name: "Fecha de pago",
      selector: row => row.date,
      wrap: true,
      sortable: true,
      cell: row => <Row content={row.date} />
    },
    {
      name: "Monto pagado",
      selector: row => row.amount,
      wrap: true,
      sortable: true,
      cell: row => <Row content={row.amount} />
    },
    {
      name: "Método de pago",
      selector: row => row.paymentMethod,
      cell: row => <Row content={row.paymentMethod} />
    },
    {
      name: "Estado",
      button: true,
      cell: row => <RowChip conditional={row.state} />
    },
    {
      name: "",
      button: true,
      cell: row => <RowButton row={row} />
    }
  ];

  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos"
  };

  const Row = (props: any) => {
    const { content, bold = false } = props;

    return (
      <Styles
        className={`PaymentTable__container--field ${
          bold ? "PaymentTable__container--field-bold" : ""
        }`}
      >
        {content}
      </Styles>
    );
  };

  const RowChip = (props: any) => {
    const { conditional } = props;
    return (
      <Styles
        className={`PaymentTable__container--chip ${
          conditional
            ? "PaymentTable__container--chip-green"
            : "PaymentTable__container--chip-yellow"
        }`}
      >
        <p className="PaymentTable__text--chip">
          {conditional ? "Pagado" : "Pendiente"}
        </p>
      </Styles>
    );
  };

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
      {/* @ts-ignore */}
      <Table
        columns={columns}
        data={data}
        paginationComponentOptions={paginationComponentOptions}
      />
    </Styles>
  );
};

PaymentTable.defaultProps = {};

export default PaymentTable;
