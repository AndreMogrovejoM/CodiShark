import InfoCardClientTwo from "components/InfoCardClientTwo/InfoCardClientTwo";
import React from "react";

import Styles from "./IndicatorsClientTwo.styles";
import { IndicatorsClientTwoProps as Props } from "./IndicatorsClientTwo.types";

const IndicatorsClientTwo: React.FC<Props> = props => {
  return (
    <Styles className="IndicatorsClientTwo">
      <div className="IndicatorsClientTwo__cardsContainer">
        <InfoCardClientTwo title={"Deuda Actual"} value={"S/. 5750.00"} />
      </div>
    </Styles>
  );
};

IndicatorsClientTwo.defaultProps = {};

export default IndicatorsClientTwo;
