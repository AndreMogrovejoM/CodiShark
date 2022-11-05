import LogoPanelBanner from "assets/images/LogoPanelBanner.svg";
import InfoPanelBanner from "components/InfoPanelBanner/InfoPanelBanner";
import React from "react";

import Styles from "./PanelBanner.styles";
import { PanelBannerProps as Props } from "./PanelBanner.types";

const PanelBanner: React.FC<Props> = props => {
  const renderHeaderPanelBanner = (
    <>
      <h2 className="PanelBanner__title">Hola Armando</h2>
      <h4 className="PanelBanner__subtitle">
        Esta es la actividad de este mes:
      </h4>
    </>
  );

  return (
    <Styles className="PanelBanner">
      {renderHeaderPanelBanner}
      <div className="PanelBanner__textContent">
        <InfoPanelBanner subtitle="Ingresos" value={200} />
        <InfoPanelBanner subtitle="Pagos registrados" value={41} />
        <InfoPanelBanner subtitle="Solicitudes de llamadas" value={20} />
      </div>
      <img
        className="PanelBanner__image"
        src={LogoPanelBanner}
        alt="LogoPanelBanner"
      />
    </Styles>
  );
};

PanelBanner.defaultProps = {};

export default PanelBanner;
