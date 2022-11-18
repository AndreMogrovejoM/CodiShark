import React from "react";

import Styles from "./InfoCardClientOne.styles";
import { InfoCardClientOneProps as Props } from "./InfoCardClientOne.types";

const InfoCardClientOne: React.FC<Props> = props => {
  const { dni, name } = props;
  return (
    <Styles className={`InfoCardClientOne`}>
      <h2 className="InfoCardClientOne__name">{name}</h2>
      <h2 className="InfoCardClientOne__dni">{dni}</h2>
    </Styles>
  );
};

InfoCardClientOne.defaultProps = {};

export default InfoCardClientOne;
