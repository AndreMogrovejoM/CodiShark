import React from "react";

import Styles from "./ClientPayment.styles";
import { ClientPaymentProps as Props } from "./ClientPayment.types";

const ClientPayment: React.FC<Props> = props => {
  const { subtitle, title } = props;
  return (
    <Styles className={`ClientPayment`}>
      <h2 className="ClientPayment__title">{title}</h2>
      <h2 className="ClientPayment__subtitle">{subtitle}</h2>
    </Styles>
  );
};

ClientPayment.defaultProps = {};

export default ClientPayment;
