import AddIcon from "@mui/icons-material/Add";
import lineSummary from "assets/images/lineSummary.svg";
import SummaryCard from "components/SummaryCard/SummaryCard";
import Button from "components/globals/Button/Button";
import useI18n from "i18n/i18n.hooks";
import React from "react";
import { useUserDebts } from "services/users/users.service.hooks";

import Styles from "./Summary.styles";
import { SummaryProps as Props } from "./Summary.types";

const Summary: React.FC<Props> = props => {
  const t = useI18n().signIn.Summary;
  const { data } = useUserDebts();
  const { data: summaryData } = data ?? {};
  const {
    amount_cancellation,
    amount_dscto_cancellation,
    pct_dscto_cancellation,
    date_last_contact,
    currency,
    banking_entity,
    product
  } = summaryData?.[0] ?? {};

  return (
    <Styles className="Summary">
      <h2 className="Summary__subtitle">{t.subtitle}</h2>
      <div className="Summary__container--content">
        <div className="Summary__cardsContainer">
          <SummaryCard title={t.summary1}>
            <h3 className="Summary__h3">{`S/. ${
              amount_cancellation ?? ""
            }`}</h3>
          </SummaryCard>

          <img src={lineSummary} className="Summary__image" alt="separator" />

          <SummaryCard title={t.summary2}>
            <div className="Summary__sectionDate">
              <h3 className="Summary__h3 Summary__primary-color">{`S/. ${
                amount_dscto_cancellation ?? ""
              }`}</h3>
              <div>
                <span className="Summary__span">{` - ${
                  pct_dscto_cancellation ?? ""
                } %`}</span>
              </div>
            </div>
          </SummaryCard>

          <img src={lineSummary} className="Summary__image" alt="separator" />

          <SummaryCard title={t.summary3}>
            <h4 className="Summary__h4">{` ${date_last_contact ?? ""}`}</h4>
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
      <div className="Summary__section2">
        <div></div>
        <p className="Summary__p1">
          Entidad Bancaria:{" "}
          <span className="Summary__span1">{` ${banking_entity ?? ""}`}</span>
        </p>
        <p className="Summary__p1">
          Tipo de Deuda:{" "}
          <span className="Summary__span1">{` ${product ?? ""}`}</span>
        </p>
        <p className="Summary__p1">
          Tipo de Moneda:{" "}
          <span className="Summary__span1">{` ${currency ?? ""}`}</span>
        </p>
        <p className="Summary__p1">
          Fecha:{" "}
          <span className="Summary__span1">{` ${
            date_last_contact ?? ""
          }`}</span>
        </p>
      </div>
    </Styles>
  );
};

Summary.defaultProps = {};

export default Summary;
