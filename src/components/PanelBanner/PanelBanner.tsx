import LogoPanelBanner from "assets/images/LogoPanelBanner.svg";
import InfoPanelBanner from "components/InfoPanelBanner/InfoPanelBanner";
import useAuth from "contexts/auth/auth.hooks";
import React from "react";
import { useFetchAdministratorFirstPanel } from "services/administrator/administrator.service.hooks";

import Styles from "./PanelBanner.styles";
import { PanelBannerProps as Props } from "./PanelBanner.types";

const PanelBanner: React.FC<Props> = props => {
  const { data } = useFetchAdministratorFirstPanel();
  const { calls, connections, payments } = data ?? {};
  const { user } = useAuth();
  const { first_name } = user ?? {};

  const renderHeaderPanelBanner = (
    <>
      {/* TODO: usar diccionarios */}
      <h2 className="PanelBanner__title">{`Hola ${first_name ?? ""}`}</h2>
      <h4 className="PanelBanner__subtitle">
        Esta es la actividad de este mes:
      </h4>
    </>
  );

  return (
    <Styles className="PanelBanner">
      {renderHeaderPanelBanner}
      <div className="PanelBanner__textContent">
        {/* TODO: usar diccionarios */}
        <InfoPanelBanner subtitle="Ingresos" value={connections} />
        <InfoPanelBanner subtitle="Pagos registrados" value={payments} />
        <InfoPanelBanner subtitle="Solicitudes de llamadas" value={calls} />
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
