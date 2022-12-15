import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import React from "react";
import { useFetchUserOperations } from "services/users/users.service.hooks";

import ExpandableRowsComponent from "../ExpandableRowsComponent/ExpandableRowsComponent";
import PaymentTable from "../PaymentTable/PaymentTable";
import { columns } from "./UserPaymentListView.helpers";
import Styles from "./UserPaymentListView.styles";
import { UserPaymentListViewProps as Props } from "./UserPaymentListView.types";

const UserPaymentListView: React.FC<Props> = props => {
  const { data, isLoading } = useFetchUserOperations(0, 50);
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

  return <Styles className={`UserPaymentListView `}>{renderTable()}</Styles>;
};

UserPaymentListView.defaultProps = {};

export default UserPaymentListView;
