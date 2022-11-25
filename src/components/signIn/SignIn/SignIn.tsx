import { Grid, Paper, Box } from "@mui/material";
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

import LogoKonecta from "../../../assets/images/LogoKonecta.png";

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
      <img src={LogoKonecta} alt={t.altLogo} width={188} />
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

  const renderCopyright = () => (
    <p className="SignIn__container--copyright">{t.copyright}</p>
  );

  const renderList = () => {
    return (
      <div className="SignIn__renderList">
        <h2 className="SignIn__renderList--h2">{t.benefitTitle}</h2>
        <h1 className="SignIn__renderList--h1">{t.benefitSubTitle}</h1>
        <ul className="SignIn__renderList--ul">
          <li className="SignIn__renderList--h2">{t.ul1}</li>
          <li className="SignIn__renderList--h2">{t.ul2}</li>
          <li className="SignIn__renderList--h2">{t.ul3}</li>
          <li className="SignIn__renderList--h2">{t.ul4}</li>
        </ul>
      </div>
    );
  };

  return (
    <Styles className="SignIn">
      <Grid container component="main" className="SignIn__container">
        <Grid item xs={false} sm={4} md={6} className="SignIn__image">
          {renderList()}
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={4}
          square
          container
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
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
