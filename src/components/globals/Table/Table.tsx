import React from "react";

import DataTableCustom from "./Table.styles";
import { TableProps as Props } from "./Table.types";

const Table: React.FC<Props> = props => {
  const { columns, data, paginationComponentOptions } = props;
  const { paginationPerPage, paginationRowsPerPageOptions } = props;

  return (
    <DataTableCustom
      columns={columns}
      data={data}
      pagination
      responsive
      paginationComponentOptions={paginationComponentOptions}
      paginationPerPage={paginationPerPage}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
    />
  );
};

Table.defaultProps = {};

export default Table;
