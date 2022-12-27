import Backdrop from "components/Backdrop/Backdrop";
import NoDataComponent from "components/NoDataComponent/NoDataComponent";
import React from "react";

import DataTableCustom from "./Table.styles";
import { TableProps as Props } from "./Table.types";

const Table: React.FC<Props> = props => {
  const { columns, data, paginationComponent, expandableRows } = props;
  const { paginationPerPage, paginationRowsPerPageOptions } = props;
  const { expandableRowsComponent, expandOnRowClicked, hiddenHeadRow } = props;
  const { onRowClicked, expandableIcon, progressPending } = props;
  const { expandableRowExpanded, hiddenMobile } = props;

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
      expandableRowExpanded={expandableRowExpanded}
      onRowClicked={onRowClicked}
      expandableIcon={expandableIcon}
      progressPending={progressPending}
      hiddenHeadRow={hiddenHeadRow}
      progressComponent={<Backdrop isLoading={true} />}
      noDataComponent={<NoDataComponent />}
      hiddenMobile={hiddenMobile}
    />
  );
};

Table.defaultProps = {};

export default Table;
