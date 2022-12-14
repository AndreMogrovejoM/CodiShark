import BarChart from "components/BarChart/BarChart";
import ImportCsv from "components/ImportCsv/ImportCsv";
import Indicators from "components/Indicators/Indicators";
import LastProcessCard from "components/LastProcessCard/LastProcessCard";
import PanelBanner from "components/clientHome/PanelBanner/PanelBanner";
import LayoutContainer from "containers/Layout/Layout.container";
import useGlobals from "contexts/globals/globals.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useEffect } from "react";
import { useFetchAdministratorFirstPanel } from "services/administrator/administrator.service.hooks";

import Styles from "./AdministratorPanel.styles";
import { AdministratorPanelContainerProps as Props } from "./AdministratorPanel.types";

const AdministratorPanelContainer: React.FC<Props> = props => {
  const t = useI18n().signIn.AdministratorPanel;
  const { isLoading } = useFetchAdministratorFirstPanel();
  const { setIsLoading } = useGlobals();

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return (
    <LayoutContainer>
      <Styles className="AdministratorPanel">
        <div className="AdministratorPanel__section1">
          <PanelBanner />
          <Indicators />
          <BarChart />
          <ImportCsv />
        </div>

        <div className="AdministratorPanel__section2">
          <LastProcessCard title={t.charges1} status={"Pagado"} />
          <LastProcessCard title={t.charges2} status={"Pendiente"} />
        </div>
      </Styles>
    </LayoutContainer>
  );
};

AdministratorPanelContainer.defaultProps = {};

export default AdministratorPanelContainer;
