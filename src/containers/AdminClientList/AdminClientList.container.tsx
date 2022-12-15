import AdminClientListView from "components/adminClientList/AdminClientListView/AdminClientListView";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { AdminClientListContainerProps as Props } from "./AdminClientList.types";

const AdminClientListContainer: React.FC<Props> = props => (
  <LayoutContainer>
    <AdminClientListView />
  </LayoutContainer>
);

AdminClientListContainer.defaultProps = {};

export default AdminClientListContainer;
