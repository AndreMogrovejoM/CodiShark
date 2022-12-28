import Table from "components/globals/Table/Table";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import PaginationCustom from "../../globals/PaginationCustom/PaginationCustom";
import Styles from "./UserPaymentTable.styles";
import { PaginationCustomProps } from "./UserPaymentTable.types";
import { UserPaymentTableProps as Props } from "./UserPaymentTable.types";

const PaginationCustomHandler = (props: PaginationCustomProps) => {
  return <PaginationCustom {...props} />;
};

const UserPaymentTable: React.FC<Props> = props => {
  const { data, columns, expandableRows, expandableRowsComponent } = props;
  const { expandOnRowClicked, progressPending } = props;
  const { totalRows, setPage, page } = props;
  const t = useI18n().global.table.TablePaymentUser.Pagination;

  return (
    <Styles className={`UserPaymentTable`}>
      <Table
        columns={columns}
        data={data}
        expandableRows={expandableRows}
        expandableRowsComponent={expandableRowsComponent}
        expandOnRowClicked={expandOnRowClicked}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        paginationComponent={pageParams =>
          PaginationCustomHandler({
            ...pageParams,
            totalRows,
            setPage,
            page,
            t
          })
        }
        expandableIcon={{ collapsed: null, expanded: null }}
        progressPending={progressPending}
      />
    </Styles>
  );
};

UserPaymentTable.defaultProps = {};

export default UserPaymentTable;
