import React from "react";

import DataTableCustom from "./Table.styles";
import { TableProps as Props } from "./Table.types";

const Table: React.FC<Props> = props => {
  const { columns, data, paginationComponent, expandableRows } = props;
  const { paginationPerPage, paginationRowsPerPageOptions } = props;
  const { expandableRowsComponent, expandOnRowClicked } = props;

  return (
    <DataTableCustom
      columns={columns}
      data={data}
      pagination
      responsive
      paginationPerPage={paginationPerPage}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      paginationComponent={paginationComponent}
      expandableRows={expandableRows}
      expandableRowsComponent={expandableRowsComponent}
      expandOnRowClicked={expandOnRowClicked}
    />
  );
};

Table.defaultProps = {};

export default Table;
