import CardImageOne from "components/CardImageOne/CardImageOne";
import CardImageTwo from "components/CardImageTwo/CardImageTwo";
import PanelBannerClient from "components/PanelBannerClient/PanelBannerClient";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import Styles from "./Client.styles";
import { ClientContainerContainerProps as Props } from "./Client.types";

const ClientContainerContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <Styles className="Client">
        <PanelBannerClient />
        <div className="Client__section2">
          <CardImageOne />
          <CardImageTwo />
        </div>
      </Styles>
    </LayoutContainer>
  );
};

ClientContainerContainer.defaultProps = {};

export default ClientContainerContainer;
