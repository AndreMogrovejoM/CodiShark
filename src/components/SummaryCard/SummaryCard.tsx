import React from "react";

import Styles from "./SummaryCard.styles";
import { SummaryCardProps as Props } from "./SummaryCard.types";

const SummaryCard: React.FC<Props> = props => {
  const { title, value } = props;
  return (
    <Styles className="SummaryCard">
      <h2 className="SummaryCard__title">{title}</h2>
      <h2 className="SummaryCard__subtitle">{value}</h2>
    </Styles>
  );
};

SummaryCard.defaultProps = {};

export default SummaryCard;
