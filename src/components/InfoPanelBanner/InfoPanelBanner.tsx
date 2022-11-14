import React from "react";

import Styles from "./InfoPanelBanner.styles";
import { InfoPanelBannerProps as Props } from "./InfoPanelBanner.types";

const InfoPanelBanner: React.FC<Props> = props => {
  const { value = 0, subtitle } = props;

  return (
    <Styles className={`InfoPanelBanner`}>
      <h2 className="InfoPanelBanner__title">{value}</h2>
      <h2 className="InfoPanelBanner__subtitle">{subtitle}</h2>
    </Styles>
  );
};

InfoPanelBanner.defaultProps = {};

export default InfoPanelBanner;
