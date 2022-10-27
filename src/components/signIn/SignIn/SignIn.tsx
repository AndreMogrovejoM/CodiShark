import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import SignInForm from "../SignInForm/SignInForm";
import Styles from "./SignIn.styles";
import { SignInProps as Props } from "./SignIn.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

const SignIn: React.FC<Props> = props => {
  const { search } = useLocation();
  const { isAnonymous } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If not authenticated
    if (isAnonymous) {
      navigate("/signin");
      return;
    }

    navigate(ENTRY_PATH);
  }, [isAnonymous, navigate, search]);

  return (
    <Styles className="SignIn">
      <main className="SignIn__main">
        <SignInForm />
      </main>
    </Styles>
  );
};

SignIn.defaultProps = {};

export default SignIn;
