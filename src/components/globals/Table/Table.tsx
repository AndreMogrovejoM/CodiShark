import React from "react";

import ProgressComponent from "../ProgressComponent/ProgressComponent";
import DataTableCustom from "./Table.styles";
import { TableProps as Props } from "./Table.types";

const Table: React.FC<Props> = props => {
  const { columns, data, paginationComponent, expandableRows } = props;
  const { paginationPerPage, paginationRowsPerPageOptions } = props;
  const { expandableRowsComponent, expandOnRowClicked } = props;
  const { onRowClicked, expandableIcon, progressPending } = props;

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
      onRowClicked={onRowClicked}
      expandableIcon={expandableIcon}
      progressPending={progressPending}
      progressComponent={<ProgressComponent />}
    />
  );
};

Table.defaultProps = {};

export default Table;
