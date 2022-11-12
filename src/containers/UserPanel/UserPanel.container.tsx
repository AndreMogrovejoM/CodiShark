import PaymentListView from "components/userPanel/PaymentListView/PaymentListView";
import React, { useState } from "react";

import { UserPanelContainerProps as Props } from "./UserPanel.types";

const UserPanelContainer: React.FC<Props> = props => {
  const [step] = useState(1);

  const renderView = () => {
    switch (step) {
      case 0:
        // TODO: Render view iMac16
        return <div />;
      case 1:
        return <PaymentListView />;
      default:
        // TODO: Render view iMac16
        return <div />;
    }
  };
  return <div style={{ padding: "2rem" }}>{renderView()} </div>;
};

UserPanelContainer.defaultProps = {};

export default UserPanelContainer;
