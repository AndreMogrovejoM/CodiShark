import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Table from "components/globals/Table/Table";
import useI18n from "i18n/i18n.hooks";
import React, { useCallback } from "react";
import { TableColumn } from "react-data-table-component";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import { getArrayViews, getNumberOfPages } from "./PaymentTable.helpers";
import Styles from "./PaymentTable.styles";
import { NumbersComponentProps, RowChipProps } from "./PaymentTable.types";
import { PaginationInterface } from "./PaymentTable.types";
import { DataRow, PaymentTableProps as Props } from "./PaymentTable.types";

const PaginationCustom = (props: PaginationInterface) => {
  const {
    rowsPerPage,
    rowCount,
    currentPage,
    onChangePage,
    // TODO:  onChangeRowsPerPage es requerido segun la documentacion de DataTable para un component personalizado de pagination
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChangeRowsPerPage
  } = props;

  const t = useI18n().global.table.TablePaymentUser.Pagination;

  const numPages = getNumberOfPages(rowCount, rowsPerPage);
  const totalRowCount = getArrayViews(numPages);
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1;
  const disabledLesser = currentPage === 1;
  const disabledGreater = currentPage === numPages;

  const handlePrevious = useCallback(
    () => onChangePage(currentPage - 1),
    [currentPage, onChangePage]
  );

  const handleNext = useCallback(
    () => onChangePage(currentPage + 1),
    [currentPage, onChangePage]
  );

  const handleChangePage = useCallback(
    (page: number) => onChangePage(page),
    [onChangePage]
  );

  const NumbersComponent = (props: NumbersComponentProps) => (
    <div {...props}>{props?.value}</div>
  );

  const renderLegend =
    currentPage === numPages
      ? t.legend(firstIndex, rowCount, rowCount)
      : t.legend(firstIndex, rowCount, rowCount);

  const buttonClass = (value: boolean) =>
    `Pagination__text--bold ${value ? "Pagination__text--disabled" : ""}`;

  const numberClass = (value: number) =>
    `Pagination__container--numbers ${
      value === currentPage ? "Pagination__container--numbers-activated" : ""
    }`;

  return (
    <Styles className="Pagination">
      <div className="Pagination__container">
        <p className="Pagination__text">{renderLegend}</p>

        <div className="Pagination__container--pagination">
          <button
            className={buttonClass(disabledLesser)}
            aria-disabled={disabledLesser}
            onClick={handlePrevious}
            disabled={disabledLesser}
          >
            {t.back}
          </button>
          {totalRowCount.map((page, index) => (
            <NumbersComponent
              key={index}
              value={page}
              className={numberClass(page)}
              onClick={() => handleChangePage(page)}
            />
          ))}
          <button
            className={buttonClass(disabledGreater)}
            aria-disabled={disabledGreater}
            onClick={handleNext}
            disabled={disabledGreater}
          >
            {t.next}
          </button>
        </div>
      </div>
    </Styles>
  );
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
        // TODO: Revisar
        //@ts-ignore
        paginationComponent={PaginationCustom}
      />
    </Styles>
  );
};

PaymentTable.defaultProps = {};

export default PaymentTable;
