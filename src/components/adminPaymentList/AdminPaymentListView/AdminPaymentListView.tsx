import React from "react";

import ExpandableRowsComponent from "../ExpandableRowsComponent/ExpandableRowsComponent";
import PaymentTable from "../PaymentTable/PaymentTable";
import { columns, data } from "./AdminPaymentListView.helpers";
import Styles from "./AdminPaymentListView.styles";
import { AdminPaymentListViewProps as Props } from "./AdminPaymentListView.types";

const AdminPaymentListView: React.FC<Props> = props => {
  /* TODO: Pending integration services */

  const renderTable = () => (
    <PaymentTable
      data={data}
      columns={columns}
      expandableRows={true}
      expandableRowsComponent={ExpandableRowsComponent}
      expandOnRowClicked={true}
    />
  );

  return <Styles className={`AdminPaymentListView `}>{renderTable()}</Styles>;
};

AdminPaymentListView.defaultProps = {};

export default AdminPaymentListView;
