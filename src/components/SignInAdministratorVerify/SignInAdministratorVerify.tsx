import KeyIcon from "@mui/icons-material/Key";
import { Button, InputAdornment, TextField } from "@mui/material";
import useI18n from "i18n/i18n.hooks";
import React from "react";

import Styles from "./SignInAdministratorVerify.styles";
import { SignInAdministratorVerifyProps as Props } from "./SignInAdministratorVerify.types";

import LogoKonecta from "../../assets/images/logoKonecta.svg";

const SignInAdministratorVerify: React.FC<Props> = props => {
  const t = useI18n().signIn.SignInForm;

  const renderHeaderVerify = (
    <>
      <h2 className="SignInAdministratorVerify__title">Bienvenido</h2>
      <h3 className="SignInAdministratorVerify__subTitle">
        Ingrese el código enviado a su número de celular para poder continuar:
      </h3>
    </>
  );

  const renderFormVerify = () => {
    return (
      <>
        <TextField
          id="password"
          type="password"
          label="codigo verificador"
          variant="filled"
          placeholder={t.passwordPlaceholder}
          className="SignInAdministratorVerify__textField"
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
          className="SignInAdministratorVerify__button"
        >
          Ingresar
        </Button>
      </>
    );
  };

  return (
    <Styles className="SignInAdministratorVerify">
      <div className="SignInAdministratorVerify__container">
        <img
          src={LogoKonecta}
          alt="logoKonecta"
          className="SignInAdministratorVerify__logo"
        />
        {renderHeaderVerify}
        {renderFormVerify()}
        <h4 className="SignInAdministratorVerify__footerText">
          Copyright B12 2022 - Todos los derechos reservados
        </h4>
      </div>
    </Styles>
  );
};

SignInAdministratorVerify.defaultProps = {};

export default SignInAdministratorVerify;
