import InfoCardClient from "components/InfoCardClientOne/InfoCardClientOne";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./IndicatorsClientOne.styles";
import { IndicatorsClientOneProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOne: React.FC<Props> = props => {
  const t = useI18n().signIn.IndicatorsClientOne;
  return (
    <Styles className="IndicatorsClientOne">
      <h2 className="IndicatorsClientOne__title">{t.greetings}</h2>
      <div className="IndicatorsClientOne__cardsContainer">
        <InfoCardClient
          name={"ARMANDO RODRIGUEZ GUERRA"}
          dni={"DNI N° 86752459"}
        />
      </div>
    </Styles>
  );
};

IndicatorsClientOne.defaultProps = {};

export default IndicatorsClientOne;
