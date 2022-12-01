import personIcon from "assets/images/PersonIconPanelBannerClient.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./PanelBannerClient.styles";
import { PanelBannerClientProps as Props } from "./PanelBannerClient.types";

const PanelBannerClient: React.FC<Props> = props => {
  const t = useI18n().signIn.PanelBannerClient;

  return (
    <Styles className="PanelBannerClient">
      <div className="PanelBannerClient__container--component">
        <div className="PanelBannerClient__container--image">
          <img
            className="PanelBannerClient__image"
            src={personIcon}
            alt="personIcon"
          />
        </div>
        <div className="PanelBannerClient__container">
          <h1 className="PanelBannerClient__title">{t.title}</h1>
          <div className="PanelBannerClient__section">
            <p>{t.parrafo1}</p>
            <p>{t.parrafo2}</p>
            <p>{t.parrafo3}</p>
          </div>
        </div>
      </div>
    </Styles>
  );
};

PanelBannerClient.defaultProps = {};

export default PanelBannerClient;
