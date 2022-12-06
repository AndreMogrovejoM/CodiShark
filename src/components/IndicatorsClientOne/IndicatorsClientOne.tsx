import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./IndicatorsClientOne.styles";
import { IndicatorsClientOneProps as Props } from "./IndicatorsClientOne.types";

const IndicatorsClientOne: React.FC<Props> = props => {
  const t = useI18n().signIn.IndicatorsClientOne;
  const { user } = useAuth();
  const { first_name, last_name, mother_last_name } = user ?? {};

  return (
    <Styles className="IndicatorsClientOne">
      <div className="IndicatorsClientOne__component--card">
        <h2 className="IndicatorsClientOne__text--light">{t.greetings}</h2>
        <h2 className="IndicatorsClientOne__text--bold">
          {` ${first_name ?? ""}`} {` ${last_name ?? ""}`} {mother_last_name}
        </h2>
        <h2 className="IndicatorsClientOne__text--normal">DNI N° 86752459</h2>
      </div>
    </Styles>
  );
};

IndicatorsClientOne.defaultProps = {};

export default IndicatorsClientOne;
