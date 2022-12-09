import Table from "components/globals/Table/Table";
import React from "react";
import { paginationClientPerPage } from "utils/validations.utils";
import { paginationClientRowsPerPageOptions } from "utils/validations.utils";

import PaginationCustom from "../PaginationCustom/PaginationCustom";
import Styles from "./DebtTable.styles";
import { PaginationInterface } from "./DebtTable.types";
import { DebtTableProps as Props } from "./DebtTable.types";

const PaginationCustomHandler = (props: PaginationInterface) => {
  return <PaginationCustom {...props} />;
};

const DebtTable: React.FC<Props> = props => {
  const { data, columns, expandableRows, expandableRowsComponent } = props;
  const { progressPending, expandOnRowClicked, expandableRowExpanded } = props;

  return (
    <Styles className={`DebtTable`}>
      <Table
        columns={columns}
        data={data}
        expandableRows={expandableRows}
        expandableRowsComponent={expandableRowsComponent}
        expandOnRowClicked={expandOnRowClicked}
        paginationPerPage={paginationClientPerPage}
        paginationRowsPerPageOptions={paginationClientRowsPerPageOptions}
        expandableRowExpanded={expandableRowExpanded}
        //@ts-ignore
        paginationComponent={PaginationCustomHandler}
        expandableIcon={{ collapsed: null, expanded: null }}
        progressPending={progressPending}
        hiddenHeadRow={true}
      />
    </Styles>
  );
};

DebtTable.defaultProps = {};

export default DebtTable;
