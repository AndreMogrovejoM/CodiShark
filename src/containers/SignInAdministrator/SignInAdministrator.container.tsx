import SignInAdministrator from "components/SignInAdministrator/SignInAdministrator";
import SignInAdministratorVerify from "components/SignInAdministratorVerify/SignInAdministratorVerify";
import React, { useState } from "react";

import { SignInAdministratorContainerProps as Props } from "./SignInAdministrator.types";

const SignInAdministratorContainer: React.FC<Props> = props => {
  const [step] = useState(1);

  switch (step) {
    case 0:
      return <SignInAdministrator />;
    case 1:
      return <SignInAdministratorVerify />;
    default:
      return <SignInAdministrator />;
  }
};

SignInAdministratorContainer.defaultProps = {};

export default SignInAdministratorContainer;
