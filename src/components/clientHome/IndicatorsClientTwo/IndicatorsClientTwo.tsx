import useI18n from "i18n/i18n.hooks";
import React from "react";
import { numberWithCommas } from "utils/common.utils";

import Styles from "./IndicatorsClientTwo.styles";
import { IndicatorsClientTwoProps as Props } from "./IndicatorsClientTwo.types";

const IndicatorsClientTwo: React.FC<Props> = props => {
  const t = useI18n().signIn.IndicatorsClientTwo;
  const { total_debts } = props;

  return (
    <Styles className="IndicatorsClientTwo">
      <div className="IndicatorsClientTwo__component--card">
        <h2 className="IndicatorsClientTwo__text--bold">{t.debt}</h2>
        <h2 className="IndicatorsClientTwo__text--blue">{`S/. ${
          numberWithCommas(total_debts ?? 0) ?? ""
        }`}</h2>
      </div>
    </Styles>
  );
};

IndicatorsClientTwo.defaultProps = {};

export default IndicatorsClientTwo;
