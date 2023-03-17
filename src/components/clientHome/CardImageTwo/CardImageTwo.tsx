import cardImageTwo from "assets/images/cardImageTwo.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./CardImageTwo.styles";
import { CardImageTwoProps as Props } from "./CardImageTwo.types";

const CardImageTwo: React.FC<Props> = props => {
  const t = useI18n().signIn.CardImageTwo;
  return (
    <Styles className="CardImageTwo">
      <img
        className="CardImageTwo__image"
        src={cardImageTwo}
        alt="fotoMujerOne"
      />
      <div className="CardImageTwo__sectionContainer">
        <div className="CardImageTwo__section">
          <p className="CardImageTwo__subtitle1">{t.subtitle1}</p>
          <p className="CardImageTwo__subtitle2">{t.subtitle2}</p>
        </div>
      </div>
    </Styles>
  );
};

CardImageTwo.defaultProps = {};

export default CardImageTwo;
