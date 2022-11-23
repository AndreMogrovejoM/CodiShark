import PaymentDetails from "components/userPaymentDetails/PaymentDetails/PaymentDetails";
import LayoutContainer from "containers/Layout/Layout.container";
import React from "react";

import { UserPaymentDetailsContainerProps as Props } from "./UserPaymentDetails.types";

const UserPaymentDetailsContainer: React.FC<Props> = props => {
  return (
    <LayoutContainer>
      <PaymentDetails />
    </LayoutContainer>
  );
};

UserPaymentDetailsContainer.defaultProps = {};

export default UserPaymentDetailsContainer;
