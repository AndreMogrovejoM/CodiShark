import PaymentListView from "components/userPanel/PaymentListView/PaymentListView";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { UserPanelContainerProps as Props } from "./UserPanel.types";

const UserPanelContainer: React.FC<Props> = props => (
  <LayoutContainer>
    <PaymentListView />
  </LayoutContainer>
);

UserPanelContainer.defaultProps = {};

export default UserPanelContainer;
