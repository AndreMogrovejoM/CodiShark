import React from "react";

import PaymentTable from "../PaymentTable/PaymentTable";
import { ExpandableRowComponent } from "../PaymentTable/PaymentTable.helpers";
import { columns, data } from "./AdminPaymentListView.helpers";
import Styles from "./AdminPaymentListView.styles";
import { AdminPaymentListViewProps as Props } from "./AdminPaymentListView.types";

const AdminPaymentListView: React.FC<Props> = props => {
  /* TODO: Pending integration services */
  /*  const { data, isLoading } = useFetchAdministratorUsers(1, 50);
  const { data: usersList } = data ?? {}; */

  /*  const { setIsLoading } = useGlobals();
  setIsLoading(isLoading); */

  /*   if (!usersList) return null; */

  const renderTable = () => (
    <PaymentTable
      data={data}
      columns={columns}
      expandableRows={true}
      expandableRowsComponent={ExpandableRowComponent}
      expandOnRowClicked={true}
    />
  );

  return <Styles className={`AdminPaymentListView `}>{renderTable()}</Styles>;
};

AdminPaymentListView.defaultProps = {};

export default AdminPaymentListView;
