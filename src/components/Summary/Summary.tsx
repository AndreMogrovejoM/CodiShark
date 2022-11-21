import lineSummary from "assets/images/lineSummary.svg";
import SummaryCard from "components/SummaryCard/SummaryCard";
import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./Summary.styles";
import { SummaryProps as Props } from "./Summary.types";

const Summary: React.FC<Props> = props => {
  const t = useI18n().signIn.Summary;

  return (
    <Styles className="Summary">
      <h2 className="Summary__subtitle">{t.subtitle}</h2>
      <div className="Summary__cardsContainer">
        <SummaryCard title={t.summary1} value={"S/8200.00"} />
        <SummaryCard title={t.summary2} value={"S/6750.00"} />
        <SummaryCard title={t.summary3} value={"10/09/2022"} />
      </div>
      <Button className="Summary__button" variant="contained">
        {t.button}
      </Button>
      <img className="Summary__line1" src={lineSummary} alt="lineSummary" />
      <img className="Summary__line2" src={lineSummary} alt="lineSummary" />
    </Styles>
  );
};

Summary.defaultProps = {};

export default Summary;
