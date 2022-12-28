import PaginationCustom from "components/globals/PaginationCustom/PaginationCustom";
import Table from "components/globals/Table/Table";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import Styles from "./AdminPaymentTable.styles";
import { PaginationInterface } from "./AdminPaymentTable.types";
import { AdminPaymentTableProps as Props } from "./AdminPaymentTable.types";

const PaginationCustomHandler = (props: PaginationInterface) => {
  return <PaginationCustom {...props} />;
};

const AdminPaymentTable: React.FC<Props> = props => {
  const { data, columns, onRowClicked, progressPending } = props;
  const { totalRows, setPage, page } = props;
  const t = useI18n().global.table.TablePaymentUser.Pagination;

  return (
    <Styles className={`AdminPaymentTable`}>
      <Table
        columns={columns}
        data={data}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        onRowClicked={onRowClicked}
        paginationComponent={pageParams =>
          PaginationCustomHandler({
            ...pageParams,
            totalRows,
            setPage,
            page,
            t
          })
        }
        progressPending={progressPending}
      />
    </Styles>
  );
};

AdminPaymentTable.defaultProps = {};

export default AdminPaymentTable;
