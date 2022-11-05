import React from "react";

import Styles from "./InfoCard.styles";
import { InfoCardProps as Props } from "./InfoCard.types";

const InfoCard: React.FC<Props> = props => {
  const { title, value } = props;

  return (
    <Styles className="InfoCard">
      <div className="InfoCard__container">
        <h2 className="InfoCard__title">{title}</h2>
        <h2 className="InfoCard__subtitle">{value}</h2>
      </div>
    </Styles>
  );
};

InfoCard.defaultProps = {};

export default InfoCard;
