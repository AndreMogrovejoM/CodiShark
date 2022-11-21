import React from "react";

import Styles from "./InfoCardClientTwo.styles";
import { InfoCardClientTwoProps as Props } from "./InfoCardClientTwo.types";

const InfoCardClientTwo: React.FC<Props> = props => {
  const { title, value } = props;
  return (
    <Styles className={`InfoCardClientTwo`}>
      <h2 className="InfoCardClientTwo__title">{title}</h2>
      <h2 className="InfoCardClientTwo__value">{value}</h2>
    </Styles>
  );
};

InfoCardClientTwo.defaultProps = {};

export default InfoCardClientTwo;
