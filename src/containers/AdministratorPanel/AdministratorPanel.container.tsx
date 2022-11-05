import Indicators from "components/Indicators/Indicators";
import LastProcessCard from "components/LastProcessCard/LastProcessCard";
import PanelBanner from "components/PanelBanner/PanelBanner";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { AdministratorPanelContainerProps as Props } from "./AdministratorPanel.types";

const AdministratorPanelContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <PanelBanner />
      <Indicators />
      <div>
        <LastProcessCard title="Cobros realizados" />
        <LastProcessCard title="Cobros en proceso" />
      </div>
    </LayoutContainer>
  );
};

AdministratorPanelContainer.defaultProps = {};

export default AdministratorPanelContainer;
