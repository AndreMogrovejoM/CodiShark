import InfoCard from "components/InfoCard/InfoCard";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./Indicators.styles";
import { IndicatorsProps as Props } from "./Indicators.types";

const Indicators: React.FC<Props> = props => {
  const t = useI18n().signIn.Indicator;

  const renderHeaderIndicators = (
    <>
      <h3 className="Indicators__title">{t.title}</h3>
      <div className="Indicators__spanContainer">
        <span className="Indicators__span">{t.month}</span>
        <span className="Indicators__span">{t.year}</span>
        <span className="Indicators__span">{t.day}</span>
      </div>
    </>
  );

  return (
    <Styles className="Indicators">
      {renderHeaderIndicators}
      <div className="Indicators__cardsContainer">
        <InfoCard title={t.card1} value="S/. 37,850.00" />
        <InfoCard title={t.card2} value="2,350" />
        <InfoCard title={t.card3} value="114" />
        <InfoCard title={t.card4} value="65" />
      </div>
    </Styles>
  );
};

Indicators.defaultProps = {};

export default Indicators;
