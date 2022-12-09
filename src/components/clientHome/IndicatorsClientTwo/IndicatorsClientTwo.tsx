import React from "react";

import Styles from "./IndicatorsClientTwo.styles";
import { IndicatorsClientTwoProps as Props } from "./IndicatorsClientTwo.types";

const IndicatorsClientTwo: React.FC<Props> = props => {
  const { total_debts } = props;

  return (
    <Styles className="IndicatorsClientTwo">
      <div className="IndicatorsClientTwo__component--card">
        <h2 className="IndicatorsClientTwo__text--bold">Deuda Actual</h2>
        <h2 className="IndicatorsClientTwo__text--blue">{`S/. ${
          total_debts ?? ""
        }`}</h2>
      </div>
    </Styles>
  );
};

IndicatorsClientTwo.defaultProps = {};

export default IndicatorsClientTwo;
