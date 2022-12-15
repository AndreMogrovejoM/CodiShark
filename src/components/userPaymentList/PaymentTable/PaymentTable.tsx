import Table from "components/globals/Table/Table";
import React from "react";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import PaginationCustom from "../PaginationCustom/PaginationCustom";
import Styles from "./PaymentTable.styles";
import { PaginationInterface } from "./PaymentTable.types";
import { PaymentTableProps as Props } from "./PaymentTable.types";

const PaginationCustomHandler = (props: PaginationInterface) => {
  return <PaginationCustom {...props} />;
};

const PaymentTable: React.FC<Props> = props => {
  const { data, columns, expandableRows, expandableRowsComponent } = props;
  const { expandOnRowClicked, progressPending } = props;

  // TODO: check
  return (
    <Styles className={`PaymentTable`}>
      <Table
        columns={columns}
        data={data}
        expandableRows={expandableRows}
        expandableRowsComponent={expandableRowsComponent}
        expandOnRowClicked={expandOnRowClicked}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        //@ts-ignore
        paginationComponent={PaginationCustomHandler}
        expandableIcon={{ collapsed: null, expanded: null }}
        progressPending={progressPending}
      />
    </Styles>
  );
};

PaymentTable.defaultProps = {};

export default PaymentTable;
