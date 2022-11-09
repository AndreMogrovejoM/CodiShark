import SignInAdministrator from "components/SignInAdministrator/SignInAdministrator";
import SignInAdministratorVerify from "components/SignInAdministratorVerify/SignInAdministratorVerify";
import useAuth from "contexts/auth/auth.hooks";
import React from "react";

import { SignInAdministratorContainerProps as Props } from "./SignInAdministrator.types";

const SignInAdministratorContainer: React.FC<Props> = props => {
  const { signInStep } = useAuth();

  switch (signInStep) {
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
