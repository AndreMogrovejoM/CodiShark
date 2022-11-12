import InfoCard from "components/InfoCard/InfoCard";
import dayjs from "dayjs";
import useI18n from "i18n/i18n.hooks";
import React, { useState } from "react";
import { useFetchAdministratorSecondPanel } from "services/administrator/administrator.service.hooks";

import Styles from "./Indicators.styles";
import { IndicatorsProps as Props } from "./Indicators.types";

const Indicators: React.FC<Props> = props => {
  const t = useI18n().signIn.Indicator;
  const todayDate = new Date();
  const previous = new Date(todayDate.getTime());
  previous.setDate(todayDate.getDate() - 30);

  const [dates, setDates] = useState([
    dayjs(previous.toLocaleString()).format("YYYY-MM-DD"),
    dayjs(new Date()).format("YYYY-MM-DD")
  ]);
  const { data } = useFetchAdministratorSecondPanel(dates[0], dates[1]);
  const { calls, connections, payments, charges } = data ?? {};

  const handleSetDates = (days: number) => {
    const todayDate = new Date();
    const previous = new Date(todayDate.getTime());
    previous.setDate(todayDate.getDate() - days);
    setDates([
      dayjs(previous.toLocaleString()).format("YYYY-MM-DD"),
      dayjs(new Date()).format("YYYY-MM-DD")
    ]);
  };

  const renderHeaderIndicators = (
    <>
      <h3 className="Indicators__title">{t.title}</h3>
      <div className="Indicators__spanContainer">
        <span className="Indicators__span" onClick={() => handleSetDates(30)}>
          {t.month}
        </span>
        <span className="Indicators__span" onClick={() => handleSetDates(365)}>
          {t.year}
        </span>
        <span className="Indicators__span" onClick={() => handleSetDates(1)}>
          {t.day}
        </span>
      </div>
    </>
  );

  return (
    <Styles className="Indicators">
      {renderHeaderIndicators}
      <div className="Indicators__cardsContainer">
        <InfoCard title={t.card1} value={`${connections}`} />
        <InfoCard title={t.card2} value={`${charges}`} />
        <InfoCard title={t.card3} value={`${calls}`} />
        <InfoCard title={t.card4} value={`${payments}`} />
      </div>
    </Styles>
  );
};

Indicators.defaultProps = {};

export default Indicators;
