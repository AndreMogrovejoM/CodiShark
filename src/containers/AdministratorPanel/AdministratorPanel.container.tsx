import Indicators from "components/Indicators/Indicators";
import LastProcessCard from "components/LastProcessCard/LastProcessCard";
import PanelBanner from "components/PanelBanner/PanelBanner";
import LayoutContainer from "containers/Layout/Layout.container";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import { AdministratorPanelContainerProps as Props } from "./AdministratorPanel.types";

const AdministratorPanelContainer: React.FC<Props> = props => {
  const t = useI18n().signIn.AdministratorPanel;

  return (
    <LayoutContainer>
      <PanelBanner />
      <Indicators />
      <div>
        <LastProcessCard title={t.charges1} />
        <LastProcessCard title={t.charges2} />
      </div>
    </LayoutContainer>
  );
};

AdministratorPanelContainer.defaultProps = {};

export default AdministratorPanelContainer;
