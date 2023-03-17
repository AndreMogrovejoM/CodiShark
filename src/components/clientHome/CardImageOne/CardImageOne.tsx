import cardImageOne from "assets/images/cardImageOne.svg";
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
        src={cardImageOne}
        alt="cardImageOne"
      />
      <div className="CardImageOne__textContainer">
        <h2 className="CardImageOne__subtitle">{t.subtitle}</h2>
        <h2 className="CardImageOne__title">{t.title}</h2>
      </div>
    </Styles>
  );
};

CardImageOne.defaultProps = {};

export default CardImageOne;
