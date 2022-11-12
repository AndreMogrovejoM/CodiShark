import BarChart from "components/BarChart/BarChart";
import Indicators from "components/Indicators/Indicators";
import LastProcessCard from "components/LastProcessCard/LastProcessCard";
import PanelBanner from "components/PanelBanner/PanelBanner";
import LayoutContainer from "containers/Layout/Layout.container";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./AdministratorPanel.styles";
import { AdministratorPanelContainerProps as Props } from "./AdministratorPanel.types";

const AdministratorPanelContainer: React.FC<Props> = props => {
  const t = useI18n().signIn.AdministratorPanel;

  return (
    <LayoutContainer>
      <Styles className="AdministratorPanel">
        <div className="AdministratorPanel__section1">
          <PanelBanner />
          <Indicators />
          <BarChart />
        </div>

        <div className="AdministratorPanel__section2">
          <LastProcessCard title={t.charges1} />
          <LastProcessCard title={t.charges2} />
        </div>
      </Styles>
    </LayoutContainer>
  );
};

AdministratorPanelContainer.defaultProps = {};

export default AdministratorPanelContainer;
