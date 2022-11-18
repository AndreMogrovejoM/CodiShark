import fotoMujerOne from "assets/images/fotoMujerOne.svg";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./CardImageOne.styles";
import { CardImageOneProps as Props } from "./CardImageOne.types";

const CardImageOne: React.FC<Props> = props => {
  const t = useI18n().signIn.CardImageOne;
  return (
    <Styles className="CardImageOne">
      <img
        className="CardImageOne__image"
        src={fotoMujerOne}
        alt="fotoMujerOne"
      />
      <h2 className="CardImageOne__subtitle">{t.subtitle}</h2>
      <h2 className="CardImageOne__title">{t.title}</h2>
    </Styles>
  );
};

CardImageOne.defaultProps = {};

export default CardImageOne;
