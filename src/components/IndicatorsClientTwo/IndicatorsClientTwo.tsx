import React from "react";
import { useUserDebts } from "services/users/users.service.hooks";

import Styles from "./IndicatorsClientTwo.styles";
import { IndicatorsClientTwoProps as Props } from "./IndicatorsClientTwo.types";

const IndicatorsClientTwo: React.FC<Props> = props => {
  const { data } = useUserDebts();
  const { total_debts } = data ?? {};
  console.log(data);

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
