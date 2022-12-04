import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./IndicatorsClientOne.styles";
import { IndicatorsClientOneProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOne: React.FC<Props> = props => {
  const t = useI18n().signIn.IndicatorsClientOne;

  return (
    <Styles className="IndicatorsClientOne">
      <div className="IndicatorsClientOne__component--card">
        <h2 className="IndicatorsClientOne__text--light">{t.greetings}</h2>
        <h2 className="IndicatorsClientOne__text--bold">
          ARMANDO RODRIGUEZ GUERRA
        </h2>
        <h2 className="IndicatorsClientOne__text--normal">DNI N° 86752459</h2>
      </div>
    </Styles>
  );
};

IndicatorsClientOne.defaultProps = {};

export default IndicatorsClientOne;
