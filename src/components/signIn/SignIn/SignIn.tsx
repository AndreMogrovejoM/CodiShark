import { Grid, Paper, Box } from "@mui/material";
import Logo from "assets/images/logoKonecta.webp";
import CONSTANTS from "config/constants";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SignInCode from "../SignInCode/SignInCode";
import SignInForm from "../SignInForm/SignInForm";
import SignInValidate from "../SignInValidate/SignInValidate";
import Styles from "./SignIn.styles";
import { SignInProps as Props } from "./SignIn.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

const SignIn: React.FC<Props> = props => {
  const { isAnonymous, signInStep } = useAuth();
  const t = useI18n().signIn.SignInFormUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAnonymous) {
      navigate(ENTRY_PATH);
      return;
    }
  }, [isAnonymous, navigate]);

  const renderForm = () => {
    switch (signInStep) {
      case 0:
        return <SignInForm />;
      case 1:
        return <SignInValidate />;
      case 2:
        return <SignInCode />;
      default:
        return <SignInForm />;
    }
  };

  const renderFormHeader = () => (
    <>
      <img src={Logo} alt={t.altLogo} />
      <h1 className="SignIn__title">
        {signInStep !== 2 ? t.title.toUpperCase() : t.titleAlt.toUpperCase()}
      </h1>
      <p className="SignIn__subtitle">
        {signInStep !== 2 ? t.subtitle : t.subtitleAlt}
      </p>
      {signInStep === 2 && (
        <p className="SignIn__subtitle">{t.subtitleAltTwo}</p>
      )}
    </>
  );

  /* TODO: Fixed styles */
  const renderCopyright = () => (
    <p className="SignIn__container--copyright">{t.copyright}</p>
  );

  return (
    <Styles className="SignIn">
      <Grid container component="main" className="SignIn__container">
        <Grid item xs={false} sm={4} md={8} className="SignIn__image" />
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          component={Paper}
          elevation={4}
          square
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box className="SignIn__container--form">
            <Box className="SignIn__container--center   SignIn__container--content">
              {renderFormHeader()}
            </Box>
            {renderForm()}
          </Box>
          {renderCopyright()}
        </Grid>
      </Grid>
    </Styles>
  );
};

SignIn.defaultProps = {};

export default SignIn;
