import CardImageOne from "components/CardImageOne/CardImageOne";
import CardImageTwo from "components/CardImageTwo/CardImageTwo";
import IndicatorsClientOne from "components/IndicatorsClientOne/IndicatorsClientOne";
import IndicatorsClientTwo from "components/IndicatorsClientTwo/IndicatorsClientTwo";
import InformationClient from "components/InformationClient/InformationClient";
import PanelBannerClient from "components/PanelBannerClient/PanelBannerClient";
import Summary from "components/Summary/Summary";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import Styles from "./Client.styles";
import { ClientContainerContainerProps as Props } from "./Client.types";

const ClientContainerContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <Styles className="ClientContainer">
        <div className="ClientContainer__section1">
          <PanelBannerClient />
          <div className="ClientContainer__section2">
            <IndicatorsClientOne />
            <IndicatorsClientTwo />
          </div>
          <Summary />
          <InformationClient />
        </div>
        <div className="ClientContainer__section3">
          <CardImageOne />
          <CardImageTwo />
        </div>
      </Styles>
    </LayoutContainer>
  );
};

ClientContainerContainer.defaultProps = {};

export default ClientContainerContainer;
