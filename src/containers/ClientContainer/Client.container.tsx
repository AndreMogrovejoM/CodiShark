import CardImageOne from "components/CardImageOne/CardImageOne";
import CardImageTwo from "components/CardImageTwo/CardImageTwo";
import IndicatorsClientOne from "components/IndicatorsClientOne/IndicatorsClientOne";
import IndicatorsClientTwo from "components/IndicatorsClientTwo/IndicatorsClientTwo";
import PanelBannerClient from "components/PanelBannerClient/PanelBannerClient";
import Summary from "components/Summary/Summary";
import LayoutContainer from "containers/Layout/Layout.container";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./Client.styles";
import { ClientContainerContainerProps as Props } from "./Client.types";

const ClientContainerContainer: React.FC<Props> = props => {
  const t = useI18n().signIn.Summary;

  return (
    <LayoutContainer>
      <Styles className="ClientContainer">
        <div className="ClientContainer__section1">
          <PanelBannerClient />
          <div className="ClientContainer__section2">
            <IndicatorsClientOne />
            <IndicatorsClientTwo />
          </div>
          <h2 className="ClientContainer__title">{t.title}</h2>
          <Summary />
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
