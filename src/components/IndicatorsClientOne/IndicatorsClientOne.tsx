import InfoCardClient from "components/InfoCardClient/InfoCardClient";
import React from "react";

import Styles from "./IndicatorsClientOne.styles";
import { IndicatorsClientOneProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOne: React.FC<Props> = props => {
  return (
    <Styles className="IndicatorsClientOne">
      <h2 className="IndicatorsClientOne__title">Bienvenido(a)</h2>
      <div className="IndicatorsClientOne__cardsContainer">
        <InfoCardClient name="ARMANDO RODRIGUEZ GUERRA" />
        <InfoCardClient dni="DNI N° 86752459" />
      </div>
    </Styles>
  );
};

IndicatorsClientOne.defaultProps = {};

export default IndicatorsClientOne;
