import image01 from "assets/images/sliderImage01.png";
import CardImageOne from "components/clientHome/CardImageOne/CardImageOne";
import CardImageTwo from "components/clientHome/CardImageTwo/CardImageTwo";
import DebtExpandableRowsComponent from "components/clientHome/DebtExpandableRowsComponent/DebtExpandableRowsComponent";
import DebtTable from "components/clientHome/DebtTable/DebtTable";
import IndicatorsClientOne from "components/clientHome/IndicatorsClientOne/IndicatorsClientOne";
import IndicatorsClientTwo from "components/clientHome/IndicatorsClientTwo/IndicatorsClientTwo";
import PanelBannerClient from "components/clientHome/PanelBannerClient/PanelBannerClient";
import CardDebts from "components/globals/CardDebts/CardDebts";
import Carrousel from "components/globals/Carrousel/Carrousel";
import SkeletonComponent from "components/globals/SkeletonComponent/SkeletonComponent";
import SwipperComponent from "components/globals/SwipperComponent/SwipperComponent";
import LayoutContainer from "containers/Layout/Layout.container";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useUserDebts } from "services/users/users.service.hooks";
import { UserDebt } from "services/users/users.service.types";
import { SwiperSlide } from "swiper/react";
import { items } from "utils/validations.utils";

import { columns } from "./Client.container.helpers";
import Styles from "./Client.styles";
import { ClientContainerProps as Props } from "./Client.types";

const ClientContainerContainer: React.FC<Props> = props => {
  const t = useI18n().signIn.ClientContainer;
  const { data, isLoading } = useUserDebts();
  const { data: summaryData, total_debts } = data ?? {};
  if (summaryData && summaryData?.length > 0)
    summaryData[0].defaultExpanded = true;

  const renderCarrouselIndicator = () => (
    <SwipperComponent slidesPerView={"auto"} widthFull>
      {isLoading ? (
        <>
          <SwiperSlide>
            <SkeletonComponent variant="rounded" height={124} width="100%" />
          </SwiperSlide>
          <SwiperSlide>
            <SkeletonComponent variant="rounded" height={124} width="100%" />
          </SwiperSlide>
        </>
      ) : (
        <>
          <SwiperSlide>
            <IndicatorsClientOne />
          </SwiperSlide>
          <SwiperSlide>
            <IndicatorsClientTwo total_debts={total_debts} />
          </SwiperSlide>
        </>
      )}
    </SwipperComponent>
  );

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
        hiddenMobile={true}
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

  const renderCardsDebts = () =>
    isLoading ? (
      <>
        <SkeletonComponent variant="rounded" height={320} width="100%" />
        320
        <SkeletonComponent variant="rounded" height={320} width="100%" />
      </>
    ) : (
      <>
        {summaryData?.slice(items)?.map((summary, index) => (
          <CardDebts data={summary} key={index} />
        ))}
      </>
    );

  return (
    <LayoutContainer>
      <Styles className="ClientContainer">
        <div className="ClientContainer__section3">
          <div className="ClientContainer__section1">
            <div className="ClientContainer__container--carrousel">
              <Carrousel
                images={[image01, image01, image01, image01, image01]}
              />
            </div>
            <div className="ClientContainer__container--banner">
              <PanelBannerClient />
            </div>
            <div className="ClientContainer__container--carrousel-indicators">
              {renderCarrouselIndicator()}
            </div>
            <div className="ClientContainer__section2">
              {renderIndicators()}
            </div>
          </div>
          <h2 className="ClientContainer__title">{t.title}</h2>
          {renderTable()}
          <div className="ClientContainer__container--debts">
            {renderCardsDebts()}
          </div>
        </div>
        <div className="ClientContainer__section4">{renderCards()}</div>
      </Styles>
    </LayoutContainer>
  );
};

ClientContainerContainer.defaultProps = {};

export default ClientContainerContainer;
