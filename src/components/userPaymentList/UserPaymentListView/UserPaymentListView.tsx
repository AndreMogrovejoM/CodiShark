import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import React, { useState } from "react";
import { useFetchUserOperations } from "services/users/users.service.hooks";

import ExpandableRowsComponent from "../ExpandableRowsComponent/ExpandableRowsComponent";
import PaymentTable from "../PaymentTable/PaymentTable";
import { columns } from "./UserPaymentListView.helpers";
import Styles from "./UserPaymentListView.styles";
import { UserPaymentListViewProps as Props } from "./UserPaymentListView.types";

const UserPaymentListView: React.FC<Props> = props => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useFetchUserOperations(10 * page, 10);
  const { pages, pageParams } = data ?? {};

  const totalRows = pages?.[0].total ?? 0;
  const paymentList = pages?.flatMap(page => page.data);

  console.log({ pages, pageParams });

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
        totalRows={totalRows}
        setPage={setPage}
        page={page}
      />
    );

  return <Styles className={`UserPaymentListView `}>{renderTable()}</Styles>;
};

UserPaymentListView.defaultProps = {};

export default UserPaymentListView;
