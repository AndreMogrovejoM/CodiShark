import CardImageOne from "components/clientHome/CardImageOne/CardImageOne";
import CardImageTwo from "components/clientHome/CardImageTwo/CardImageTwo";
import DebtExpandableRowsComponent from "components/clientHome/DebtExpandableRowsComponent/DebtExpandableRowsComponent";
import DebtTable from "components/clientHome/DebtTable/DebtTable";
import IndicatorsClientOne from "components/clientHome/IndicatorsClientOne/IndicatorsClientOne";
import IndicatorsClientTwo from "components/clientHome/IndicatorsClientTwo/IndicatorsClientTwo";
import PanelBannerClient from "components/clientHome/PanelBannerClient/PanelBannerClient";
import LayoutContainer from "containers/Layout/Layout.container";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useUserDebts } from "services/users/users.service.hooks";
import { UserDebt } from "services/users/users.service.types";

import { columns } from "./Client.container.helpers";
import Styles from "./Client.styles";
import { ClientContainerProps as Props } from "./Client.types";

const ClientContainerContainer: React.FC<Props> = props => {
  const t = useI18n().signIn.ClientContainer;
  const { data, isLoading } = useUserDebts();
  const { data: summaryData, total_debts } = data ?? {};
  if (summaryData) summaryData[0].defaultExpanded = true;

  return (
    <LayoutContainer>
      <Styles className="ClientContainer">
        <div className="ClientContainer__section1">
          <PanelBannerClient />
          <div className="ClientContainer__section2">
            <IndicatorsClientOne />
            <IndicatorsClientTwo total_debts={total_debts} />
          </div>
          <h2 className="ClientContainer__title">{t.title}</h2>

          <DebtTable
            data={summaryData ?? []}
            columns={columns}
            expandableRows={true}
            expandOnRowClicked={true}
            expandableRowsComponent={DebtExpandableRowsComponent}
            expandableRowExpanded={(row: UserDebt) => row.defaultExpanded}
            progressPending={isLoading}
          />
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
