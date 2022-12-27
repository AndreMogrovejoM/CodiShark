import useI18n from "i18n/i18n.hooks";
import React, { useCallback } from "react";
import { getArrayViews, getNumberOfPages } from "utils/common.utils";

import { NumbersComponentProps } from "../PaymentTable/PaymentTable.types";
import Styles from "./PaginationCustom.styles";
import { PaginationCustomProps as Props } from "./PaginationCustom.types";

const PaginationCustom: React.FC<Props> = props => {
  const { rowsPerPage } = props;
  const { onChangePage } = props;
  const { totalRows, setPage, page: currentPage } = props;

  const t = useI18n().global.table.TablePaymentAdmin.Pagination;

  const numPages = getNumberOfPages(totalRows, rowsPerPage);
  const totalRowCount = getArrayViews(numPages);
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage + 1;
  const disabledLesser = currentPage === 0;
  const disabledGreater = (currentPage + 1) * 10 >= totalRows;

  const handlePrevious = useCallback(() => {
    setPage(currentPage);
    onChangePage(currentPage - 1, totalRows);
  }, [currentPage, onChangePage, setPage, totalRows]);

  const handleNext = useCallback(() => {
    setPage(currentPage);
    onChangePage(currentPage + 1, totalRows);
  }, [currentPage, onChangePage, setPage, totalRows]);

  const handleChangePage = useCallback(
    (page: number) => {
      setPage(page - 1);
      onChangePage(page, totalRows);
    },
    [onChangePage, setPage, totalRows]
  );

  const NumbersComponent = (props: NumbersComponentProps) => (
    <div {...props}>{props?.value}</div>
  );

  // TODO: Check legend
  const renderLegend =
    currentPage === numPages
      ? t.legend(firstIndex, (currentPage + 1) * 10, totalRows)
      : t.legend(firstIndex, (currentPage + 1) * 10, totalRows);

  const buttonClass = (value: boolean) =>
    `Pagination__text--bold ${value ? "Pagination__text--disabled" : ""}`;

  const numberClass = (value: number) =>
    `Pagination__container--numbers ${
      value === currentPage + 1
        ? "Pagination__container--numbers-activated"
        : ""
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

PaginationCustom.defaultProps = {};

export default PaginationCustom;
