import { Box, Typography } from "@mui/material";
import Logo from "assets/images/logo_konecta.webp";
import CONSTANTS from "config/constants";
import Layout from "containers/Layout/Layout.container";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import SignInForm from "../SignInForm/SignInForm";
import Styles from "./SignIn.styles";
import { SignInProps as Props } from "./SignIn.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {`Copyright © B12 ${new Date().getFullYear()} -`}
      Todos los derechos reservados
      {"."}
    </Typography>
  );
}

const SignIn: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInFormUser;

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
    <Layout>
      <Styles className="SignIn">
        <Box className="SignIn__container">
          <img src={Logo} alt={t.altLogo} />

          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
          <SignInForm />

          <Copyright className="SignIn__container--copyright" />
        </Box>
      </Styles>
    </Layout>
  );
};

SignIn.defaultProps = {};

export default SignIn;
