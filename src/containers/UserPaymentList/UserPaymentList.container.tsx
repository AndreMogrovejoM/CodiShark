import UserPaymentListView from "components/userPaymentList/UserPaymentListView/UserPaymentListView";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { UserPaymentListContainerProps as Props } from "./UserPaymentList.types";

const UserPaymentListContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <UserPaymentListView />
    </LayoutContainer>
  );
};

UserPaymentListContainer.defaultProps = {};

export default UserPaymentListContainer;
