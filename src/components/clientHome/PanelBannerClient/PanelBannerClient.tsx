import pannelBannerClient from "assets/images/pannelBannerClient.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./PanelBannerClient.styles";
import { PanelBannerClientProps as Props } from "./PanelBannerClient.types";

const PanelBannerClient: React.FC<Props> = props => {
  const t = useI18n().signIn.PanelBannerClient;

  return (
    <Styles className="PanelBannerClient">
      <div className="PanelBannerClient__container">
        <h1 className="PanelBannerClient__title">{t.title}</h1>
        <div className="PanelBannerClient__section">
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
          <p>{t.paragraph3}</p>
        </div>
      </div>
      <div className="PanelBannerClient__imageContainer">
        <img
          className="PanelBannerClient__image"
          src={pannelBannerClient}
          alt="pannelBannerClient"
        />
      </div>
    </Styles>
  );
};

PanelBannerClient.defaultProps = {};

export default PanelBannerClient;
