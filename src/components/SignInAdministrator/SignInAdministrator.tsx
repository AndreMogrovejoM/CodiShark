import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { Button, InputAdornment, TextField } from "@mui/material";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./SignInAdministrator.styles";
import { SignInAdministratorProps as Props } from "./SignInAdministrator.types";

import Logo from "../../assets/images/logo 1.svg";

const SignInAdministrator: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInForm;

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
        <Button variant="contained" className="SignInAdministrator__button">
          <p className="SignInAdministrator__buttonText">Continuar</p>
        </Button>
      </>
    );
  };

  return (
    <Styles className="SignInAdministrator">
      <div className="SignInAdministrator__container">
        <img src={Logo} alt="logo" className="SignInAdministrator__logo" />
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
