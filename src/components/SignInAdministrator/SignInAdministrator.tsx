import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { Button, InputAdornment, TextField } from "@mui/material";
import useAuth from "contexts/auth/auth.hooks";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./SignInAdministrator.styles";
import { SignInAdministratorProps as Props } from "./SignInAdministrator.types";

import LogoKonecta from "../../assets/images/logoKonecta.svg";

const SignInAdministrator: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInForm;
  const { setIsAnonymous } = useAuth();

  const handleSubmit = () => {
    setIsAnonymous(false);
  };

  const renderHeader = (
    <>
      <h2 className="SignInAdministrator__title">Bienvenido</h2>
      <h3 className="SignInAdministrator__subTitle">
        ¡Hola! Sigue estos simples pasos
      </h3>
    </>
  );

  const renderForm = () => {
    return (
      <>
        <TextField
          id="email"
          type="email"
          label="email"
          variant="filled"
          placeholder={t.emailPlaceholder}
          className="SignInAdministrator__textField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        />
        <TextField
          id="password"
          type="password"
          label="password"
          variant="filled"
          placeholder={t.passwordPlaceholder}
          className="SignInAdministrator__textField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            )
          }}
        />
        <Button
          variant="contained"
          className="SignInAdministrator__button"
          onClick={handleSubmit}
        >
          Continuar
        </Button>
      </>
    );
  };

  return (
    <Styles className="SignInAdministrator">
      <div className="SignInAdministrator__container">
        <img
          src={LogoKonecta}
          alt="logoKonecta"
          className="SignInAdministrator__logo"
        />
        {renderHeader}
        {renderForm()}
        <h4 className="SignInAdministrator__footerText">
          Copyright B12 2022 - Todos los derechos reservados
        </h4>
      </div>
    </Styles>
  );
};

SignInAdministrator.defaultProps = {};

export default SignInAdministrator;
