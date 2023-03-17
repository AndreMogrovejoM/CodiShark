import useI18n from "i18n/i18n.hooks";
import React from "react";
import { numberWithCommas } from "utils/common.utils";

import Styles from "./IndicatorsClientTwo.styles";
import { IndicatorsClientTwoProps as Props } from "./IndicatorsClientTwo.types";

const IndicatorsClientTwo: React.FC<Props> = props => {
  const t = useI18n().signIn.IndicatorsClientTwo;
  const { total_debts, discount } = props;
  const discountValue = discount ?? 0;
  const discountText =
    discount && total_debts ? total_debts * (1 - discount) : 0;

  return (
    <Styles className="IndicatorsClientTwo">
      <div className="IndicatorsClientTwo__card">
        <h2 className="IndicatorsClientTwo__text--bold">{t.debt}</h2>
        {total_debts && (
          <h2 className="IndicatorsClientTwo__text--tached">
            {`S/. ${numberWithCommas(total_debts ?? 0) ?? ""}`}
          </h2>
        )}
        <h2 className="IndicatorsClientTwo__text--blue">{`S/. ${
          numberWithCommas(Math.ceil(discountText)) ?? ""
        }`}</h2>
      </div>
      <div className="IndicatorsClientTwo__discountContainer">
        <h2 className="IndicatorsClientTwo__text--discount">{`-${
          discountValue * 100
        }`}</h2>
        <h3 className="IndicatorsClientTwo__text--percent">%</h3>
        <div>
          <p className="IndicatorsClientTwo__text--p">Ahorra hasta</p>
          <h3 className="IndicatorsClientTwo__text--bold2">Descuento</h3>
        </div>
      </div>
    </Styles>
  );
};

IndicatorsClientTwo.defaultProps = {};

export default IndicatorsClientTwo;
