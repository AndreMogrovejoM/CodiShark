import React from "react";

import Styles from "./SummaryCard.styles";
import { SummaryCardProps as Props } from "./SummaryCard.types";

const SummaryCard: React.FC<Props> = props => {
  const { title, children } = props;
  return (
    <Styles className="SummaryCard">
      <h2 className="SummaryCard__title">{title}</h2>
      <div className="SummaryCard__subtitle">{children}</div>
    </Styles>
  );
};

SummaryCard.defaultProps = {};

export default SummaryCard;
