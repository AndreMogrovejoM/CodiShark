import React from "react";

import DataTableCustom from "./Table.styles";
import { TableProps as Props } from "./Table.types";

const Table: React.FC<Props> = props => {
  const { columns, data, paginationComponent } = props;
  const { paginationPerPage, paginationRowsPerPageOptions } = props;

  return (
    <DataTableCustom
      columns={columns}
      data={data}
      pagination
      responsive
      paginationPerPage={paginationPerPage}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      paginationComponent={paginationComponent}
    />
  );
};

Table.defaultProps = {};

export default Table;
