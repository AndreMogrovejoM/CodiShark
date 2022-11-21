import AdminPaymentListView from "components/adminPaymentList/AdminPaymentListView/AdminPaymentListView";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { AdminPaymentListContainerProps as Props } from "./AdminPaymentList.types";

const AdminPaymentListContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <AdminPaymentListView />
    </LayoutContainer>
  );
};

AdminPaymentListContainer.defaultProps = {};

export default AdminPaymentListContainer;
