import Indicators from "components/Indicators/Indicators";
import PanelBanner from "components/PanelBanner/PanelBanner";
import React from "react";

import { AdministratorPanelContainerProps as Props } from "./AdministratorPanel.types";

const AdministratorPanelContainer: React.FC<Props> = props => {
  return (
    <div>
      <PanelBanner />
      <Indicators />
    </div>
  );
};

AdministratorPanelContainer.defaultProps = {};

export default AdministratorPanelContainer;
