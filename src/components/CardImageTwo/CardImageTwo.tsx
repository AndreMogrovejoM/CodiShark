import fotoMujerTwo from "assets/images/fotoMujerTwo.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./CardImageTwo.styles";
import { CardImageTwoProps as Props } from "./CardImageTwo.types";

const CardImageTwo: React.FC<Props> = props => {
  const t = useI18n().signIn.CardImageTwo;
  return (
    <Styles className="CardImageTwo">
      <img
        className="CardImageTwo__container"
        src={fotoMujerTwo}
        alt="fotoMujerOne"
      />
      <div className="CardImageTwo__section">
        <p className="CardImageTwo__subtitle1">{t.subtitle1}</p>
        <p className="CardImageTwo__subtitle2">{t.subtitle2}</p>
        <p className="CardImageTwo__subtitle3">{t.subtitle3}</p>
      </div>
    </Styles>
  );
};

CardImageTwo.defaultProps = {};

export default CardImageTwo;
