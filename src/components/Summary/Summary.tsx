import AddIcon from "@mui/icons-material/Add";
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
      <div className="Summary__container--content">
        <div className="Summary__cardsContainer">
          <SummaryCard title={t.summary1}>
            <h3 className="Summary__h3">S/ 8200</h3>
          </SummaryCard>

          <img src={lineSummary} className="Summary__image" alt="separator" />

          <SummaryCard title={t.summary2}>
            <div className="Summary__sectionDate">
              <h3 className="Summary__h3 Summary__primary-color">S/6750.00</h3>
              <span className="Summary__span">-35%</span>
            </div>
          </SummaryCard>

          <img src={lineSummary} className="Summary__image" alt="separator" />

          <SummaryCard title={t.summary3}>
            <h4 className="Summary__h4">10/09/2022</h4>
          </SummaryCard>
        </div>

        <div className="Summary__container--button">
          <Button
            className="Summary__button Summary__text"
            variant="contained"
            endIcon={<AddIcon fontSize="small" className="Summary__icon" />}
          >
            {t.button}
          </Button>
        </div>
      </div>
    </Styles>
  );
};

Summary.defaultProps = {};

export default Summary;
