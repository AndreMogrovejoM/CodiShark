import useI18n from "i18n/i18n.hooks";
import React, { useCallback } from "react";
import { getArrayViews, getNumberOfPages } from "utils/common.utils";

import { NumbersComponentProps } from "../DebtTable/DebtTable.types";
import Styles from "./PaginationCustom.styles";
import { PaginationCustomProps as Props } from "./PaginationCustom.types";

const PaginationCustom: React.FC<Props> = props => {
  const { rowsPerPage, rowCount } = props;
  const { currentPage, onChangePage } = props;

  const t = useI18n().global.table.TableDebtUser.Pagination;

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
    <div className="DebtTable__component--pagination">
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
    </div>
  );
};

PaginationCustom.defaultProps = {};

export default PaginationCustom;
