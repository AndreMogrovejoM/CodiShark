import PaginationCustom from "components/globals/PaginationCustom/PaginationCustom";
import Table from "components/globals/Table/Table";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import Styles from "./AdminClientTable.styles";
import { AdminClientTableProps as Props } from "./AdminClientTable.types";
import { PaginationCustomProps } from "./AdminClientTable.types";

const PaginationCustomHandler = (props: PaginationCustomProps) => {
  return <PaginationCustom {...props} />;
};

const AdminClientTable: React.FC<Props> = props => {
  const { data, columns, onRowClicked, progressPending } = props;
  const { totalRows, setPage, page } = props;
  const t = useI18n().global.table.TableClientAdmin.Pagination;

  return (
    <Styles className={`AdminClientTable`}>
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

AdminClientTable.defaultProps = {};

export default AdminClientTable;
