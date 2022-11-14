import LogoPanelBanner from "assets/images/LogoPanelBanner.svg";
import InfoPanelBanner from "components/InfoPanelBanner/InfoPanelBanner";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useFetchAdministratorFirstPanel } from "services/administrator/administrator.service.hooks";

import Styles from "./PanelBanner.styles";
import { PanelBannerProps as Props } from "./PanelBanner.types";

const PanelBanner: React.FC<Props> = props => {
  const { data } = useFetchAdministratorFirstPanel();
  const { calls, connections, payments } = data ?? {};
  const { user } = useAuth();
  const { first_name } = user ?? {};
  const t = useI18n().signIn.PanelBanner;

  const renderHeaderPanelBanner = (
    <>
      <h2 className="PanelBanner__title">
        {t.greetings}
        {`${first_name ?? ""}`}
      </h2>
      <h4 className="PanelBanner__subtitle">{t.activity}</h4>
    </>
  );

  return (
    <Styles className="PanelBanner">
      {renderHeaderPanelBanner}
      <div className="PanelBanner__textContent">
        <InfoPanelBanner subtitle={t.connections} value={connections} />
        <InfoPanelBanner subtitle={t.payments} value={payments} />
        <InfoPanelBanner subtitle={t.calls} value={calls} />
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
