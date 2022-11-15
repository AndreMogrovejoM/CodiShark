import OperationListView from "components/userOperationPanel/OperationListView/OperationListView";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { UserOperationsPanelContainerProps as Props } from "./UserOperationsPanel.types";

const UserOperationsPanelContainer: React.FC<Props> = props => (
  <LayoutContainer>
    <OperationListView />
  </LayoutContainer>
);
UserOperationsPanelContainer.defaultProps = {};

export default UserOperationsPanelContainer;
