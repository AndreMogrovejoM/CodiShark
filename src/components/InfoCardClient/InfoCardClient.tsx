import React from "react";

import Styles from "./InfoCardClient.styles";
import { InfoCardClientProps as Props } from "./InfoCardClient.types";

const InfoCardClient: React.FC<Props> = props => {
  const { dni, name, title, value } = props;
  return (
    <Styles className={`InfoCardClient`}>
      <h2 className="InfoCardClient__name">{name}</h2>
      <h2 className="InfoCardClient__dni">{dni}</h2>
      <h2 className="InfoCardClient__title">{title}</h2>
      <h2 className="InfoCardClient__value">{value}</h2>
    </Styles>
  );
};

InfoCardClient.defaultProps = {};

export default InfoCardClient;
