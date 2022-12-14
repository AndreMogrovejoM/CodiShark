import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import React from "react";
import { useFetchUserOperations } from "services/users/users.service.hooks";

import ExpandableRowsComponent from "../ExpandableRowsComponent/ExpandableRowsComponent";
import PaymentTable from "../PaymentTable/PaymentTable";
import { columns } from "./AdminPaymentListView.helpers";
import Styles from "./AdminPaymentListView.styles";
import { AdminPaymentListViewProps as Props } from "./AdminPaymentListView.types";

const AdminPaymentListView: React.FC<Props> = props => {
  const { data, isLoading } = useFetchUserOperations(0, 10);
  const { data: paymentList } = data ?? {};

  const renderTable = () =>
    isLoading ? (
      <SkeletonComponent variant="rounded" height={720} width="100%" />
    ) : (
      <PaymentTable
        data={paymentList ?? []}
        columns={columns}
        expandableRows={true}
        expandableRowsComponent={ExpandableRowsComponent}
        expandOnRowClicked={true}
        progressPending={isLoading}
      />
    );

  return <Styles className={`AdminPaymentListView `}>{renderTable()}</Styles>;
};

AdminPaymentListView.defaultProps = {};

export default AdminPaymentListView;
