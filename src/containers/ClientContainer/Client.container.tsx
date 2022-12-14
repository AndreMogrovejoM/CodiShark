import CardImageOne from "components/clientHome/CardImageOne/CardImageOne";
import CardImageTwo from "components/clientHome/CardImageTwo/CardImageTwo";
import DebtExpandableRowsComponent from "components/clientHome/DebtExpandableRowsComponent/DebtExpandableRowsComponent";
import DebtTable from "components/clientHome/DebtTable/DebtTable";
import IndicatorsClientOne from "components/clientHome/IndicatorsClientOne/IndicatorsClientOne";
import IndicatorsClientTwo from "components/clientHome/IndicatorsClientTwo/IndicatorsClientTwo";
import PanelBannerClient from "components/clientHome/PanelBannerClient/PanelBannerClient";
import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import LayoutContainer from "containers/Layout/Layout.container";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useUserDebts } from "services/users/users.service.hooks";
import { UserDebt } from "services/users/users.service.types";
import { buildHeaders } from "utils/axios.utils";

import { columns } from "./Client.container.helpers";
import Styles from "./Client.styles";
import { ClientContainerProps as Props } from "./Client.types";

const ClientContainerContainer: React.FC<Props> = props => {
  const t = useI18n().signIn.ClientContainer;
  const { data, isLoading } = useUserDebts();
  const { data: summaryData, total_debts } = data ?? {};
  if (summaryData && summaryData?.length > 0)
    summaryData[0].defaultExpanded = true;

  /* TODO: Delete */
  console.log(buildHeaders());

  const renderIndicators = () =>
    isLoading ? (
      <>
        <SkeletonComponent variant="rounded" height={124} width="100%" />
        <SkeletonComponent variant="rounded" height={124} width="100%" />
      </>
    ) : (
      <>
        <IndicatorsClientOne />
        <IndicatorsClientTwo total_debts={total_debts} />
      </>
    );

  const renderTable = () =>
    isLoading ? (
      <SkeletonComponent variant="rounded" height={400} width="100%" />
    ) : (
      <DebtTable
        data={summaryData ?? []}
        columns={columns}
        expandableRows={true}
        expandOnRowClicked={true}
        expandableRowsComponent={DebtExpandableRowsComponent}
        expandableRowExpanded={(row: UserDebt) => row.defaultExpanded}
        progressPending={isLoading}
      />
    );

  const renderCards = () =>
    isLoading ? (
      <>
        <SkeletonComponent variant="rounded" height={280} width="100%" />
        <SkeletonComponent variant="rounded" height={480} width="100%" />
      </>
    ) : (
      <>
        <CardImageOne />
        <CardImageTwo />
      </>
    );

  return (
    <LayoutContainer>
      <Styles className="ClientContainer">
        <div className="ClientContainer__section3">
          <div className="ClientContainer__section1">
            <PanelBannerClient />
            <div className="ClientContainer__section2">
              {renderIndicators()}
            </div>
          </div>
          <h2 className="ClientContainer__title">{t.title}</h2>
          {renderTable()}
        </div>

        <div className="ClientContainer__section4">{renderCards()}</div>
      </Styles>
    </LayoutContainer>
  );
};

ClientContainerContainer.defaultProps = {};

export default ClientContainerContainer;
