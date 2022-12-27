import { PaginationCustomProps } from "components/adminClientList/PaginationCustom/PaginationCustom.types";
import Table from "components/globals/Table/Table";
import React from "react";
import { paginationPerPage } from "utils/validations.utils";
import { paginationRowsPerPageOptions } from "utils/validations.utils";

import PaginationCustom from "../PaginationCustom/PaginationCustom";
import Styles from "./PaymentTable.styles";
import { PaymentTableProps as Props } from "./PaymentTable.types";

const PaginationCustomHandler = (props: PaginationCustomProps) => {
  return <PaginationCustom {...props} />;
};

const PaymentTable: React.FC<Props> = props => {
  const { data, columns, onRowClicked, progressPending } = props;
  const { totalRows, setPage } = props;

  return (
    <Styles className={`PaymentTable`}>
      <Table
        columns={columns}
        data={data}
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        onRowClicked={onRowClicked}
        paginationComponent={pageParams =>
          PaginationCustomHandler({ ...pageParams, totalRows, setPage })
        }
        progressPending={progressPending}
      />
    </Styles>
  );
};

PaymentTable.defaultProps = {};

export default PaymentTable;
